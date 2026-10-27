import { loadData, saveData } from './data.js';
import { getLang, setLang, t, translateRole, translateStatus, translatePeriod, translateSubject } from './i18n.js';
import { renderDashboardView } from './components/dashboardView.js';
import { renderLeadsView } from './components/leadsView.js';
import { renderStudentsView } from './components/studentsView.js';
import { renderClassesView } from './components/classesView.js';
import { renderPaymentsView } from './components/paymentsView.js';
import { renderAttendanceView } from './components/attendanceView.js';
import { renderReportsView } from './components/reportsView.js';

// Application State
class MaktabCRM {
  constructor() {
    this.data = loadData();
    this.currentTab = 'dashboard';
    
    // Theme & Language State
    this.currentTheme = localStorage.getItem('maktab_crm_theme') || 'light';
    this.currentLang = getLang();

    // View-specific state
    this.leadFilterQuery = '';
    this.leadMobileCol = 'all';
    this.leadSourceFilter = null;
    this.draggedLeadId = null;

    this.studentSearchQuery = '';
    this.studentActiveFilter = 'all';
    this.selectedStudentClass = null;
    this.selectedStudentId = this.data.students?.[0]?.id || null;

    this.paymentSelectedClass = null;
    this.paymentSearchQuery = '';
    this.paymentPeriod = '30 kun';

    this.attendanceSubTab = 'classes';
    this.activeAttendanceClassId = null;
    this.tempAttendanceMap = {}; // studentId -> 'present' | 'absent' | 'excused'

    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.updateLangLabels();
    this.updateStaticTranslations();
    this.bindNavigation();
    this.bindThemeAndLangControls();
    this.switchTab(this.currentTab);
  }

  // Bind Theme & Language buttons
  bindThemeAndLangControls() {
    const mobileTheme = document.getElementById('mobile-theme-btn');
    const desktopTheme = document.getElementById('desktop-theme-btn');
    const mobileLang = document.getElementById('mobile-lang-btn');
    const desktopLang = document.getElementById('desktop-lang-btn');

    if (mobileTheme) mobileTheme.addEventListener('click', () => this.toggleTheme());
    if (desktopTheme) desktopTheme.addEventListener('click', () => this.toggleTheme());
    if (mobileLang) mobileLang.addEventListener('click', () => this.toggleLanguage());
    if (desktopLang) desktopLang.addEventListener('click', () => this.toggleLanguage());
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('maktab_crm_theme', this.currentTheme);
    this.applyTheme(this.currentTheme);
    const msg = this.currentTheme === 'dark' ? t('themeDarkToast') : t('themeLightToast');
    this.showToast(msg, 'info');
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = theme === 'dark' ? '☀️' : '🌙';
    document.querySelectorAll('.theme-icon').forEach(el => el.textContent = icon);
  }

  toggleLanguage() {
    if (this.currentLang === 'uz') {
      this.currentLang = 'ru';
    } else if (this.currentLang === 'ru') {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'uz';
    }
    setLang(this.currentLang);
    this.updateLangLabels();
    this.updateStaticTranslations();
    this.renderCurrentView();
    const msgs = {
      ru: 'Язык изменён: Русский',
      en: 'Language changed: English',
      uz: "Til o'zgartirildi: O'zbekcha"
    };
    this.showToast(msgs[this.currentLang] || msgs.uz, 'info');
  }

  updateLangLabels() {
    const label = this.currentLang.toUpperCase();
    document.querySelectorAll('.lang-text').forEach(el => el.textContent = label);
  }

