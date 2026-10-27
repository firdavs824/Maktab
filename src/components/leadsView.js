// Leads / Qabul view matching Screenshot 1 with full i18n support
import { t } from '../i18n.js';

export function renderLeadsView(data, filterQuery = '', activeMobileCol = 'all', sourceFilter = null) {
  let leads = data.leads || [];

  if (sourceFilter && sourceFilter !== 'Hammasi') {
    leads = leads.filter(l => l.source === sourceFilter);
  }

  if (filterQuery.trim()) {
    const q = filterQuery.toLowerCase().trim();
    leads = leads.filter(l => 
      l.name.toLowerCase().includes(q) || 
      l.phone.toLowerCase().includes(q) ||
      (l.parent && l.parent.toLowerCase().includes(q))
    );
  }

  const yangiLeads = leads.filter(l => l.stage === 'yangi');
  const boglanildiLeads = leads.filter(l => l.stage === 'boglanildi');
  const suhbatLeads = leads.filter(l => l.stage === 'suhbat');
  const shartnomaLeads = leads.filter(l => l.stage === 'shartnoma');

  function renderCard(l) {
    let tagClass = 'tag-instagram';
    if (l.source === 'Telegram') tagClass = 'tag-telegram';
    else if (l.source === 'Tavsiya') tagClass = 'tag-tavsiya';
    else if (l.source === 'Sayt') tagClass = 'tag-sayt';

    return `
      <div class="lead-card" draggable="true" ondragstart="window.app.handleDragStart(event, '${l.id}')" onclick="window.app.openLeadDetails('${l.id}')">
        <div class="lead-card-header">
          <span class="lead-name">${l.name}</span>
          <span class="grade-badge">${l.grade}</span>
        </div>
        <div class="lead-meta">
          <div>${l.parent}</div>
          <div class="lead-phone">${l.phone}</div>
        </div>
        <div class="lead-card-footer">
          <span class="tag-badge ${tagClass}">${l.source}</span>
          <div class="lead-footer-right">
            <span class="lead-date">${l.date}</span>
            <div class="manager-avatar">${l.manager}</div>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="page-header">
      <div class="header-title-block">
        <h2>${t('leadsTitle')}</h2>
        <p class="header-sub">${t('leadsSubtitle')}</p>
      </div>
      <div class="header-actions">
        <div class="search-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            class="search-input" 
            placeholder="${t('searchLeadPlaceholder')}" 
            value="${filterQuery}"
            oninput="window.app.filterLeads(this.value)"
          />
        </div>

        <button class="btn btn-secondary" onclick="window.app.toggleLeadFilterModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          <span>${t('filterBtn')}</span>
        </button>

        <button class="btn btn-primary" onclick="window.app.openModal('addLead')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${t('newRequest')}</span>
        </button>
      </div>
    </div>

    <!-- 4 KPI Cards matching Screenshot 5 -->
    <div class="leads-stats-line-grid">
      <!-- 1. Qabul arizalari -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Qabul arizalari</span>
          </div>
          <div class="lead-line-top-icon text-blue">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${leads.length} ta ariza</div>
        <div class="lead-line-bottom-indicator bg-blue"></div>
      </div>

      <!-- 2. Yangi -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-orange">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span>Yangi</span>
          </div>
          <div class="lead-line-top-icon text-orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${yangiLeads.length} ta</div>
        <div class="lead-line-bottom-indicator bg-orange"></div>
      </div>

      <!-- 3. Suhbat -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-purple">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Suhbat</span>
          </div>
          <div class="lead-line-top-icon text-purple">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${suhbatLeads.length} ta</div>
        <div class="lead-line-bottom-indicator bg-purple"></div>
      </div>

      <!-- 4. Shartnoma -->
      <div class="lead-line-stat-card">
        <div class="lead-line-card-top">
          <div class="lead-line-title-group text-green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>Shartnoma</span>
          </div>
          <div class="lead-line-top-icon text-green">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
        </div>
        <div class="lead-line-card-num">${shartnomaLeads.length} ta</div>
        <div class="lead-line-bottom-indicator bg-green"></div>
      </div>
    </div>

    <!-- Mobile Column Switcher (Visible on phone) -->
    <div class="pill-filters mobile-col-switcher" style="display: none;">
      <button class="filter-pill ${activeMobileCol === 'all' ? 'active' : ''}" onclick="window.app.switchMobileLeadCol('all')">
        ${t('all')} (${leads.length})
      </button>
      <button class="filter-pill ${activeMobileCol === 'yangi' ? 'active' : ''}" onclick="window.app.switchMobileLeadCol('yangi')">
        ${t('yangi')} (${yangiLeads.length})
      </button>
      <button class="filter-pill ${activeMobileCol === 'boglanildi' ? 'active' : ''}" onclick="window.app.switchMobileLeadCol('boglanildi')">
        ${t('boglanildi')} (${boglanildiLeads.length})
      </button>
      <button class="filter-pill ${activeMobileCol === 'suhbat' ? 'active' : ''}" onclick="window.app.switchMobileLeadCol('suhbat')">
        ${t('suhbat')} (${suhbatLeads.length})
      </button>
      <button class="filter-pill ${activeMobileCol === 'shartnoma' ? 'active' : ''}" onclick="window.app.switchMobileLeadCol('shartnoma')">
        ${t('shartnoma')} (${shartnomaLeads.length})
      </button>
    </div>

    <!-- 4-Column Kanban Board -->
    <div class="kanban-board">
      
      <!-- Column 1: Yangi -->
      <div 
        class="kanban-column ${activeMobileCol !== 'all' && activeMobileCol !== 'yangi' ? 'hide-on-mobile' : ''}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'yangi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-blue"></span>
            <span>${t('yangi')}</span>
          </div>
          <span class="col-badge-count">${yangiLeads.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${yangiLeads.map(renderCard).join('')}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'yangi')">
          + ${t('addLeadInCol')}
        </button>
      </div>

      <!-- Column 2: Bog'lanildi -->
      <div 
        class="kanban-column ${activeMobileCol !== 'all' && activeMobileCol !== 'boglanildi' ? 'hide-on-mobile' : ''}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'boglanildi')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-orange"></span>
            <span>${t('boglanildi')}</span>
          </div>
          <span class="col-badge-count">${boglanildiLeads.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${boglanildiLeads.map(renderCard).join('')}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'boglanildi')">
          + ${t('addLeadInCol')}
        </button>
      </div>

      <!-- Column 3: Suhbat / test -->
      <div 
        class="kanban-column ${activeMobileCol !== 'all' && activeMobileCol !== 'suhbat' ? 'hide-on-mobile' : ''}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'suhbat')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-purple"></span>
            <span>${t('suhbat')}</span>
          </div>
          <span class="col-badge-count">${suhbatLeads.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${suhbatLeads.map(renderCard).join('')}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'suhbat')">
          + ${t('addLeadInCol')}
        </button>
      </div>

      <!-- Column 4: Shartnoma -->
      <div 
        class="kanban-column ${activeMobileCol !== 'all' && activeMobileCol !== 'shartnoma' ? 'hide-on-mobile' : ''}"
        ondragover="window.app.handleDragOver(event)"
        ondrop="window.app.handleDrop(event, 'shartnoma')"
      >
        <div class="kanban-col-header">
          <div class="kanban-col-title">
            <span class="dot-indicator dot-green"></span>
            <span>${t('shartnoma')}</span>
          </div>
          <span class="col-badge-count">${shartnomaLeads.length}</span>
        </div>
        <div class="kanban-cards-list">
          ${shartnomaLeads.map(renderCard).join('')}
        </div>
        <button class="btn-add-lead-col" onclick="window.app.openModal('addLead', 'shartnoma')">
          + ${t('addLeadInCol')}
        </button>
      </div>

    </div>
  `;
}
