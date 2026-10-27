// Students / O'quvchilar & Sinflar View with hierarchical class navigation and rich payment status
import { t, translateRole } from '../i18n.js';

function formatSum(amount) {
  if (amount == null) return '0';
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function renderStudentsView(data, activeFilter = 'all', searchQuery = '', selectedClass = null, selectedStudentId = null) {
  let allStudents = data.students || [];
  const classes = data.classes || [];

  // If a search query is active, filter all students directly
  let isSearching = searchQuery.trim().length > 0;
  let searchedStudents = [];
  if (isSearching) {
    const q = searchQuery.toLowerCase().trim();
    searchedStudents = allStudents.filter(s => 
      s.name.toLowerCase().includes(q) || 
      (s.phone && s.phone.toLowerCase().includes(q)) ||
      (s.parentName && s.parentName.toLowerCase().includes(q)) ||
      (s.sinf && s.sinf.toLowerCase().includes(q))
    );
  }

  const pills = [
    { id: 'all', label: t('all') },
    { id: '1-sinf', label: '1-sinf' },
    { id: '2-sinf', label: '2-sinf' },
    { id: '3-sinf', label: '3-sinf' },
    { id: '4-sinf', label: '4-sinf' },
    { id: '5-sinf', label: '5-sinf' },
    { id: 'debt', label: t('debtorsOnly') },
  ];

  return `
    <!-- Top Header: Title on Left, Compact Search + Add on Right -->
    <div class="students-page-header">
      <div class="students-header-title-wrap">
        <h2>${t('studentsTitle')}</h2>
        <p class="header-sub">${t('studentsSubtitle')}</p>
      </div>

      <div class="students-header-compact-actions">
        <div class="search-box-compact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input-compact" 
            placeholder="${t('search')}" 
            value="${searchQuery}"
            oninput="window.app.filterStudentsSearch(this.value)"
          />
        </div>

        <button class="btn btn-primary btn-add-compact" onclick="window.app.exportStudentsCSV()" title="${t('exportCsv')}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>${t('exportBtn')}</span>
        </button>

        <button class="btn btn-primary btn-add-compact" onclick="window.app.openModal('addStudent')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${t('addStudentBtn')}</span>
        </button>
      </div>
    </div>

    <!-- Filter Pills: Hammasi, 1-sinf, 2-sinf, 3-sinf, 4-sinf, 5-sinf, Qarzdorlar -->
    <div class="pill-filters">
      ${pills.map(p => `
        <button 
          class="filter-pill ${activeFilter === p.id ? 'active' : ''}" 
          onclick="window.app.filterStudentsPill('${p.id}')"
        >
          ${p.label}
        </button>
      `).join('')}
    </div>

    <!-- MAIN CONTENT AREA -->
    ${isSearching ? renderSearchResults(searchedStudents, searchQuery) : 
      (selectedClass ? renderSingleClassView(data, selectedClass, activeFilter) : 
        (activeFilter === 'debt' ? renderDebtorsView(allStudents) : renderClassesOverview(classes, allStudents, activeFilter))
      )
    }
  `;
}

// 1. Classes Overview Grid
function renderClassesOverview(classes, allStudents, activeFilter) {
  let displayClasses = classes;
  if (activeFilter !== 'all') {
    displayClasses = classes.filter(c => c.name.startsWith(activeFilter.replace('-sinf', '')));
  }

  return `
    <div class="classes-overview-section">
      <div class="section-title-bar">
        <div>
          <h3 class="section-heading">${t('schoolClasses')}</h3>
          <p class="section-desc">${t('selectClassHint')}</p>
        </div>
        <span class="badge-counter">${displayClasses.length} ${t('classUnit')}</span>
      </div>

      <div class="class-cards-grid">
        ${displayClasses.map(c => {
          const classStudents = allStudents.filter(s => s.sinf === c.name);
          const studentCount = classStudents.length;
          
          let paidCount = 0;
          let partialCount = 0;
          let debtCount = 0;

          classStudents.forEach(s => {
            if (s.paymentStatusCode === 'paid' || (s.debtAmount === 0 && (s.paidAmount || 0) > 0)) paidCount++;
            else if (s.paymentStatusCode === 'partial') partialCount++;
            else if (s.paymentStatusCode === 'debt' || (s.debtAmount || 0) > 0) debtCount++;
          });

          const pct = Math.min(100, Math.round((studentCount / (c.capacity || 20)) * 100));

          return `
            <div class="student-class-card" onclick="window.app.selectStudentClass('${c.name}')">
              <div class="class-card-top">
                <div class="class-card-badge">${c.name}</div>
                <div class="class-card-meta">
                  <div class="class-card-title">${c.name} Sinf</div>
                  <div class="class-card-sub">${c.room ? (c.room.replace(/\D/g, '') ? `${c.room.replace(/\D/g, '')}-xona` : c.room) : '12-xona'} • ${c.teacherName || t('homeroomTeacherLabel')}</div>
                </div>
              </div>

              <!-- Capacity & Progress -->
              <div class="class-card-stats-row">
                <div class="class-stat-label">O'quvchilar soni</div>
                <div class="class-stat-val"><strong>${studentCount}</strong> / ${c.capacity || 20}</div>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${pct}%;"></div>
              </div>

              <!-- Payment Breakdown Badges matching Screenshot 4 -->
              <div class="class-payment-breakdown">
                ${paidCount > 0 ? `
                  <span class="pay-chip green" title="${t('statusPaid')}">
                    • ${paidCount} to'lagan
                  </span>
                ` : `
                  <span class="pay-chip green" style="opacity: 0.6;">
                    • 0 to'lagan
                  </span>
                `}
                ${partialCount > 0 ? `
                  <span class="pay-chip orange" title="${t('statusPartial')}">
                    • ${partialCount} qisman
                  </span>
                ` : ''}
                ${debtCount > 0 ? `
                  <span class="pay-chip red" title="${t('statusDebt')}">
                    • ${debtCount} qarzdor
                  </span>
                ` : ''}
              </div>

              <!-- Action Footer matching Screenshot 4 -->
              <div class="class-card-footer">
                <button class="btn-open-class" onclick="event.stopPropagation(); window.app.selectStudentClass('${c.name}')">
                  <span>Sinfga kirish</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 2. Single Class View
function renderSingleClassView(data, selectedClass, activeFilter) {
  const allStudents = data.students || [];
  const classStudents = allStudents.filter(s => s.sinf === selectedClass);
  const classInfo = data.classes?.find(c => c.name === selectedClass) || {
    name: selectedClass,
    room: t('room'),
    teacherName: t('homeroomTeacherLabel')
  };

  const gradePrefix = selectedClass.charAt(0);
  const siblingClasses = data.classes?.filter(c => c.name.startsWith(gradePrefix)) || [];

  let totalPaid = 0;
  let totalDebt = 0;
  classStudents.forEach(s => {
    totalPaid += (s.paidAmount || 0);
    totalDebt += (s.debtAmount || 0);
  });

  return `
    <div class="single-class-container">
      
      <!-- Back button and Navigation Bar -->
      <div class="class-nav-bar">
        <button class="btn-back-to-classes" onclick="window.app.selectStudentClass(null)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>${t('allClassesBack')}</span>
        </button>

        ${siblingClasses.length > 1 ? `
          <div class="sibling-classes-tabs">
            ${siblingClasses.map(c => `
              <button 
                class="sibling-tab ${c.name === selectedClass ? 'active' : ''}" 
                onclick="window.app.selectStudentClass('${c.name}')"
              >
                ${c.name}
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Class Summary Card -->
      <div class="class-summary-card">
        <div class="class-summary-header">
          <div class="class-summary-badge">${classInfo.name}</div>
          <div class="class-summary-details">
            <h3>${classInfo.name} ${t('classStudentsOf')}</h3>
            <p>${classInfo.room || t('room')} • ${t('leaderLabel')}: <strong>${classInfo.teacherName || t('homeroomTeacherLabel')}</strong></p>
          </div>
          <div class="class-count-pill">${classStudents.length} ${t('studentsCountUnit')}</div>
        </div>

        <div class="class-financial-strip">
          <div class="fin-stat-item">
            <span class="fin-stat-label">${t('paidAmountSummary')}</span>
            <span class="fin-stat-value text-green">${formatSum(totalPaid)} ${t('som')}</span>
          </div>
          <div class="fin-stat-divider"></div>
          <div class="fin-stat-item">
            <span class="fin-stat-label">${t('debtSummary')}</span>
            <span class="fin-stat-value ${totalDebt > 0 ? 'text-red' : 'text-green'}">${formatSum(totalDebt)} ${t('som')}</span>
          </div>
        </div>
      </div>

      <!-- Student Cards List -->
      <div class="student-cards-list">
        ${classStudents.length === 0 ? `
          <div class="empty-students-box">
            <p>${t('emptyClassStudents')}</p>
            <button class="btn btn-primary" onclick="window.app.openModal('addStudent')">
              ${t('addStudent')}
            </button>
          </div>
        ` : classStudents.map(s => renderStudentCard(s)).join('')}
      </div>

    </div>
  `;
}

// 3. Render Individual Student Card
function renderStudentCard(s) {
  let payStatusClass = 'status-paid';
  let payBadgeText = t('statusPaid');
  let payDetailText = `${formatSum(s.monthlyFee || 3000000)} ${t('som')} ${t('fullyPaid')}`;

  if (s.paymentStatusCode === 'partial' || ((s.paidAmount || 0) > 0 && (s.debtAmount || 0) > 0)) {
    payStatusClass = 'status-partial';
    payBadgeText = t('statusPartial');
    payDetailText = `${t('paidSoFar')}: ${formatSum(s.paidAmount)} ${t('som')} • ${t('debtRemaining')}: ${formatSum(s.debtAmount)} ${t('som')}`;
  } else if (s.paymentStatusCode === 'debt' || (s.debtAmount || 0) > 0) {
    payStatusClass = 'status-debt';
    payBadgeText = t('statusDebt');
    payDetailText = `${t('debtSummary')}: ${formatSum(s.debtAmount || s.monthlyFee || 3000000)} ${t('som')}`;
  }

  const roleText = translateRole(s.parentRole || 'Ota');

  return `
    <div class="student-item-card">
      <div class="student-item-header">
        <div class="student-avatar">${s.initials || 'OQ'}</div>
        <div class="student-identity">
          <h4 class="student-name">${s.name}</h4>
          <div class="student-meta-sub">
            <span class="badge-sinf">${s.sinf || '1-A'}</span>
            <span class="badge-attendance">${t('attendance')}: ${s.attendance || '95%'}</span>
          </div>
        </div>
      </div>

      <!-- Parent & Phone -->
      <div class="student-contact-row">
        <div class="contact-parent">
          <span class="contact-label">${roleText}:</span>
          <span class="contact-name">${s.parentName || s.parent || '—'}</span>
        </div>
        <a href="tel:${s.phone}" class="contact-phone-btn" title="${t('callParent')}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>${s.phone}</span>
        </a>
      </div>

      <!-- Payment Status Block -->
      <div class="student-payment-banner ${payStatusClass}">
        <div class="pay-banner-top">
          <span class="pay-badge ${payStatusClass}">${payBadgeText}</span>
          <span class="pay-amount-info">${payDetailText}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="student-card-actions">
        <button class="btn-card-action pay" onclick="window.app.openQuickPayModal('${s.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
          <span>${t('payments')}</span>
        </button>

        <button class="btn-card-action edit" onclick="window.app.openEditStudentModal('${s.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <span>${t('edit')}</span>
        </button>

        <button class="btn-card-action info" onclick="window.app.openStudentDetailsModal('${s.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>${t('studentDetails')}</span>
        </button>
      </div>
    </div>
  `;
}

// 4. Debtors List
function renderDebtorsView(allStudents) {
  const debtors = allStudents.filter(s => s.paymentStatusCode === 'debt' || s.paymentStatusCode === 'partial' || (s.debtAmount || 0) > 0);
  
  let totalDebt = 0;
  debtors.forEach(s => totalDebt += (s.debtAmount || 0));

  return `
    <div class="debtors-view-container">
      <div class="debtors-summary-banner">
        <div>
          <h3>${t('debtorsOnly')}</h3>
          <p>${debtors.length} ${t('debtorFamiliesCount')}</p>
        </div>
        <div class="debt-total-amount">
          <span class="label">${t('debtSummary')}:</span>
          <span class="amount text-red">${formatSum(totalDebt)} ${t('som')}</span>
        </div>
      </div>

      <div class="student-cards-list">
        ${debtors.length === 0 ? `
          <div class="empty-students-box">
            <p>${t('noDebt')}</p>
          </div>
        ` : debtors.map(s => renderStudentCard(s)).join('')}
      </div>
    </div>
  `;
}

// 5. Search Results View
function renderSearchResults(results, query) {
  return `
    <div class="search-results-section">
      <div class="section-title-bar">
        <h3>${t('searchResultsFor')}: "${query}"</h3>
        <span class="badge-counter">${results.length} ${t('studentsCountUnit')}</span>
      </div>

      <div class="student-cards-list">
        ${results.length === 0 ? `
          <div class="empty-students-box">
            <p>${t('noResultsFound')}</p>
          </div>
        ` : results.map(s => renderStudentCard(s)).join('')}
      </div>
    </div>
  `;
}