  updateStaticTranslations() {
    document.title = `${t('brandName')} - ${t('brandSubtitle')}`;

    // Brand subtitle
    const brandSub = document.querySelector('.brand-text span');
    if (brandSub) brandSub.textContent = t('brandSubtitle');
    
    // User info
    const directorName = document.querySelector('.user-name');
    if (directorName) directorName.textContent = t('director');

    const directorRole = document.querySelector('.user-role');
    if (directorRole) directorRole.textContent = t('adminRole');

    // Desktop nav items
    const desktopNavMap = {
      'dashboard': t('dashboard'),
      'leads': t('leads'),
      'students': t('students'),
      'classes': t('classes'),
      'payments': t('payments'),
      'attendance': t('attendance'),
      'reports': t('reports'),
    };
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      const tab = btn.dataset.tab;
      const span = btn.querySelector('span');
      if (tab && span && desktopNavMap[tab]) {
        span.textContent = desktopNavMap[tab];
      }
    });

    // Mobile bottom nav items
    const mobileNavMap = {
      'dashboard': t('mainTab'),
      'leads': t('leads').split(' ')[0],
      'students': t('studentTab'),
      'payments': t('payments'),
    };
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      const tab = btn.dataset.tab;
      const span = btn.querySelector('span');
      if (tab && span && mobileNavMap[tab]) {
        span.textContent = mobileNavMap[tab];
      }
    });
    const moreBtnSpan = document.querySelector('#mobile-more-btn span');
    if (moreBtnSpan) moreBtnSpan.textContent = t('menu');
  }

  // Bind sidebar and mobile bottom nav click events
  bindNavigation() {
    // Desktop sidebar nav
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.dataset.tab;
        if (tab) this.switchTab(tab);
      });
    });

    // Mobile bottom nav
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab) {
          this.switchTab(tab);
        }
      });
    });

    // Mobile hamburger menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMoreBtn = document.getElementById('mobile-more-btn');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebar = document.getElementById('sidebar');

    const toggleSidebar = () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('active');
    };

    const closeSidebar = () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
    };

    if (mobileToggle) mobileToggle.addEventListener('click', toggleSidebar);
    if (mobileMoreBtn) mobileMoreBtn.addEventListener('click', toggleSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Profile badge opens system/admin modal
    const profileBadge = document.getElementById('profile-badge');
    if (profileBadge) {
      profileBadge.style.cursor = 'pointer';
      profileBadge.addEventListener('click', () => this.openProfileModal());
    }

    // Brand logo returns to dashboard
    const brandBtn = document.getElementById('brand-logo-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => this.switchTab('dashboard'));
    }

    // Close modal on escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });

    // Close modal on backdrop click
    const modalHost = document.getElementById('modal-container');
    if (modalHost) {
      modalHost.addEventListener('click', (e) => {
        if (e.target === modalHost) {
          this.closeModal();
        }
      });
    }

    // Close dropdown on outside click
    window.addEventListener('click', (e) => {
      const dropdown = document.getElementById('payments-period-dropdown');
      const toggleBtn = document.getElementById('period-toggle-btn');
      if (dropdown && dropdown.style.display === 'block') {
        if (!dropdown.contains(e.target) && !toggleBtn?.contains(e.target)) {
          dropdown.style.display = 'none';
        }
      }

      const searchDropdown = document.getElementById('dash-search-results-dropdown');
      const searchInput = document.getElementById('dash-global-search-input');
      if (searchDropdown && searchDropdown.style.display === 'block') {
        if (!searchDropdown.contains(e.target) && !searchInput?.contains(e.target)) {
          searchDropdown.style.display = 'none';
        }
      }
    });
  }

  // Global search for Dashboard Header
  handleGlobalSearch(query) {
    const dropdown = document.getElementById('dash-search-results-dropdown');
    if (!dropdown) return;

    const q = (query || '').trim().toLowerCase();
    if (!q) {
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
      return;
    }

    const matchedStudents = (this.data.students || []).filter(s => 
      s.name.toLowerCase().includes(q) || 
      (s.phone && s.phone.includes(q)) || 
      (s.sinf && s.sinf.toLowerCase().includes(q))
    ).slice(0, 5);

    const matchedLeads = (this.data.leads || []).filter(l => 
      l.name.toLowerCase().includes(q) || 
      (l.phone && l.phone.includes(q))
    ).slice(0, 4);

    const matchedClasses = (this.data.classes || []).filter(c => 
      c.name.toLowerCase().includes(q) || 
      (c.teacherName && c.teacherName.toLowerCase().includes(q))
    ).slice(0, 3);

    if (matchedStudents.length === 0 && matchedLeads.length === 0 && matchedClasses.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 13px;">
          Hech narsa topilmadi
        </div>
      `;
      dropdown.style.display = 'block';
      return;
    }

    let html = '';

    if (matchedStudents.length > 0) {
      html += `<div class="search-res-group-title">O'quvchilar</div>`;
      html += matchedStudents.map(s => `
        <div class="search-result-item" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${s.sinf}'); window.app.selectStudentDetail('${s.id}'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar">${s.initials || s.name.charAt(0)}</div>
          <div class="search-res-info">
            <span class="search-res-name">${s.name}</span>
            <span class="search-res-sub">${s.sinf} • ${s.phone || ''}</span>
          </div>
          <span class="search-res-tag">O'quvchi</span>
        </div>
      `).join('');
    }

    if (matchedLeads.length > 0) {
      html += `<div class="search-res-group-title">Qabul (Leadlar)</div>`;
      html += matchedLeads.map(l => `
        <div class="search-result-item" onclick="window.app.switchTab('leads'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar" style="background: #f97316;">${l.manager || 'L'}</div>
          <div class="search-res-info">
            <span class="search-res-name">${l.name}</span>
            <span class="search-res-sub">${l.grade || ''} • ${l.phone || ''}</span>
          </div>
          <span class="search-res-tag" style="background: #fff7ed; color: #ea580c;">Lead</span>
        </div>
      `).join('');
    }

    if (matchedClasses.length > 0) {
      html += `<div class="search-res-group-title">Sinflar</div>`;
      html += matchedClasses.map(c => `
        <div class="search-result-item" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${c.name}'); document.getElementById('dash-search-results-dropdown').style.display='none';">
          <div class="search-res-avatar" style="background: #007a55;">${c.name}</div>
          <div class="search-res-info">
            <span class="search-res-name">${c.name} Sinf</span>
            <span class="search-res-sub">${c.teacherName || ''}</span>
          </div>
          <span class="search-res-tag">Sinf</span>
        </div>
      `).join('');
    }

    dropdown.innerHTML = html;
    dropdown.style.display = 'block';
  }

  // Switch between tabs
  switchTab(tabName) {
    this.currentTab = tabName;

    // Update active class in desktop sidebar
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Update active class in mobile bottom nav
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    // Close mobile drawer if opened
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');

    // Scroll to top
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTop = 0;

    this.renderCurrentView();
  }

  // Render content of current view into #view-container
  renderCurrentView() {
    const container = document.getElementById('view-container');
    if (!container) return;

    switch (this.currentTab) {
      case 'dashboard':
        container.innerHTML = renderDashboardView(this.data);
        break;
      case 'leads':
        container.innerHTML = renderLeadsView(this.data, this.leadFilterQuery, this.leadMobileCol, this.leadSourceFilter);
        break;
      case 'students':
        container.innerHTML = renderStudentsView(this.data, this.studentActiveFilter, this.studentSearchQuery, this.selectedStudentClass, this.selectedStudentId);
        break;
      case 'classes':
        container.innerHTML = renderClassesView(this.data);
        break;
      case 'payments':
        container.innerHTML = renderPaymentsView(this.data, this.paymentSelectedClass, this.paymentSearchQuery, this.paymentPeriod);
        break;
      case 'attendance':
        container.innerHTML = renderAttendanceView(this.data, this.attendanceSubTab);
        break;
      case 'reports':
        container.innerHTML = renderReportsView(this.data);
        break;
      default:
        container.innerHTML = renderDashboardView(this.data);
    }
  }

  // ==========================================
  // LEADS (QABUL) CONTROLLERS & KANBAN
  // ==========================================
  filterLeads(query) {
    this.leadFilterQuery = query;
    const container = document.getElementById('view-container');
    if (this.currentTab === 'leads' && container) {
      container.innerHTML = renderLeadsView(this.data, this.leadFilterQuery, this.leadMobileCol, this.leadSourceFilter);
      const inp = container.querySelector('.search-input');
      if (inp) {
        inp.focus();
        const len = inp.value.length;
        inp.setSelectionRange(len, len);
      }
    }
  }

  switchLeadMobileCol(col) {
    this.leadMobileCol = col;
    this.renderCurrentView();
  }

  switchMobileLeadCol(col) {
    this.switchLeadMobileCol(col);
  }

  handleDragStart(e, leadId) {
    this.draggedLeadId = leadId;
    e.dataTransfer.setData('text/plain', leadId);
    e.dataTransfer.effectAllowed = 'move';
    if (e.target) e.target.classList.add('is-dragging');
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const col = e.currentTarget;
    if (col && !col.classList.contains('drag-over')) {
      col.classList.add('drag-over');
    }
  }

  handleDrop(e, targetStage) {
    e.preventDefault();
    document.querySelectorAll('.kanban-col').forEach(c => c.classList.remove('drag-over'));
    document.querySelectorAll('.lead-card').forEach(c => c.classList.remove('is-dragging'));

    const leadId = e.dataTransfer.getData('text/plain') || this.draggedLeadId;
    if (!leadId) return;

    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead && lead.stage !== targetStage) {
      lead.stage = targetStage;
      saveData(this.data);
      this.renderCurrentView();

      const stageLabels = {
        'yangi': 'Yangi so\'rovlar',
        'boglanildi': 'Bog\'lanildi',
        'suhbat': 'Suhbat va test',
        'shartnoma': 'Shartnoma imzolandi'
      };
      this.showToast(`"${lead.name}" -> ${stageLabels[targetStage] || targetStage} bosqichiga o'tkazildi!`, 'success');
    }
    this.draggedLeadId = null;
  }

  openLeadDetails(leadId) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    const stageOptions = [
      { id: 'yangi', label: t('stageNewRequests') },
      { id: 'boglanildi', label: t('stageContacted') },
      { id: 'suhbat', label: t('stageInterview') },
      { id: 'shartnoma', label: t('stageContract') }
    ];

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${lead.name}</h3>
            <p>${lead.grade} &bull; ${t('leadCameVia')} ${lead.source}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-grid">
            <div style="background: var(--bg-subtle); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 2px;">${t('parentLabel')}:</div>
              <div style="font-weight: 600; font-size: 14px; color: var(--text-main);">${lead.parent}</div>
              <div style="font-size: 13.5px; color: var(--primary); font-weight: 600; margin-top: 4px;">
                <a href="tel:${lead.phone}" style="color: inherit; text-decoration: none; display: flex; align-items: center; gap: 6px;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  ${lead.phone} (${t('callParent')})
                </a>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${t('changeStage')}</label>
              <select class="form-select" id="lead-stage-select" onchange="window.app.updateLeadStage('${lead.id}', this.value)">
                ${stageOptions.map(opt => `
                  <option value="${opt.id}" ${lead.stage === opt.id ? 'selected' : ''}>${opt.label}</option>
                `).join('')}
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">${t('notesLabel')}</label>
              <textarea class="form-textarea" id="lead-note-input" rows="3">${lead.note || ''}</textarea>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); padding-top: 8px; border-top: 1px solid var(--border-subtle);">
              <span>${t('manager')}: <strong>${lead.manager}</strong></span>
              <span>${t('date')}: ${lead.date}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 14px 20px;">
          <button class="btn btn-secondary" onclick="window.app.deleteLead('${lead.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3); padding: 8px 12px; font-size: 13px;">
            ${t('delete')}
          </button>
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.convertLeadToStudent('${lead.id}')" style="color: var(--primary); border-color: var(--primary); padding: 8px 14px; font-size: 13px; font-weight: 600;">
              ${t('convertToStudent')}
            </button>
            <button class="btn btn-secondary" onclick="window.app.closeModal()" style="padding: 8px 14px; font-size: 13px;">${t('cancel')}</button>
            <button class="btn btn-primary" onclick="window.app.saveLeadNotes('${lead.id}')" style="padding: 8px 18px; font-size: 13px;">${t('save')}</button>
          </div>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  updateLeadStage(leadId, newStage) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead) {
      lead.stage = newStage;
      saveData(this.data);
      this.renderCurrentView();
      this.showToast(`Bosqich yangilandi: ${newStage}`, 'info');
    }
  }

  saveLeadNotes(leadId) {
    const noteEl = document.getElementById('lead-note-input');
    const lead = this.data.leads.find(l => l.id === leadId);
    if (lead && noteEl) {
      lead.note = noteEl.value.trim();
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast('Ma\'lumotlar saqlandi!', 'success');
    }
  }

  deleteLead(leadId) {
    if (confirm('Ushbu arizani o\'chirishga ishonchingiz komilmi?')) {
      this.data.leads = this.data.leads.filter(l => l.id !== leadId);
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast('Ariza o\'chirildi', 'info');
    }
  }

  openNewLeadModal() {
    this.openModal('addLead');
  }

  toggleLeadFilterModal() {
    const sources = ['Hammasi', 'Instagram', 'Telegram', 'Tavsiya', 'Sayt'];
    const active = this.leadSourceFilter || 'Hammasi';
    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Qabul arizalari filtri</h3>
            <p>Murojaat manbasi bo'yicha saralash</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label class="form-label">Murojaat manbasi</label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
              ${sources.map(src => `
                <button 
                  type="button" 
                  class="filter-pill ${active === src ? 'active' : ''}" 
                  onclick="window.app.setLeadSourceFilter('${src}')"
                  style="padding: 6px 14px; font-size: 13px;"
                >
                  ${src}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="window.app.setLeadSourceFilter('Hammasi')">Filtrni tozalash</button>
          <button type="button" class="btn btn-primary" onclick="window.app.closeModal()">Yopish</button>
        </div>
      </div>
    `;
    this.showModalContent(content);
  }

  setLeadSourceFilter(src) {
    this.leadSourceFilter = src === 'Hammasi' ? null : src;
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Manba: ${src}`, 'info');
  }

  convertLeadToStudent(leadId) {
    const lead = this.data.leads.find(l => l.id === leadId);
    if (!lead) return;

    this.closeModal();
    this.openModal('addStudent');

    setTimeout(() => {
      const nameInput = document.getElementById('new-std-name');
      const classSelect = document.getElementById('new-std-class');
      const parentInput = document.getElementById('new-std-parent');
      const phoneInput = document.getElementById('new-std-phone');

      if (nameInput) nameInput.value = lead.name;
      if (parentInput) parentInput.value = lead.parent;
      if (phoneInput) phoneInput.value = lead.phone;
      if (classSelect && lead.grade) {
        const matchingClass = this.data.classes.find(c => c.name.startsWith(lead.grade[0]));
        if (matchingClass) classSelect.value = matchingClass.name;
      }

      lead.stage = 'shartnoma';
      saveData(this.data);
    }, 60);

    this.showToast(`"${lead.name}" ma'lumotlari yuklandi. Saqlash tugmasini bosing!`, 'info');
  }

  // ==========================================
  // STUDENTS CONTROLLERS
  // ==========================================
  filterStudentsSearch(query) {
    this.studentSearchQuery = query;
    const container = document.getElementById('view-container');
    if (this.currentTab === 'students' && container) {
      container.innerHTML = renderStudentsView(this.data, this.studentActiveFilter, this.studentSearchQuery, this.selectedStudentClass, this.selectedStudentId);
      const inp = container.querySelector('.search-input-compact');
      if (inp) {
        inp.focus();
        const len = inp.value.length;
        inp.setSelectionRange(len, len);
      }
    }
  }

  filterStudentsPill(filter) {
    this.studentActiveFilter = filter;
    if (filter === 'all') {
      this.selectedStudentClass = null;
    } else if (filter === '1-sinf') {
      this.selectedStudentClass = '1-A';
    } else if (filter === '2-sinf') {
      this.selectedStudentClass = '2-A';
    } else if (filter === '3-sinf') {
      this.selectedStudentClass = '3-A';
    } else if (filter === '4-sinf') {
      this.selectedStudentClass = '4-B';
    } else if (filter === '5-sinf') {
      this.selectedStudentClass = '5-A';
    } else if (filter === 'debt') {
      this.selectedStudentClass = null;
    } else {
      this.selectedStudentClass = null;
    }
    this.renderCurrentView();
  }

  setStudentFilter(filter) {
    this.filterStudentsPill(filter);
  }

  selectStudentClass(className) {
    this.selectedStudentClass = className;
    if (className) {
      const grade = className.charAt(0);
      this.studentActiveFilter = `${grade}-sinf`;
    } else {
      this.studentActiveFilter = 'all';
    }
    this.renderCurrentView();
  }

  selectStudent(studentId) {
    this.selectedStudentId = studentId;
    this.renderCurrentView();
  }

  openNewStudentModal() {
    this.openModal('addStudent');
  }

  // ==========================================
  // PAYMENTS CONTROLLERS
  // ==========================================
  selectPaymentClass(className) {
    this.paymentSelectedClass = (className === 'all') ? null : className;
    this.renderCurrentView();
  }

  filterPaymentsSearch(query) {
    this.paymentSearchQuery = query;
    const container = document.getElementById('view-container');
    if (this.currentTab === 'payments' && container) {
      container.innerHTML = renderPaymentsView(this.data, this.paymentSelectedClass, this.paymentSearchQuery, this.paymentPeriod);
      const inp = container.querySelector('.payments-search-input');
      if (inp) {
        inp.focus();
        const len = inp.value.length;
        inp.setSelectionRange(len, len);
      }
    }
  }

  togglePaymentPeriodMenu(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('payments-period-dropdown');
    if (dropdown) {
      const isVisible = dropdown.style.display === 'block';
      dropdown.style.display = isVisible ? 'none' : 'block';
    }
  }

  setPaymentPeriod(period) {
    this.paymentPeriod = period;
    this.renderCurrentView();
  }

  exportPaymentsToCSV() {
    let csv = "O'quvchi,Sinf,Ota-onasi,Telefon,Oylik to'lov,To'langan,Qoldiq,Holat\n";
    const list = this.paymentSelectedClass 
      ? this.data.students.filter(s => s.sinf === this.paymentSelectedClass)
      : this.data.students;

    list.forEach(s => {
      csv += `"${s.name}","${s.sinf}","${s.parentName || ''}","${s.phone || ''}",${s.monthlyFee || 0},${s.paidAmount || 0},${s.debtAmount || 0},"${s.paymentStatus}"\n`;
    });
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tolovlar_${this.paymentSelectedClass || 'barcha_sinflar'}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    this.showToast("To'lovlar hisoboti yuklab olindi!", "success");
  }

  openStudentDetailsModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const parentRoleText = translateRole(std.parentRole || 'Ota-onasi');
    const statusText = translateStatus(std.paymentStatus || (std.debtAmount === 0 ? 'paid' : 'debt'));
    const isDocUploaded = (val) => val !== false ? `✓ ${t('save')}` : `✕ ${t('statusDebt')}`;

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t('studentDetails')}</h3>
            <p>${std.name} — ${std.sinf}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: #fff; font-weight: 700; font-size: 18px; display: flex; align-items: center; justify-content: center;">
              ${std.initials || 'OQ'}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">${std.name}</div>
              <div style="font-size: 13px; color: var(--text-muted);">${std.sinf} • ${t('birthDateLabel')}: ${std.birthDate || '—'}</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13.5px;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${parentRoleText}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.parentName}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${t('phoneText')}:</span>
              <a href="tel:${std.phone}" style="font-weight: 600; color: var(--primary); text-decoration: none;">${std.phone}</a>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${t('homeroomTeacherLabel')}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.homeroomTeacher || '—'}</span>
            </div>
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
              <span style="color: var(--text-muted);">${t('status')}:</span>
              <span style="font-weight: 700; color: ${std.paymentStatusCode === 'paid' ? '#10b981' : (std.paymentStatusCode === 'partial' ? '#d97706' : '#dc2626')};">
                ${statusText} ${(std.debtAmount || 0) > 0 ? `(${t('debtSummary')}: ` + std.debtAmount.toLocaleString('ru-RU') + ' ' + t('som') + ')' : ''}
              </span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-bottom: 4px;">
              <span style="color: var(--text-muted);">${t('attendance')}:</span>
              <span style="font-weight: 600; color: var(--text-main);">${std.attendance || '95%'}</span>
            </div>
          </div>

          <!-- Documents Checklist -->
          <div style="margin-top: 20px;">
            <div style="font-weight: 600; font-size: 13.5px; margin-bottom: 10px; color: var(--text-main);">${t('requiredDocs')}:</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${t('docBirthCert')}</span>
                <span style="color: #10b981; font-weight: 600;">✓</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${t('docMedReport')}</span>
                <span style="color: ${std.docs?.medicalReport !== false ? '#10b981' : '#dc2626'}; font-weight: 600;">
                  ${std.docs?.medicalReport !== false ? '✓' : '✕'}
                </span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); font-size: 13px;">
                <span>${t('docContract')}</span>
                <span style="color: #10b981; font-weight: 600;">✓</span>
              </div>
            </div>
          </div>

          <!-- Repetitorlik va To'garaklar -->
          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 600; font-size: 13.5px; color: var(--text-main);">${t('tutorsListLabel')}:</span>
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px; display: inline-flex; align-items: center; gap: 4px;" onclick="window.app.openStudentAssignTutorModal('${std.id}')">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>${t('addStudentToTutorBtn')}</span>
              </button>
            </div>
            ${((this.data.tutorCourses || []).filter(c => (c.studentIds || []).includes(std.id))).length === 0 ? `
              <div style="font-size: 13px; color: var(--text-muted); font-style: italic;">${t('noTutorsEnrolled')}</div>
            ` : `
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${((this.data.tutorCourses || []).filter(c => (c.studentIds || []).includes(std.id))).map(c => `
                  <div style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; background: rgba(59, 130, 246, 0.1); color: var(--primary); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: var(--radius-sm); font-size: 12.5px; font-weight: 600;">
                    <span>${c.name}</span>
                    <button type="button" style="background: none; border: none; cursor: pointer; color: #ef4444; font-size: 15px; padding: 0; line-height: 1; display: inline-flex; align-items: center;" onclick="window.app.removeStudentFromTutor('${c.id}', '${std.id}')" title="${t('removeStudentFromTutor')}">&times;</button>
                  </div>
                `).join('')}
              </div>
            `}
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${t('close')}</button>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" onclick="window.app.openEditStudentModal('${std.id}')">${t('edit')}</button>
            <button class="btn btn-primary" onclick="window.app.openQuickPayModal('${std.id}')">${t('acceptPaymentBtn')}</button>
          </div>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  openStudentAssignTutorModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    if (!Array.isArray(this.data.tutorCourses)) this.data.tutorCourses = [];
    const availableCourses = this.data.tutorCourses.filter(c => !(c.studentIds || []).includes(studentId));

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t('assignStudentModalTitle')}</h3>
            <p>${std.name} (${std.sinf || '—'}) &bull; ${t('assignStudentModalSub')}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.openStudentDetailsModal('${std.id}')" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onsubmit="window.app.handleStudentAssignTutor(event, '${std.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${t('tutorCoursesLabel')} <span class="req">*</span></label>
                ${availableCourses.length === 0 ? `
                  <div style="padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); color: var(--text-muted); font-size: 13.5px;">
                    ${t('allStudentsAlreadyEnrolled')}
                  </div>
                ` : `
                  <select class="form-select" id="std-assign-course-id" required style="font-size: 14px; padding: 10px 12px;">
                    <option value="" disabled selected>${t('selectStudentToAssign')}...</option>
                    ${availableCourses.map(c => `
                      <option value="${c.id}">
                        ${c.name} (${c.instructor || '—'}) ${c.fee ? `• ${Number(c.fee).toLocaleString()} ${t('som')}` : ''}
                      </option>
                    `).join('')}
                  </select>
                `}
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.openStudentDetailsModal('${std.id}')">${t('cancel')}</button>
            ${availableCourses.length > 0 ? `
              <button type="submit" class="btn btn-primary">${t('assignStudentSubmitBtn')}</button>
            ` : ''}
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  handleStudentAssignTutor(e, studentId) {
    e.preventDefault();
    const courseId = document.getElementById('std-assign-course-id')?.value;
    if (!courseId) return;

    const course = this.data.tutorCourses?.find(c => c.id === courseId);
    if (!course) return;

    if (!Array.isArray(course.studentIds)) course.studentIds = [];
    if (!course.studentIds.includes(studentId)) {
      course.studentIds.push(studentId);
    }

    const std = this.data.students.find(s => s.id === studentId);
    saveData(this.data);
    this.showToast(`"${std ? std.name : 'O\'quvchi'}" "${course.name}" to'garagiga biriktirildi!`, 'success');
    this.openStudentDetailsModal(studentId);
    this.renderCurrentView();
  }

  openEditStudentModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t('editStudentBtn')}</h3>
            <p>${std.name}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="edit-student-form" onsubmit="window.app.saveStudentEdit(event, '${std.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${t('studentFullName')} <span class="req">*</span></label>
                <input type="text" class="form-control" id="edit-std-name" value="${std.name}" required />
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">${t('gradeSelect')} <span class="req">*</span></label>
                  <select class="form-select" id="edit-std-sinf" required>
                    ${this.data.classes.map(c => `
                      <option value="${c.name}" ${std.sinf === c.name ? 'selected' : ''}>${c.name}</option>
                    `).join('')}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">${t('birthDateLabel')}</label>
                  <input type="text" class="form-control" id="edit-std-bdate" value="${std.birthDate || ''}" placeholder="12.03.2017" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">${t('parentNameLabel')} <span class="req">*</span></label>
                  <input type="text" class="form-control" id="edit-std-parent" value="${std.parentName}" required />
                </div>

                <div class="form-group">
                  <label class="form-label">${t('phoneLabel')} <span class="req">*</span></label>
                  <input type="tel" class="form-control" id="edit-std-phone" value="${std.phone}" required />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">${t('monthlyFeeAmount')}</label>
                <input type="number" class="form-control" id="edit-std-fee" value="${std.monthlyFee || 3000000}" min="0" step="any" />
              </div>

              <!-- Repetitorlik va to'garaklar checkboxlari -->
              <div class="form-group" style="margin-top: 6px;">
                <label class="form-label">${t('tutorCoursesLabel')}</label>
                <div style="display: flex; flex-direction: column; gap: 8px; padding: 10px 12px; background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); max-height: 140px; overflow-y: auto;">
                  ${(!this.data.tutorCourses || this.data.tutorCourses.length === 0) ? `
                    <span style="font-size: 12.5px; color: var(--text-muted);">${t('noTutorStudentsFound')}</span>
                  ` : this.data.tutorCourses.map(c => {
                    const isEnrolled = (c.studentIds || []).includes(std.id);
                    return `
                      <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                        <input type="checkbox" name="edit-std-tutors" value="${c.id}" ${isEnrolled ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: var(--primary);" />
                        <span style="font-weight: 500; color: var(--text-main);">${c.name}</span>
                        <span style="color: var(--text-muted); font-size: 11.5px;">(${c.instructor || '—'})</span>
                      </label>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <button type="button" class="btn btn-secondary" onclick="window.app.deleteStudent('${std.id}')" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
              ${t('delete')}
            </button>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
              <button type="submit" class="btn btn-primary">${t('save')}</button>
            </div>
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  saveStudentEdit(e, studentId) {
    e.preventDefault();
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    std.name = document.getElementById('edit-std-name').value.trim();
    std.sinf = document.getElementById('edit-std-sinf').value;
    std.gradeLevel = std.sinf.split('-')[0] + '-sinf';
    std.birthDate = document.getElementById('edit-std-bdate').value.trim();
    std.parentName = document.getElementById('edit-std-parent').value.trim();
    std.phone = document.getElementById('edit-std-phone').value.trim();
    std.monthlyFee = Number(document.getElementById('edit-std-fee').value) || 3000000;

    // recalculate initials
    const parts = std.name.split(' ');
    std.initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();

    // Update enrolled tutor courses
    const selectedCourseEls = document.querySelectorAll('input[name="edit-std-tutors"]:checked');
    const selectedCourseIds = Array.from(selectedCourseEls).map(el => el.value);
    (this.data.tutorCourses || []).forEach(course => {
      if (!Array.isArray(course.studentIds)) course.studentIds = [];
      const shouldBeIn = selectedCourseIds.includes(course.id);
      const isAlreadyIn = course.studentIds.includes(studentId);
      if (shouldBeIn && !isAlreadyIn) {
        course.studentIds.push(studentId);
      } else if (!shouldBeIn && isAlreadyIn) {
        course.studentIds = course.studentIds.filter(id => id !== studentId);
      }
    });

    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast('O\'quvchi ma\'lumotlari yangilandi', 'success');
  }

  openStudentPaymentModal(studentId) {
    this.openQuickPayModal(studentId);
  }

  // ==========================================
  // THERMAL POS RECEIPT & QUICK PAY CONTROLLERS
  // ==========================================
  openQuickPayModal(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const monthlyFee = std.monthlyFee || 3000000;
    const defaultAmount = (std.debtAmount != null && std.debtAmount > 0) ? std.debtAmount : monthlyFee;
    const debt = std.debtAmount || 0;

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 18px;">💳</span>
              <h3 style="margin: 0; font-size: 16px;">${t('acceptPaymentModalTitle')}</h3>
            </div>
            <p style="margin: 2px 0 0 0; font-size: 12.5px; color: var(--text-muted);">${t('acceptPaymentModalSub')}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form id="quick-pay-form" onsubmit="window.app.saveQuickPayment(event, '${std.id}')">
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 14px;">
            
            <!-- Student Mini Profile Card -->
            <div style="display: flex; align-items: center; gap: 12px; padding: 10px 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: #ecfdf5; color: #059669; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${std.initials || 'OQ'}
              </div>
              <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 700; font-size: 14px; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${std.name}</div>
                <div style="font-size: 12px; color: var(--text-muted);">${std.sinf} • ${translateRole(std.parentRole || 'Ota-onasi')}: ${std.parentName || '—'} (${std.phone || '—'})</div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <div style="font-size: 11px; color: var(--text-muted);">${t('debtRemaining')}</div>
                <div style="font-size: 13px; font-weight: 700; color: ${debt > 0 ? '#dc2626' : '#16a34a'};">
                  ${debt > 0 ? debt.toLocaleString('uz-UZ') + " " + t('som') : t('noDebt')}
                </div>
              </div>
            </div>

            <!-- Payment Amount Field -->
            <div class="form-group" style="margin: 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                <label class="form-label" style="margin: 0; font-weight: 600; font-size: 13px;">${t('paymentAmount')} <span class="req">*</span></label>
                <span style="font-size: 11.5px; color: var(--text-muted);">${t('monthlyTariff')}: ${monthlyFee.toLocaleString('uz-UZ')} ${t('som')}</span>
              </div>
              <input 
                type="number" 
                class="form-control" 
                id="quick-pay-amount" 
                value="${defaultAmount}" 
                min="0" 
                step="any" 
                required 
                style="font-size: 16px; font-weight: 700; letter-spacing: 0.5px;"
              />
              
              <!-- Quick preset chips -->
              <div class="quick-pay-presets">
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${monthlyFee})">${t('quickPayMonth1')}: ${(monthlyFee / 1000000).toFixed(1)} ${t('currencyUnit')}</button>
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${monthlyFee * 2})">${t('quickPayMonth2')}: ${((monthlyFee * 2) / 1000000).toFixed(1)} ${t('currencyUnit')}</button>
                <button type="button" class="quick-pay-chip" onclick="window.app.setQuickPayAmount(${Math.round(monthlyFee / 2)})">50%: ${(monthlyFee / 2000000).toFixed(1)} ${t('currencyUnit')}</button>
                ${debt > 0 ? `<button type="button" class="quick-pay-chip" style="color: #dc2626; border-color: #fca5a5;" onclick="window.app.setQuickPayAmount(${debt})">${t('fullDebt')} (${(debt / 1000000).toFixed(1)} ${t('currencyUnit')})</button>` : ''}
              </div>
            </div>

            <!-- Payment Method & Month in 2 cols -->
            <div class="form-row" style="margin: 0;">
              <div class="form-group" style="margin: 0;">
                <label class="form-label" style="font-size: 13px; font-weight: 600;">${t('paymentMethod')} <span class="req">*</span></label>
                <select class="form-select" id="quick-pay-method" required>
                  <option value="Naqd pul" selected>💵 ${t('cashMethod')}</option>
                  <option value="Plastik karta (Terminal)">💳 ${t('cardMethod')}</option>
                  <option value="Payme">📱 Payme</option>
                  <option value="Click">📲 Click</option>
                  <option value="Bank o'tkazmasi">🏦 ${t('bankTransfer')}</option>
                </select>
              </div>

              <div class="form-group" style="margin: 0;">
                <label class="form-label" style="font-size: 13px; font-weight: 600;">${t('forMonth')}</label>
                <select class="form-select" id="quick-pay-period">
                  <option value="Oktyabr 2026" selected>Oktyabr 2026</option>
                  <option value="Noyabr 2026">Noyabr 2026</option>
                  <option value="Dekabr 2026">Dekabr 2026</option>
                  <option value="1-chorak to'liq">1-chorak</option>
                  <option value="2026-2027 yillik">2026–2027 (${t('yearly')})</option>
                </select>
              </div>
            </div>

            <!-- Thermal Printer Toggle Option -->
            <label class="print-toggle-box" for="quick-pay-print-receipt">
              <div class="print-toggle-info">
                <span class="print-toggle-icon">🖨️</span>
                <div>
                  <div class="print-toggle-title">${t('printThermalReceipt')}</div>
                  <div class="print-toggle-sub">${t('thermalPrinterDesc')}</div>
                </div>
              </div>
              <input type="checkbox" id="quick-pay-print-receipt" checked style="width: 18px; height: 18px; accent-color: #16a34a; cursor: pointer;" />
            </label>

            <!-- Optional Note -->
            <div class="form-group" style="margin: 0;">
              <label class="form-label" style="font-size: 12px; color: var(--text-muted);">${t('paymentPurpose')}</label>
              <input type="text" class="form-control" id="quick-pay-comment" placeholder="${t('notes')}" style="font-size: 13px;" />
            </div>

          </div>

          <div class="modal-footer" style="display: flex; justify-content: space-between; gap: 8px;">
            <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
            <button type="submit" class="btn btn-primary" style="background: #16a34a; border-color: #16a34a; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
              <span>✅ ${t('confirmAndPrint')} &rarr;</span>
            </button>
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  setQuickPayAmount(amount) {
    const input = document.getElementById('quick-pay-amount');
    if (input) input.value = amount;
  }

  saveQuickPayment(e, studentId) {
    e.preventDefault();
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    const amount = Number(document.getElementById('quick-pay-amount').value) || 0;
    const method = document.getElementById('quick-pay-method').value;
    const period = document.getElementById('quick-pay-period').value;
    const comment = document.getElementById('quick-pay-comment').value.trim();
    const shouldPrint = document.getElementById('quick-pay-print-receipt')?.checked ?? true;

    if (amount <= 0) {
      this.showToast('To\'lov summasi 0 dan katta bo\'lishi kerak', 'warning');
      return;
    }

    const previousDebt = std.debtAmount || 0;
    std.paidAmount = (std.paidAmount || 0) + amount;
    std.debtAmount = Math.max(0, previousDebt - amount);

    if (std.debtAmount === 0) {
      std.paymentStatus = "To'liq to'lagan";
      std.paymentStatusCode = 'paid';
    } else {
      std.paymentStatus = 'Qisman';
      std.paymentStatusCode = 'partial';
    }

    const now = new Date();
    const dateFormatted = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
    const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const receiptNumber = `CHK-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const tx = {
      id: 'tx-' + Date.now(),
      receiptNumber,
      studentId: std.id,
      studentName: std.name,
      sinf: std.sinf,
      parentName: std.parentName,
      phone: std.phone,
      amount,
      method,
      period,
      comment,
      date: dateFormatted,
      time: timeFormatted,
      cashier: 'Dilshod Rahimov (Administrator)',
      status: 'Tasdiqlangan'
    };

    if (!this.data.paymentTransactions) this.data.paymentTransactions = [];
    this.data.paymentTransactions.unshift(tx);
    std.lastReceipt = tx;

    if (this.data.paymentsSummary) {
      this.data.paymentsSummary.monthlyRevenue = (this.data.paymentsSummary.monthlyRevenue || 0) + amount;
      this.data.paymentsSummary.expectedRevenue = Math.max(0, (this.data.paymentsSummary.expectedRevenue || 0) - amount);
    }

    saveData(this.data);
    this.renderCurrentView();

    this.showToast(`${std.name} uchun ${amount.toLocaleString('uz-UZ')} so'm to'lov qabul qilindi!`, 'success');

    if (shouldPrint) {
      this.openReceiptModal(tx, std);
    } else {
      this.closeModal();
    }
  }

  openReceiptModal(tx, student) {
    if (!student) {
      student = this.data.students.find(s => s.id === tx.studentId || s.name === tx.studentName) || {
        name: tx.studentName,
        sinf: tx.sinf || '3-A',
        parentName: tx.parentName || 'Ota-onasi',
        phone: tx.phone || '+998 90 000 00 00',
        monthlyFee: tx.amount,
        debtAmount: 0
      };
    }

    const formatSum = (n) => (n || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    // Crisp high-contrast barcode SVG
    const bars = [2,1,3,1,2,3,1,1,2,1,3,2,1,1,2,3,1,2,1,3,1,2,1,1,3,2,1,2,3,1,1,2,1,3,2,1,1,2,3];
    let xOffset = 6;
    const barcodeRects = bars.map((w, i) => {
      const isBar = i % 2 === 0;
      const r = isBar ? `<rect x="${xOffset}" y="0" width="${w * 1.5}" height="32" fill="#000000" />` : '';
      xOffset += w * 1.5;
      return r;
    }).join('');
    const barcodeSvg = `<svg viewBox="0 0 ${xOffset + 6} 32" class="thermal-receipt-barcode-svg">${barcodeRects}</svg>`;

    // Plain text receipt for copying to Telegram
    const plainTextReceipt = [
      `================================`,
      `  ${t('receiptHeader')}  `,
      `================================`,
      `${t('receiptNumberLabel')}: ${tx.receiptNumber}`,
      `${t('dateLabel')}: ${tx.date}  ${tx.time || ''}`,
      `${t('cashierLabel')}: ${tx.cashier || 'Dilshod Rahimov'}`,
      `--------------------------------`,
      `${t('studentLabel')}: ${student.name}`,
      `${t('classLabel')}: ${student.sinf || '3-A'}`,
      `${t('parentLabel')}: ${student.parentName || '—'}`,
      `${t('phone')}: ${student.phone || '—'}`,
      `${t('periodLabel')}: ${tx.period || 'Oktyabr 2026'}`,
      `${t('paymentMethod')}: ${tx.method || 'Naqd pul'}`,
      `--------------------------------`,
      `${t('paidAmountLabel')}: ${formatSum(tx.amount)} ${t('som').toUpperCase()}`,
      `${t('debtAmountLabel')}: ${formatSum(student.debtAmount || 0)} ${t('som').toUpperCase()}`,
      `${t('status')}: ${student.debtAmount === 0 ? t('fullyPaidCaps') : t('partialPaidCaps')}`,
      `--------------------------------`,
      `${t('thankYou')}`,
      `${t('officialReceiptNotice')}`,
      `================================`
    ].join('\n');

    this.currentReceiptText = plainTextReceipt;

    // Thermal receipt HTML
    const thermalHtml = `
      <div class="thermal-receipt-paper" id="active-thermal-receipt">
        <div class="thermal-receipt-header">
          <div class="thermal-receipt-brand">${t('brandName')}</div>
          <div class="thermal-receipt-subbrand">${t('receiptBrandSubtitle')}</div>
          <div class="thermal-receipt-meta">
            ${t('receiptAddress')}<br>
            ${t('receiptPhoneStir')}<br>
            ${t('receiptLicense')}
          </div>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-badge-title">${t('receiptBadge')}</div>

        <div class="thermal-receipt-row">
          <span class="label">${t('receiptNumberLabel')}:</span>
          <span class="value">${tx.receiptNumber}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('receiptDateTime')}:</span>
          <span class="value">${tx.date} ${tx.time || ''}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('cashierAdmin')}:</span>
          <span class="value">${tx.cashier || 'Dilshod Rahimov'}</span>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-row">
          <span class="label">${t('studentFullNameLabel')}:</span>
          <span class="value" style="font-size: 12.5px;">${student.name}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('classLabel')}:</span>
          <span class="value">${student.sinf || '3-A'} ${t('classWord')}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('parentLabel')}:</span>
          <span class="value">${student.parentName || '—'}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('phone')}:</span>
          <span class="value">${student.phone || '—'}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('paymentTarget')}:</span>
          <span class="value">${tx.period || 'Oktyabr 2026'} ${t('educationTuition')}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('paymentMethod')}:</span>
          <span class="value">${tx.method || 'Naqd pul'}</span>
        </div>

        <div class="thermal-receipt-double-divider"></div>

        <div class="thermal-receipt-total-box">
          <div class="thermal-receipt-total-label">${t('totalPaidCaps')}:</div>
          <div class="thermal-receipt-total-amount">${formatSum(tx.amount)} ${t('som').toUpperCase()}</div>
        </div>

        <div class="thermal-receipt-row" style="margin-top: 6px;">
          <span class="label">${t('prevPayments')}:</span>
          <span class="value">${formatSum((student.paidAmount || tx.amount) - tx.amount)} ${t('som')}</span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('remainingDebt')}:</span>
          <span class="value" style="color: ${student.debtAmount > 0 ? '#dc2626' : '#16a34a'};">
            ${formatSum(student.debtAmount || 0)} ${t('som')}
          </span>
        </div>
        <div class="thermal-receipt-row">
          <span class="label">${t('paymentStatusLabel')}:</span>
          <span class="value" style="text-transform: uppercase;">
            ${student.debtAmount === 0 ? t('fullyPaidCaps') : t('partialPaidCaps')}
          </span>
        </div>

        <div class="thermal-receipt-divider"></div>

        <div class="thermal-receipt-barcode-box">
          ${barcodeSvg}
          <div class="thermal-receipt-barcode-number">${tx.receiptNumber}</div>
        </div>

        <div class="thermal-receipt-footer">
          ${t('thankYou')}<br>
          ${t('officialReceiptNotice')}<br>
          maktab-crm.uz • info@maktab-crm.uz
        </div>
      </div>
    `;

    // Populate print container for instant thermal printer invocation
    const printArea = document.getElementById('receipt-print-area');
    if (printArea) {
      printArea.innerHTML = thermalHtml;
    }

    // Modal preview content
    const modalContent = `
      <div class="receipt-modal-dialog">
        <div class="receipt-modal-header">
          <div class="receipt-modal-title">
            <span style="font-size: 18px;">🖨️</span>
            <span>${t('receiptModalTitle')}</span>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="receipt-modal-body">
          ${thermalHtml}
        </div>

        <div class="receipt-modal-footer">
          <div class="receipt-actions-primary-row">
            <button type="button" class="btn-print-pos" onclick="window.app.printReceiptDirectly()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>${t('printReceiptBtn')}</span>
            </button>

            <button type="button" class="btn-copy-pos" onclick="window.app.copyReceiptText()">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>${t('telegramCopyBtn')}</span>
            </button>
          </div>

          <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()" style="width: 100%;">
            ${t('close')}
          </button>
        </div>
      </div>
    `;

    this.showModalContent(modalContent);
  }

  openStudentLastReceipt(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    let tx = this.data.paymentTransactions?.find(t => t.studentId === std.id || t.studentName === std.name);
    if (!tx) {
      const now = new Date();
      const dateFormatted = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
      const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const receiptNumber = `CHK-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

      tx = {
        id: 'tx-' + Date.now(),
        receiptNumber,
        studentId: std.id,
        studentName: std.name,
        sinf: std.sinf,
        parentName: std.parentName,
        phone: std.phone,
        amount: std.paidAmount > 0 ? (std.monthlyFee || 4860000) : (std.monthlyFee || 3000000),
        method: 'Naqd pul',
        period: 'Oktyabr 2026',
        date: dateFormatted,
        time: timeFormatted,
        cashier: 'Dilshod Rahimov (Administrator)',
        status: 'Tasdiqlangan'
      };
    }

    this.openReceiptModal(tx, std);
  }

  printReceiptDirectly() {
    window.print();
  }

  copyReceiptText() {
    if (this.currentReceiptText) {
      navigator.clipboard.writeText(this.currentReceiptText).then(() => {
        this.showToast(t('copiedReceiptToast'), 'success');
      }).catch(() => {
        this.showToast(t('copyErrorToast'), 'warning');
      });
    }
  }

  onPaymentStudentChange(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;
    const amountInput = document.getElementById('pay-amount');
    if (amountInput) {
      amountInput.value = (std.debtAmount != null && std.debtAmount > 0) ? std.debtAmount : (std.monthlyFee || 3000000);
    }
  }

  exportStudentsCSV() {
    const rows = [
      ["F.I.SH", "Sinf", "Ota-onasi", "Telefon", "Oylik to'lov", "To'langan", "Qarzdorlik", "Davomat"],
      ...this.data.students.map(s => [
        `"${s.name}"`,
        `"${s.sinf}"`,
        `"${s.parentName}"`,
        `"${s.phone}"`,
        s.monthlyFee || 3000000,
        s.paidAmount || 0,
        s.debtAmount || 0,
        `"${s.attendance || '95%'}"`
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `oquvchilar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast("O'quvchilar ro'yxati (.csv) yuklab olindi", 'success');
  }

  // ==========================================
  // PAYMENTS CONTROLLER
  // ==========================================
  exportPaymentsToCSV() {
    const rows = [
      ["O'quvchi", "Sinf", "Oylik to'lov", "To'langan", "Qoldiq qarz", "Holat"],
      ...this.data.students.map(s => [
        `"${s.name}"`,
        `"${s.sinf}"`,
        s.monthlyFee || 3000000,
        s.paidAmount || 0,
        s.debtAmount || 0,
        `"${s.paymentStatus}"`
      ])
    ];

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tolovlar_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast("To'lovlar hisoboti (.csv) yuklab olindi", 'success');
  }

  // ==========================================
  // ATTENDANCE (DAVOMAT) CONTROLLERS
  // ==========================================
  switchAttendanceSubTab(subTab) {
    this.attendanceSubTab = subTab;
    this.renderCurrentView();
  }

  openAttendanceModal(classId) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (!cls) return;

    this.activeAttendanceClassId = classId;
    // Filter students belonging to this class
    const classStudents = this.data.students.filter(s => s.sinf === cls.name);
    
    // Fill tempAttendanceMap
    this.tempAttendanceMap = {};
    classStudents.forEach(s => {
      this.tempAttendanceMap[s.id] = 'present'; // default present
    });

    const content = `
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t('markAttendanceModalTitle')} — ${cls.name}</h3>
            <p>${this.data.currentDateText} &bull; ${t('homeroomTeacherLabel')}: ${cls.teacherName}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">${t('studentsListLabel')} (${classStudents.length} ${t('studentsUnitAtt')})</span>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="window.app.markAllAttendance('present')">
                ${t('markAllPresent')}
              </button>
            </div>
          </div>

          <div id="attendance-students-list">
            ${classStudents.length === 0 ? `
              <div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">
                ${t('noStudentsInClass')}
              </div>
            ` : classStudents.map(s => `
              <div class="attendance-student-row" id="att-row-${s.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 32px; height: 32px; font-size: 11px;">${s.initials}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${s.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${s.parentName} &bull; ${s.phone}</div>
                  </div>
                </div>

                <div class="att-actions-btn-group">
                  <button 
                    type="button"
                    class="att-btn present active" 
                    id="btn-pres-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'present')"
                  >
                    ${t('present')}
                  </button>
                  <button 
                    type="button"
                    class="att-btn absent" 
                    id="btn-abs-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'absent')"
                  >
                    ${t('absent')}
                  </button>
                  <button 
                    type="button"
                    class="att-btn excused" 
                    id="btn-exc-${s.id}"
                    onclick="window.app.setStudentAttendance('${s.id}', 'excused')"
                  >
                    ${t('excused')}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
          <button class="btn btn-primary" onclick="window.app.saveClassAttendance('${cls.id}')">
            ${t('saveAttendanceBtn')}
          </button>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  setStudentAttendance(studentId, status) {
    this.tempAttendanceMap[studentId] = status;

    const row = document.getElementById(`att-row-${studentId}`);
    if (!row) return;

    row.querySelectorAll('.att-btn').forEach(btn => btn.classList.remove('active'));
    if (status === 'present') document.getElementById(`btn-pres-${studentId}`)?.classList.add('active');
    if (status === 'absent') document.getElementById(`btn-abs-${studentId}`)?.classList.add('active');
    if (status === 'excused') document.getElementById(`btn-exc-${studentId}`)?.classList.add('active');
  }

  markAllAttendance(status) {
    Object.keys(this.tempAttendanceMap).forEach(stdId => {
      this.setStudentAttendance(stdId, status);
    });
  }

  saveClassAttendance(classId) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (!cls) return;

    let presentCount = 0;
    const total = Object.keys(this.tempAttendanceMap).length;

    Object.values(this.tempAttendanceMap).forEach(st => {
      if (st === 'present') presentCount++;
    });

    cls.attendanceStatus = 'Belgilangan';
    cls.todayPresent = presentCount;
    cls.todayTotal = total || cls.currentStudents;

    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`${cls.name} sinf davomati muvaffaqiyatli saqlandi! (${presentCount}/${total || cls.currentStudents} keldi)`, 'success');
  }

  // ==========================================
  // TUTOR & CLUB ATTENDANCE & ENROLLMENT
  // ==========================================
  openTutorAttendanceModal(courseId) {
    if (!Array.isArray(this.data.tutorCourses)) this.data.tutorCourses = [];
    const course = this.data.tutorCourses.find(c => c.id === courseId || c.name === courseId);
    if (!course) return;

    if (!Array.isArray(course.studentIds)) {
      course.studentIds = [];
    }

    const clubStudents = course.studentIds
      .map(id => this.data.students.find(s => s.id === id))
      .filter(Boolean);

    this.activeTutorCourseId = course.id;
    this.tempTutorAttendanceMap = {};
    clubStudents.forEach(s => {
      this.tempTutorAttendanceMap[s.id] = 'present';
    });

    const isMarked = course.attendanceStatus === 'Belgilangan';

    const content = `
      <div class="modal-dialog modal-lg">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <div style="display: flex; align-items: center; gap: 8px;">
              <h3>${course.name}</h3>
              <span class="status-pill ${isMarked ? 'status-marked' : 'status-unmarked'}" style="font-size: 11px;">
                ${isMarked ? t('marked') : t('notMarked')}
              </span>
            </div>
            <p>${t('instructor')}: <strong>${course.instructor || '—'}</strong> &bull; ${course.days || ''} ${course.time ? `(${course.time})` : ''} ${course.fee ? `&bull; ${Number(course.fee).toLocaleString()} ${t('som')}` : ''}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <span style="font-size: 13.5px; font-weight: 700; color: var(--text-main);">
              ${t('studentsListLabel')} (${clubStudents.length} ${t('studentsUnitAtt')})
            </span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="btn btn-primary" style="padding: 6px 12px; font-size: 12.5px; display: inline-flex; align-items: center; gap: 5px;" onclick="window.app.openAssignStudentToTutorModal('${course.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>${t('addStudentToTutorBtn')}</span>
              </button>
              ${clubStudents.length > 0 ? `
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12.5px;" onclick="window.app.markAllTutorAttendance('present')">
                  ${t('markAllPresent')}
                </button>
              ` : ''}
            </div>
          </div>

          <div id="tutor-attendance-list">
            ${clubStudents.length === 0 ? `
              <div class="empty-students-box" style="padding: 32px 20px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px dashed var(--border-light); text-align: center;">
                <p style="margin-bottom: 12px; color: var(--text-muted); font-size: 13.5px;">${t('noTutorStudentsFound')}</p>
                <button class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 6px;" onclick="window.app.openAssignStudentToTutorModal('${course.id}')">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>${t('addStudentToTutorBtn')}</span>
                </button>
              </div>
            ` : clubStudents.map(s => `
              <div class="attendance-student-row" id="tutor-row-${s.id}">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="cell-user-avatar" style="width: 34px; height: 34px; font-size: 11.5px;">${s.initials || 'OQ'}</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text-main);">${s.name}</div>
                    <div style="font-size: 11.5px; color: var(--text-muted);">${s.sinf || '—'} &bull; ${s.phone || '—'}</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;">
                  <div class="att-actions-btn-group">
                    <button 
                      type="button" 
                      class="att-btn present active" 
                      id="tutor-btn-pres-${s.id}"
                      onclick="window.app.setTutorStudentAttendance('${s.id}', 'present')"
                    >
                      ${t('present')}
                    </button>
                    <button 
                      type="button" 
                      class="att-btn absent" 
                      id="tutor-btn-abs-${s.id}"
                      onclick="window.app.setTutorStudentAttendance('${s.id}', 'absent')"
                    >
                      ${t('absent')}
                    </button>
                    <button 
                      type="button" 
                      class="att-btn excused" 
                      id="tutor-btn-exc-${s.id}"
                      onclick="window.app.setTutorStudentAttendance('${s.id}', 'excused')"
                    >
                      ${t('excused')}
                    </button>
                  </div>

                  <button 
                    type="button" 
                    class="btn-close-modal" 
                    style="width: 32px; height: 32px; padding: 4px; color: #ef4444; border-radius: 6px; background: rgba(239, 68, 68, 0.08);"
                    onclick="window.app.removeStudentFromTutor('${course.id}', '${s.id}')"
                    title="${t('removeStudentFromTutor')}"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-footer" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <button class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
          <div style="display: flex; gap: 8px;">
            <button class="btn btn-secondary" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.3);" onclick="window.app.deleteTutorCourse('${course.id}')">
              ${t('deleteTutorCourse')}
            </button>
            <button class="btn btn-primary" onclick="window.app.saveTutorAttendance('${course.id}')">
              ${t('saveAttendanceBtn')}
            </button>
          </div>
        </div>
      </div>
    `;

    this.showModalContent(content);
  }

  openAssignStudentToTutorModal(courseId) {
    const course = this.data.tutorCourses?.find(c => c.id === courseId || c.name === courseId);
    if (!course) return;

    if (!Array.isArray(course.studentIds)) course.studentIds = [];

    // Hali bu kursga a'zo bo'lmagan o'quvchilar
    const availableStudents = (this.data.students || []).filter(s => !course.studentIds.includes(s.id));

    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>${t('assignStudentModalTitle')}</h3>
            <p>${course.name} &bull; ${t('assignStudentModalSub')}</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.openTutorAttendanceModal('${course.id}')" aria-label="${t('close')}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onsubmit="window.app.handleAssignStudentToTutor(event, '${course.id}')">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${t('selectStudentToAssign')} <span class="req">*</span></label>
                ${availableStudents.length === 0 ? `
                  <div style="padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-sm); color: var(--text-muted); font-size: 13.5px;">
                    ${t('allStudentsAlreadyEnrolled')}
                  </div>
                ` : `
                  <select class="form-select" id="assign-tutor-student-id" required style="font-size: 14px; padding: 10px 12px;">
                    <option value="" disabled selected>${t('selectStudentToAssign')}...</option>
                    ${availableStudents.map(s => `
                      <option value="${s.id}">
                        ${s.name} (${s.sinf || '—'}) ${s.phone ? `• ${s.phone}` : ''}
                      </option>
                    `).join('')}
                  </select>
                `}
              </div>

              <div style="background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 12px; font-size: 13px; display: flex; flex-direction: column; gap: 4px;">
                <div style="font-weight: 600; color: var(--text-main);">${course.name}</div>
                <div style="color: var(--text-muted);">${t('instructor')}: ${course.instructor || '—'} &bull; ${course.days || ''} ${course.time || ''}</div>
                ${course.fee ? `<div style="color: var(--primary); font-weight: 600;">${t('tutorMonthlyFee')}: ${Number(course.fee).toLocaleString()} ${t('som')}</div>` : ''}
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick="window.app.openTutorAttendanceModal('${course.id}')">${t('cancel')}</button>
            ${availableStudents.length > 0 ? `
              <button type="submit" class="btn btn-primary">${t('assignStudentSubmitBtn')}</button>
            ` : ''}
          </div>
        </form>
      </div>
    `;

    this.showModalContent(content);
  }

  handleAssignStudentToTutor(e, courseId) {
    e.preventDefault();
    const course = this.data.tutorCourses?.find(c => c.id === courseId || c.name === courseId);
    if (!course) return;

    const studentSelect = document.getElementById('assign-tutor-student-id');
    const studentId = studentSelect ? studentSelect.value : null;
    if (!studentId) return;

    if (!Array.isArray(course.studentIds)) course.studentIds = [];
    if (!course.studentIds.includes(studentId)) {
      course.studentIds.push(studentId);
    }

    const std = this.data.students.find(s => s.id === studentId);
    saveData(this.data);
    this.showToast(`"${std ? std.name : 'O\'quvchi'}" "${course.name}" to'garagiga muvaffaqiyatli qo'shildi!`, 'success');
    this.openTutorAttendanceModal(course.id);
    this.renderCurrentView();
  }

  removeStudentFromTutor(courseId, studentId) {
    const course = this.data.tutorCourses?.find(c => c.id === courseId || c.name === courseId);
    if (!course) return;
    const std = this.data.students.find(s => s.id === studentId);

    const confirmMsg = confirm(`"${std ? std.name : 'O\'quvchi'}"ni "${course.name}" to'garagidan chiqarishga ishonchingiz komilmi?`);
    if (!confirmMsg) return;

    course.studentIds = (course.studentIds || []).filter(id => id !== studentId);
    saveData(this.data);
    this.showToast(`"${std ? std.name : 'O\'quvchi'}" to'garakdan chiqarildi`, 'info');
    
    // Agar modal ochiq bo'lsa yangilaymiz
    if (document.getElementById('modal-container')?.classList.contains('active')) {
      if (this.activeTutorCourseId === course.id) {
        this.openTutorAttendanceModal(course.id);
      } else if (std) {
        this.openStudentDetailsModal(studentId);
      }
    }
    this.renderCurrentView();
  }

  deleteTutorCourse(courseId) {
    const course = this.data.tutorCourses?.find(c => c.id === courseId);
    if (!course) return;

    if (confirm(`"${course.name}" to'garagini butunlay o'chirmoqchimisiz?`)) {
      this.data.tutorCourses = (this.data.tutorCourses || []).filter(c => c.id !== courseId);
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast(`"${course.name}" to'garagi o'chirildi`, 'info');
    }
  }

  setTutorStudentAttendance(studentId, status) {
    if (!this.tempTutorAttendanceMap) this.tempTutorAttendanceMap = {};
    this.tempTutorAttendanceMap[studentId] = status;

    const row = document.getElementById(`tutor-row-${studentId}`);
    if (!row) return;

    row.querySelectorAll('.att-btn').forEach(btn => btn.classList.remove('active'));
    if (status === 'present') document.getElementById(`tutor-btn-pres-${studentId}`)?.classList.add('active');
    if (status === 'absent') document.getElementById(`tutor-btn-abs-${studentId}`)?.classList.add('active');
    if (status === 'excused') document.getElementById(`tutor-btn-exc-${studentId}`)?.classList.add('active');
  }

  markAllTutorAttendance(status) {
    if (this.tempTutorAttendanceMap) {
      Object.keys(this.tempTutorAttendanceMap).forEach(id => {
        this.setTutorStudentAttendance(id, status);
      });
    }
  }

  saveTutorAttendance(courseId) {
    const course = this.data.tutorCourses?.find(c => c.id === courseId || c.name === courseId);
    let presentCount = 0;
    if (this.tempTutorAttendanceMap) {
      Object.values(this.tempTutorAttendanceMap).forEach(v => {
        if (v === 'present') presentCount++;
      });
    }
    const total = Object.keys(this.tempTutorAttendanceMap || {}).length;
    if (course) {
      course.attendanceStatus = 'Belgilangan';
      course.todayPresent = presentCount;
      saveData(this.data);
    }
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`"${course ? course.name : 'To\'garak'}" davomati saqlandi (${presentCount}/${total} keldi)`, 'success');
  }

  // ==========================================
  // STUDENT / CLASS / TEACHER MANAGEMENT
  // ==========================================
  deleteStudent(studentId) {
    const std = this.data.students.find(s => s.id === studentId);
    if (!std) return;

    if (confirm(`Haqiqatan ham o'quvchi "${std.name}"ni ro'yxatdan o'chirmoqchimisiz?`)) {
      const cls = this.data.classes.find(c => c.name === std.sinf);
      if (cls && cls.currentStudents > 0) {
        cls.currentStudents--;
      }
      this.data.students = this.data.students.filter(s => s.id !== studentId);
      if (this.selectedStudentId === studentId) {
        this.selectedStudentId = this.data.students[0]?.id || null;
      }
      saveData(this.data);
      this.closeModal();
      this.renderCurrentView();
      this.showToast(`"${std.name}" muvaffaqiyatli o'chirildi!`, 'info');
    }
  }

  deleteClass(classId) {
    const cls = this.data.classes.find(c => c.id === classId);
    if (!cls) return;

    const classStudentsCount = this.data.students.filter(s => s.sinf === cls.name).length;
    if (classStudentsCount > 0) {
      if (!confirm(`"${cls.name}" sinfida ${classStudentsCount} ta o'quvchi mavjud. Sinfni baribir o'chirishni xohlaysizmi?`)) {
        return;
      }
    } else {
      if (!confirm(`"${cls.name}" sinfini o'chirishga ishonchingiz komilmi?`)) {
        return;
      }
    }

    this.data.classes = this.data.classes.filter(c => c.id !== classId);
    saveData(this.data);
    this.renderCurrentView();
    this.showToast(`"${cls.name}" sinfi o'chirildi!`, 'info');
  }

  deleteTeacher(teacherId) {
    const tch = this.data.teachers.find(t => t.id === teacherId);
    if (!tch) return;

    if (confirm(`O'qituvchi "${tch.name}"ni o'chirishga ishonchingiz komilmi?`)) {
      this.data.teachers = this.data.teachers.filter(t => t.id !== teacherId);
      saveData(this.data);
      this.renderCurrentView();
      this.showToast(`"${tch.name}" o'qituvchilar ro'yxatidan chiqarildi`, 'info');
    }
  }

  // ==========================================
  // ADMIN PROFILE & SYSTEM BACKUP
  // ==========================================
  openProfileModal() {
    const content = `
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <h3>Tizim va Administrator sozlamalari</h3>
            <p>Maktab CRM boshqaruvi va ma'lumotlar xavfsizligi</p>
          </div>
          <button class="btn-close-modal" onclick="window.app.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div style="display: flex; align-items: center; gap: 14px; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 16px;">
            <div class="user-avatar" style="width: 48px; height: 48px; font-size: 16px;">DR</div>
            <div>
              <div style="font-weight: 700; font-size: 16px; color: var(--text-main);">Dilshod Rahimov</div>
              <div style="font-size: 13px; color: var(--text-secondary);">Bosh direktor &bull; Administrator huquqi</div>
              <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 2px;">Tizim versiyasi: v1.2.0 &bull; 2026-10-23</div>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="font-weight: 600; font-size: 13.5px; color: var(--text-main); margin-bottom: 2px;">Ma'lumotlar bazasi zaxirasi:</div>

            <button class="btn btn-secondary" onclick="window.app.exportDatabaseJSON()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>To'liq ma'lumotlar bazasini yuklab olish (.json)</span>
            </button>

            <button class="btn btn-secondary" onclick="document.getElementById('import-json-input').click()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>Zaxiradan tiklash (JSON import)</span>
            </button>
            <input type="file" id="import-json-input" accept=".json" style="display: none;" onchange="window.app.importDatabaseJSON(event)" />

            <div style="padding-top: 8px; border-top: 1px solid var(--border-light); margin-top: 4px;">
              <button class="btn btn-secondary" onclick="window.app.resetToDemoData()" style="width: 100%; justify-content: flex-start; gap: 10px; padding: 10px 14px; color: #ef4444; border-color: rgba(239, 68, 68, 0.3);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
                <span>Dastlabki demo holatiga qaytarish (Reset)</span>
              </button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">Yopish</button>
        </div>
      </div>
    `;
    this.showModalContent(content);
  }

  exportDatabaseJSON() {
    const jsonStr = JSON.stringify(this.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `maktab_crm_backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    this.showToast('Barcha ma\'lumotlar zaxirasi (.json) yuklab olindi!', 'success');
  }

  importDatabaseJSON(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.students && parsed.classes && parsed.leads) {
          this.data = parsed;
          saveData(this.data);
          this.closeModal();
          this.renderCurrentView();
          this.showToast('Ma\'lumotlar zaxiradan muvaffaqiyatli tiklandi!', 'success');
        } else {
          alert('Fayl formati mos kelmadi!');
        }
      } catch (err) {
        alert('JSON faylini o\'qishda xatolik yuz berdi!');
      }
    };
    reader.readAsText(file);
  }

  resetToDemoData() {
    if (confirm('Barcha o\'zgartirishlar bekor qilinib, dastlabki namunaviy ma\'lumotlar tiklanadi. Davom etasizmi?')) {
      localStorage.removeItem('maktab_crm_data_v2');
      location.reload();
    }
  }

  // ==========================================
  // GENERAL MODAL DISPATCHER
  // ==========================================
  openModal(type, params = {}) {
    let content = '';

    switch (type) {
      case 'addLead':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('newLeadModalTitle')}</h3>
                <p>${t('newLeadModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateLead(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${t('childFullName')} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="lead-name" placeholder="Sardor Yusupov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('gradeSelect')} <span class="req">*</span></label>
                      <select class="form-select" id="lead-grade" required>
                        <option value="1-sinf">1-${t('classWord')}</option>
                        <option value="2-sinf">2-${t('classWord')}</option>
                        <option value="3-sinf">3-${t('classWord')}</option>
                        <option value="4-sinf">4-${t('classWord')}</option>
                        <option value="5-sinf">5-${t('classWord')}</option>
                        <option value="6-sinf">6-${t('classWord')}</option>
                        <option value="7-sinf">7-${t('classWord')}</option>
                        <option value="8-sinf">8-${t('classWord')}</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('sourceSelect')} <span class="req">*</span></label>
                      <select class="form-select" id="lead-source" required>
                        <option value="Instagram">${t('sourceInstagram')}</option>
                        <option value="Telegram">${t('sourceTelegram')}</option>
                        <option value="Sayt">${t('sourceSayt')}</option>
                        <option value="Tavsiya">${t('sourceTavsiya')}</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('parentNameLabel')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="lead-parent" placeholder="Dilshod Karimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('phoneLabel')} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="lead-phone" placeholder="+998 90 123 45 67" required />
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">${t('notesLabel')}</label>
                    <textarea class="form-textarea" id="lead-note" placeholder="..."></textarea>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary">${t('addLeadSubmitBtn')}</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addStudent':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('newStudentModalTitle')}</h3>
                <p>${t('newStudentModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateStudent(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${t('studentFullName')} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="new-std-name" placeholder="Farhod Alimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('selectClass')} <span class="req">*</span></label>
                      <select class="form-select" id="new-std-class" required>
                        ${this.data.classes.map(c => `<option value="${c.name}">${c.name} (${c.teacherName})</option>`).join('')}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('birthDateLabel')}</label>
                      <input type="text" class="form-control" id="new-std-birth" placeholder="15.05.2016" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('parentNameLabel')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="new-std-parent" placeholder="Akmal Alimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('phoneLabel')} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="new-std-phone" placeholder="+998 90 555 44 33" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('monthlyFeeAmount')}</label>
                      <input type="number" class="form-control" id="new-std-fee" value="3000000" min="0" step="any" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('initialPaymentStatus')}</label>
                      <select class="form-select" id="new-std-status">
                        <option value="paid">${t('statusPaid')}</option>
                        <option value="partial">${t('statusPartial')}</option>
                        <option value="debt" selected>${t('statusWaitingDebt')}</option>
                      </select>
                    </div>
                  </div>

                  <!-- Repetitorlik va to'garaklar checkboxlari -->
                  ${(this.data.tutorCourses && this.data.tutorCourses.length > 0) ? `
                    <div class="form-group" style="margin-top: 4px;">
                      <label class="form-label">${t('tutorCoursesLabel')}</label>
                      <div style="display: flex; flex-direction: column; gap: 8px; padding: 10px 12px; background: var(--bg-subtle); border: 1px solid var(--border-light); border-radius: var(--radius-sm); max-height: 120px; overflow-y: auto;">
                        ${this.data.tutorCourses.map(c => `
                          <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                            <input type="checkbox" name="new-std-tutors" value="${c.id}" style="width: 16px; height: 16px; accent-color: var(--primary);" />
                            <span style="font-weight: 500; color: var(--text-main);">${c.name}</span>
                            <span style="color: var(--text-muted); font-size: 11.5px;">(${c.instructor || '—'})</span>
                          </label>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary">${t('acceptStudentSubmitBtn')}</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addPayment':
        const defaultStdId = params.studentId || (this.data.students[0]?.id);
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('acceptPaymentModalTitle')}</h3>
                <p>${t('acceptPaymentModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreatePayment(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${t('selectStudent')} <span class="req">*</span></label>
                    <select class="form-select" id="pay-student-select" required onchange="window.app.onPaymentStudentChange(this.value)">
                      ${this.data.students.map(s => `
                        <option value="${s.id}" ${s.id === defaultStdId ? 'selected' : ''}>
                          ${s.name} (${s.sinf}) - ${t('debtAmountLabel')}: ${(s.debtAmount || 0).toLocaleString()} ${t('som')}
                        </option>
                      `).join('')}
                    </select>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('paymentAmount')} <span class="req">*</span></label>
                      <input type="number" class="form-control" id="pay-amount" value="3000000" min="0" step="any" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('paymentMethod')} <span class="req">*</span></label>
                      <select class="form-select" id="pay-method" required>
                        <option value="Payme">Payme</option>
                        <option value="Click">Click</option>
                        <option value="Naqd">${t('cashMethod')}</option>
                        <option value="Bank o'tkazmasi">${t('bankTransfer')}</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label">${t('paymentPurpose')}</label>
                    <input type="text" class="form-control" id="pay-comment" value="${t('thisMonth')}" />
                  </div>

                  <!-- Thermal Printer Toggle Option -->
                  <label class="print-toggle-box" for="pay-print-receipt" style="margin-top: 6px;">
                    <div class="print-toggle-info">
                      <span class="print-toggle-icon">🖨️</span>
                      <div>
                        <div class="print-toggle-title">${t('printThermalReceipt')}</div>
                        <div class="print-toggle-sub">${t('thermalPrinterDesc')}</div>
                      </div>
                    </div>
                    <input type="checkbox" id="pay-print-receipt" checked style="width: 18px; height: 18px; accent-color: #16a34a; cursor: pointer;" />
                  </label>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary" style="background: #16a34a; border-color: #16a34a; font-weight: 700;">
                  ✅ ${t('confirmAndPrint')} &rarr;
                </button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addClass':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('newClassModalTitle')}</h3>
                <p>${t('newClassModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateClass(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('classNameLabel')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-name" placeholder="6-A" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('roomNumberLabel')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="cls-room" placeholder="25" required />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('homeroomTeacherLabel')} <span class="req">*</span></label>
                      <select class="form-select" id="cls-teacher" required>
                        ${this.data.teachers.map(tData => `<option value="${tData.name}">${tData.name} (${translateSubject(tData.subject)})</option>`).join('')}
                      </select>
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('maxCapacityLabel')}</label>
                      <input type="number" class="form-control" id="cls-capacity" value="22" max="30" min="10" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary">${t('createClassBtn')}</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addTeacher':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('newTeacherModalTitle')}</h3>
                <p>${t('newTeacherModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateTeacher(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${t('teacherFullName')} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="tch-name" placeholder="Jahongir Qosimov" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('teacherSubject')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="tch-subject" placeholder="Fizika" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('teacherWeeklyHours')}</label>
                      <input type="number" class="form-control" id="tch-hours" value="18" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('phoneLabel')} <span class="req">*</span></label>
                      <input type="tel" class="form-control" id="tch-phone" placeholder="+998 90 777 66 55" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('teacherAssignedClasses')}</label>
                      <input type="text" class="form-control" id="tch-classes" placeholder="5-A, 6-A" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary">${t('addTeacherSubmitBtn')}</button>
              </div>
            </form>
          </div>
        `;
        break;

      case 'addTutorCourse':
        content = `
          <div class="modal-dialog">
            <div class="modal-header">
              <div class="modal-title-wrap">
                <h3>${t('newTutorModalTitle')}</h3>
                <p>${t('newTutorModalSub')}</p>
              </div>
              <button class="btn-close-modal" onclick="window.app.closeModal()" aria-label="${t('close')}">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <form onsubmit="window.app.handleCreateTutorCourse(event)">
              <div class="modal-body">
                <div class="form-grid">
                  <div class="form-group">
                    <label class="form-label">${t('tutorCourseName')} <span class="req">*</span></label>
                    <input type="text" class="form-control" id="new-tutor-name" placeholder="Shaxmat to'garagi" required />
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('instructor')} <span class="req">*</span></label>
                      <input type="text" class="form-control" id="new-tutor-instructor" placeholder="Aziz Rahimov" required />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('tutorMonthlyFee')}</label>
                      <input type="number" class="form-control" id="new-tutor-fee" value="500000" min="0" step="any" />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label class="form-label">${t('tutorScheduleDays')}</label>
                      <input type="text" class="form-control" id="new-tutor-days" placeholder="Dush, Chor, Juma" />
                    </div>

                    <div class="form-group">
                      <label class="form-label">${t('tutorScheduleTime')}</label>
                      <input type="text" class="form-control" id="new-tutor-time" placeholder="16:00 - 17:30" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="window.app.closeModal()">${t('cancel')}</button>
                <button type="submit" class="btn btn-primary">${t('createTutorSubmitBtn')}</button>
              </div>
            </form>
          </div>
        `;
        break;

      default:
        return;
    }

    this.showModalContent(content);
  }

  showModalContent(html) {
    const host = document.getElementById('modal-container');
    if (!host) return;
    host.innerHTML = html;
    host.classList.add('open');
    host.classList.add('active');
    
    // Close on backdrop click
    host.onclick = (e) => {
      if (e.target === host) {
        this.closeModal();
      }
    };
  }

  closeModal() {
    const host = document.getElementById('modal-container');
    if (host) {
      host.classList.remove('open');
      host.classList.remove('active');
      host.innerHTML = '';
      host.onclick = null;
    }
  }

  // ==========================================
  // FORM SUBMIT HANDLERS
  // ==========================================
  handleCreateLead(e) {
    e.preventDefault();
    const name = document.getElementById('lead-name').value.trim();
    const grade = document.getElementById('lead-grade').value;
    const source = document.getElementById('lead-source').value;
    const parent = document.getElementById('lead-parent').value.trim();
    const phone = document.getElementById('lead-phone').value.trim();
    const note = document.getElementById('lead-note').value.trim();

    let sourceColor = 'blue';
    if (source === 'Instagram') sourceColor = 'pink';
    else if (source === 'Tavsiya') sourceColor = 'green';
    else if (source === 'Sayt') sourceColor = 'orange';

    const newLead = {
      id: 'lead-' + Date.now(),
      name,
      grade,
      parent,
      phone,
      source,
      sourceColor,
      date: 'Bugun',
      manager: 'DR',
      stage: 'yangi',
      note
    };

    this.data.leads.unshift(newLead);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi so'rov ("${name}") qabul qilindi!`, 'success');
  }

  handleCreateStudent(e) {
    e.preventDefault();
    const name = document.getElementById('new-std-name').value.trim();
    const sinf = document.getElementById('new-std-class').value;
    const birthDate = document.getElementById('new-std-birth').value.trim() || '01.01.2017';
    const parentName = document.getElementById('new-std-parent').value.trim();
    const phone = document.getElementById('new-std-phone').value.trim();
    const monthlyFee = Number(document.getElementById('new-std-fee').value) || 3000000;
    const status = document.getElementById('new-std-status').value;

    const parts = name.split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();

    let paymentStatus = 'Qarzdor';
    let paidAmount = 0;
    let debtAmount = monthlyFee;
    if (status === 'paid') {
      paymentStatus = 'To\'langan';
      paidAmount = monthlyFee;
      debtAmount = 0;
    } else if (status === 'partial') {
      paymentStatus = 'Qisman';
      paidAmount = monthlyFee / 2;
      debtAmount = monthlyFee / 2;
    }

    const cls = this.data.classes.find(c => c.name === sinf);
    if (cls) {
      cls.currentStudents = (cls.currentStudents || 0) + 1;
    }

    const newStd = {
      id: 'std-' + Date.now(),
      initials,
      name,
      parentName,
      parentRole: 'Ota/Ona',
      motherName: parentName,
      sinf,
      gradeLevel: sinf.split('-')[0] + '-sinf',
      phone,
      paymentStatus,
      paymentStatusCode: status,
      attendance: '100%',
      birthDate,
      homeroomTeacher: cls?.teacherName || 'Bosh o\'qituvchi',
      docs: {
        birthCertificate: true,
        medicalReport: true,
        contract: true
      },
      monthlyFee,
      paidAmount,
      debtAmount
    };

    // Tanlangan to'garaklarga o'quvchini biriktirish
    const selectedCourseEls = document.querySelectorAll('input[name="new-std-tutors"]:checked');
    const selectedCourseIds = Array.from(selectedCourseEls).map(el => el.value);
    selectedCourseIds.forEach(cId => {
      const course = this.data.tutorCourses?.find(c => c.id === cId);
      if (course) {
        if (!Array.isArray(course.studentIds)) course.studentIds = [];
        if (!course.studentIds.includes(newStd.id)) {
          course.studentIds.push(newStd.id);
        }
      }
    });

    this.data.students.unshift(newStd);
    this.selectedStudentId = newStd.id;
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi o'quvchi "${name}" muvaffaqiyatli qo'shildi!`, 'success');
  }

  handleCreateTutorCourse(e) {
    e.preventDefault();
    const name = document.getElementById('new-tutor-name').value.trim();
    const instructor = document.getElementById('new-tutor-instructor').value.trim();
    const fee = Number(document.getElementById('new-tutor-fee').value) || 0;
    const days = document.getElementById('new-tutor-days').value.trim() || 'Dush, Chor, Juma';
    const time = document.getElementById('new-tutor-time').value.trim() || '16:00 - 17:30';

    if (!Array.isArray(this.data.tutorCourses)) this.data.tutorCourses = [];

    const newCourse = {
      id: 'course-' + Date.now(),
      name,
      instructor,
      fee,
      days,
      time,
      studentIds: [],
      attendanceStatus: 'Belgilanmagan',
      todayPresent: 0
    };

    this.data.tutorCourses.push(newCourse);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi "${name}" to'garagi yaratildi! Endi o'quvchilarni biriktirishingiz mumkin.`, 'success');
  }

  handleCreatePayment(e) {
    e.preventDefault();
    const studentId = document.getElementById('pay-student-select').value;
    const amount = Number(document.getElementById('pay-amount').value) || 0;
    const method = document.getElementById('pay-method').value;
    const comment = document.getElementById('pay-comment').value.trim();
    const shouldPrint = document.getElementById('pay-print-receipt')?.checked ?? true;

    const std = this.data.students.find(s => s.id === studentId);
    if (std) {
      std.paidAmount = (std.paidAmount || 0) + amount;
      std.debtAmount = Math.max(0, (std.debtAmount || std.monthlyFee) - amount);

      if (std.debtAmount === 0) {
        std.paymentStatus = 'To\'langan';
        std.paymentStatusCode = 'paid';
      } else {
        std.paymentStatus = 'Qisman';
        std.paymentStatusCode = 'partial';
      }

      const now = new Date();
      const dateFormatted = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
      const timeFormatted = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const receiptNumber = `CHK-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

      // Add to transactions
      if (!this.data.paymentTransactions) this.data.paymentTransactions = [];
      const tx = {
        id: 'tx-' + Date.now(),
        receiptNumber,
        studentId: std.id,
        studentName: std.name,
        sinf: std.sinf,
        parentName: std.parentName,
        phone: std.phone,
        amount,
        method,
        period: comment || 'Oktyabr 2026',
        comment,
        date: dateFormatted,
        time: timeFormatted,
        cashier: 'Dilshod Rahimov (Administrator)',
        status: 'Tasdiqlangan'
      };

      this.data.paymentTransactions.unshift(tx);
      std.lastReceipt = tx;

      // Update summary
      if (this.data.paymentsSummary) {
        this.data.paymentsSummary.monthlyRevenue += amount;
        this.data.paymentsSummary.expectedRevenue = Math.max(0, this.data.paymentsSummary.expectedRevenue - amount);
      }

      saveData(this.data);
      this.renderCurrentView();
      this.showToast(`${std.name} uchun ${amount.toLocaleString('uz-UZ')} so'm to'lov qabul qilindi! (${method})`, 'success');

      if (shouldPrint) {
        this.openReceiptModal(tx, std);
      } else {
        this.closeModal();
      }
    }
  }

  handleCreateClass(e) {
    e.preventDefault();
    const name = document.getElementById('cls-name').value.trim();
    const room = document.getElementById('cls-room').value.trim();
    const teacherName = document.getElementById('cls-teacher').value;
    const capacity = Number(document.getElementById('cls-capacity').value) || 22;

    const parts = teacherName.split(' ');
    const teacherInitials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : teacherName.slice(0, 2).toUpperCase();

    const newCls = {
      id: 'cls-' + Date.now(),
      name,
      room,
      teacherName,
      teacherInitials,
      currentStudents: 0,
      capacity,
      attendanceStatus: 'Belgilanmagan',
      todayPresent: 0,
      todayTotal: 0
    };

    this.data.classes.push(newCls);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`Yangi "${name}" sinfi yaratildi!`, 'success');
  }

  handleCreateTeacher(e) {
    e.preventDefault();
    const name = document.getElementById('tch-name').value.trim();
    const subject = document.getElementById('tch-subject').value.trim();
    const phone = document.getElementById('tch-phone').value.trim();
    const weeklyHours = Number(document.getElementById('tch-hours').value) || 18;
    const classes = document.getElementById('tch-classes').value.trim() || '1-sinf';

    const parts = name.split(' ');
    const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();

    const newTch = {
      id: 'tch-' + Date.now(),
      initials,
      name,
      subject,
      classes,
      weeklyHours,
      phone
    };

    this.data.teachers.push(newTch);
    saveData(this.data);
    this.closeModal();
    this.renderCurrentView();
    this.showToast(`O'qituvchi "${name}" muvaffaqiyatli kiritildi!`, 'success');
  }

  // ==========================================
  // TOAST SYSTEM
  // ==========================================
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    
    let iconSvg = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    `;
    if (type === 'info') {
      iconSvg = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div style="font-size: 13.5px; font-weight: 500; color: var(--text-main); line-height: 1.35;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 250);
    }, 3200);
  }
}

// Global App Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.app = new MaktabCRM();
});
