// To'lovlar (Payments) View - Fully responsive for Mobile, Tablet & Desktop with full i18n
import { t, translateStatus, translatePeriod } from '../i18n.js';

function formatSum(amount) {
  if (amount == null) return '0';
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function renderPaymentsView(data, selectedClass = null, searchQuery = '', activePeriod = '30 kun') {
  const allStudents = data.students || [];
  const classes = data.classes || [];

  // Dynamic calculations
  const totalPaid = allStudents.reduce((sum, s) => sum + (s.paidAmount || 0), 0);
  const totalFees = allStudents.reduce((sum, s) => sum + (s.monthlyFee || 0), 0);
  const totalDebt = allStudents.reduce((sum, s) => sum + (s.debtAmount || 0), 0);
  const paidPercent = totalFees > 0 ? Math.round((totalPaid / totalFees) * 100) : 0;
  const duePercent = totalFees > 0 ? Math.round((totalDebt / totalFees) * 100) : 0;
  const totalRevenue = totalPaid;

  // Filter students based on class & search query
  const query = (searchQuery || '').trim().toLowerCase();
  let filteredStudents = allStudents;
  
  if (selectedClass && selectedClass !== 'all') {
    filteredStudents = filteredStudents.filter(s => s.sinf === selectedClass);
  }

  if (query.length > 0) {
    filteredStudents = filteredStudents.filter(s =>
      s.name.toLowerCase().includes(query) ||
      (s.sinf && s.sinf.toLowerCase().includes(query)) ||
      (s.phone && s.phone.includes(query))
    );
  }

  const periodDisplay = translatePeriod(activePeriod);

  return `
    <div class="payments-page-wrapper">
      
      <!-- Desktop & Tablet Header Strip -->
      <div class="page-header desktop-only-flex">
        <div class="header-title-block">
          <h2>${t('paymentsTitle')}</h2>
          <p>${t('paymentsSubtitle')}</p>
        </div>

        <div class="header-actions">
          <button class="btn btn-primary" onclick="window.app.exportPaymentsToCSV()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>${t('exportPaymentsBtn')}</span>
          </button>

          <button class="btn btn-primary" onclick="window.app.openModal('addPayment')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>${t('newPayment')}</span>
          </button>
        </div>
      </div>

      <!-- Main Overview Card (Responsive: Spacious Stacked on Mobile, Side-by-Side on Tablet/PC) -->
      <div class="payments-overview-card">
        
        <!-- Revenue Section -->
        <div class="payments-revenue-block">
          <div class="payments-revenue-label">${t('monthRevenue')}</div>
          <div class="payments-revenue-row">
            <div class="payments-revenue-sum">${formatSum(totalRevenue)} ${t('som')}</div>
            
            <div class="payments-period-selector" style="position: relative;">
              <button 
                type="button" 
                class="payments-period-pill-btn" 
                id="period-toggle-btn"
                onclick="window.app.togglePaymentPeriodMenu(event)"
                aria-expanded="false"
              >
                <span>${periodDisplay}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              <!-- Period Dropdown Menu -->
              <div class="payments-period-dropdown" id="payments-period-dropdown" style="display: none;">
                <div class="period-option ${activePeriod === '7 kun' ? 'selected' : ''}" onclick="window.app.setPaymentPeriod('7 kun')">${t('days7')}</div>
                <div class="period-option ${activePeriod === '30 kun' ? 'selected' : ''}" onclick="window.app.setPaymentPeriod('30 kun')">${t('days30')}</div>
                <div class="period-option ${activePeriod === 'Shu oy' ? 'selected' : ''}" onclick="window.app.setPaymentPeriod('Shu oy')">${t('thisMonth')}</div>
                <div class="period-option ${activePeriod === 'Yillik' ? 'selected' : ''}" onclick="window.app.setPaymentPeriod('Yillik')">${t('yearly')}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gauges Section: 2 circular progress indicators (Spacious cards on mobile) -->
        <div class="payments-gauges-row">
          
          <!-- Gauge 1: Green (To'lov qilingan / Оплачено / Paid) -->
          <div class="payment-gauge-item">
            <div class="payment-gauge-circle-wrap">
              <svg viewBox="0 0 36 36" class="payment-circular-chart chart-green">
                <path class="circle-track" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-fill" stroke-dasharray="${paidPercent}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span class="payment-gauge-center-text">${paidPercent}%</span>
            </div>
            <div class="payment-gauge-meta">
              <div class="payment-gauge-title">${t('paidSoFar')}</div>
              <div class="payment-gauge-sub">${formatSum(totalPaid)} ${t('som')}</div>
            </div>
          </div>

          <!-- Gauge 2: Yellow/Amber (Qoldiq qarz / Остаток долга / Remaining Debt) -->
          <div class="payment-gauge-item">
            <div class="payment-gauge-circle-wrap">
              <svg viewBox="0 0 36 36" class="payment-circular-chart chart-yellow">
                <path class="circle-track" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle-fill" stroke-dasharray="${duePercent}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <span class="payment-gauge-center-text">${duePercent}%</span>
            </div>
            <div class="payment-gauge-meta">
              <div class="payment-gauge-title">${t('debtRemaining')}</div>
              <div class="payment-gauge-sub">${formatSum(totalDebt)} ${t('som')}</div>
            </div>
          </div>

        </div>

      </div>

      <!-- Controls & Toolbar: Header + Class Filter Pills + Search input -->
      <div class="payments-controls-bar">
        <div class="payments-section-header">
          <h3 class="payments-section-title">${t('detailedStudents')}</h3>
          <span class="badge-counter">${filteredStudents.length} ${t('studentsCountUnit')}</span>
        </div>

        <div class="payments-toolbar-actions">
          <!-- Class Filter Pills -->
          <div class="payments-class-pills">
            <button class="filter-pill ${(!selectedClass || selectedClass === 'all') ? 'active' : ''}" onclick="window.app.selectPaymentClass('all')">${t('all')}</button>
            ${classes.map(c => `
              <button class="filter-pill ${selectedClass === c.name ? 'active' : ''}" onclick="window.app.selectPaymentClass('${c.name}')">${c.name}</button>
            `).join('')}
          </div>

          <!-- Search Bar -->
          <div class="payments-search-container">
            <svg class="payments-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              class="payments-search-input" 
              placeholder="${t('search')}" 
              value="${searchQuery}" 
              oninput="window.app.filterPaymentsSearch(this.value)"
            />
            ${searchQuery ? `
              <button class="payments-search-clear-btn" onclick="window.app.filterPaymentsSearch('')" aria-label="${t('close')}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Students Payment Cards List -->
      <div class="payments-students-list">
        ${filteredStudents.length === 0 ? `
          <div class="payments-empty-state" style="grid-column: 1 / -1;">
            <p>${t('noStudentFound')}</p>
          </div>
        ` : filteredStudents.map((s, idx) => {
          const displayAmount = s.annualFee ? formatSum(s.annualFee) : (s.monthlyFee ? formatSum(s.monthlyFee) : '3 000 000');
          
          let initials = s.initials;
          if (!initials) {
            const parts = (s.name || '').trim().split(/\s+/);
            initials = parts.length >= 2 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0].slice(0, 2).toUpperCase();
          }

          const avatarPalettes = [
            { bg: '#eff6ff', color: '#2563eb' },
            { bg: '#f0fdf4', color: '#16a34a' },
            { bg: '#faf5ff', color: '#9333ea' },
            { bg: '#fff7ed', color: '#ea580c' },
            { bg: '#fdf2f8', color: '#db2777' },
            { bg: '#f0f9ff', color: '#0284c7' },
          ];
          const palette = avatarPalettes[idx % avatarPalettes.length];

          // Determine status text & dot color
          let dotColorClass = 'dot-green';
          let statusText = t('statusPaid');
          if (s.paymentStatusCode === 'paid' || (s.debtAmount === 0 && (s.paidAmount || 0) > 0)) {
            dotColorClass = 'dot-green';
            statusText = t('statusPaid');
          } else if (s.paymentStatusCode === 'partial' || ((s.paidAmount || 0) > 0 && (s.debtAmount || 0) > 0)) {
            dotColorClass = 'dot-yellow';
            statusText = t('statusPartial');
          } else if (s.paymentStatusCode === 'debt' || (s.debtAmount || 0) > 0) {
            dotColorClass = 'dot-red';
            statusText = t('statusDebt');
          }

          return `
            <div class="payment-student-card" onclick="window.app.openQuickPayModal('${s.id}')">
              <!-- Left side: Avatar Initials + Name + Class badge -->
              <div class="payment-student-info">
                <div class="payment-student-avatar-badge" style="background: ${palette.bg}; color: ${palette.color};">
                  ${initials}
                </div>
                <div class="payment-student-text">
                  <div class="payment-student-name">${s.name}</div>
                  <div class="payment-student-class-badge">${s.sinf || '3-A'}</div>
                </div>
              </div>

              <!-- Right side: Amount + Status indicator + Receipt button -->
              <div class="payment-student-pricing">
                <div class="payment-student-amount">${displayAmount} ${t('som')}</div>
                <div class="payment-student-status">
                  <span class="status-indicator-dot ${dotColorClass}"></span>
                  <span class="status-indicator-text">${statusText}</span>
                </div>
                <div style="display: flex; align-items: center; justify-content: flex-end; margin-top: 4px;">
                  <button type="button" class="btn-receipt-icon" onclick="event.stopPropagation(); window.app.openStudentLastReceipt('${s.id}')" title="${t('receipt')}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 6 2 18 2 18 9"></polyline>
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                      <rect x="6" y="14" width="12" height="8"></rect>
                    </svg>
                    <span>${t('receipt')}</span>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}
