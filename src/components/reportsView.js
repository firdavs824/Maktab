// Hisobotlar (Reports) view with full i18n support
import { t } from '../i18n.js';

export function renderReportsView(data) {
  const students = data.students || [];
  const classes = data.classes || [];
  const leads = data.leads || [];

  const totalPaidSum = students.reduce((acc, s) => acc + (s.paidAmount || 0), 0);
  const totalCapacity = classes.reduce((acc, c) => acc + (c.capacity || 20), 0);
  const totalStudents = students.length;
  const capacityPercent = totalCapacity > 0 ? ((totalStudents / totalCapacity) * 100).toFixed(1) : "0";

  const todayPresentCount = classes.reduce((acc, c) => acc + (c.todayPresent || (c.attendanceStatus === 'Belgilangan' ? c.currentStudents : Math.round(c.currentStudents * 0.95))), 0);
  const todayTotalCount = classes.reduce((acc, c) => acc + (c.todayTotal || c.currentStudents || 0), 0);
  const avgAttendance = todayTotalCount > 0 ? ((todayPresentCount / todayTotalCount) * 100).toFixed(1) : "95.0";

  const totalLeads = leads.length;
  const contractLeads = leads.filter(l => l.stage === 'shartnoma').length;
  const conversionRate = totalLeads > 0 ? ((contractLeads / totalLeads) * 100).toFixed(1) : "0";

  // Marketing sources breakdown
  const sourceCounts = {};
  leads.forEach(l => {
    const src = l.source || 'Boshqa';
    sourceCounts[src] = (sourceCounts[src] || 0) + 1;
  });

  const sourceColors = {
    'Instagram': 'tag-instagram',
    'Telegram': 'tag-telegram',
    'Tavsiya': 'tag-tavsiya',
    'Sayt': 'tag-sayt'
  };

  return `
    <div class="page-header">
      <div class="header-title-block">
        <h2>${t('reportsTitle')}</h2>
        <p>${t('reportsSubtitle')}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.print()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>${t('printBtn')}</span>
        </button>
        <button class="btn btn-primary" onclick="window.app.exportPaymentsToCSV()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>${t('downloadReportBtn')}</span>
        </button>
      </div>
    </div>

    <!-- Summary Metrics -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-card-title">${t('totalRevenueCollected')}</div>
        <div class="stat-card-content">
          <span class="stat-card-number" style="font-size: 24px;">${(totalPaidSum / 1000000).toFixed(1)} ${t('currencyUnit')}</span>
          <span class="stat-card-subtitle">${t('som')}</span>
        </div>
        <div class="accent-line green"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${t('schoolCapacityRate')}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${capacityPercent}%</span>
          <span class="stat-card-subtitle">${totalStudents} / ${totalCapacity} ${t('seats')}</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${t('averageAttendanceMetric')}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${avgAttendance}%</span>
          <span class="stat-card-subtitle">${todayPresentCount} / ${todayTotalCount}</span>
        </div>
        <div class="accent-line blue"></div>
      </div>

      <div class="stat-card">
        <div class="stat-card-title">${t('admissionConversion')}</div>
        <div class="stat-card-content">
          <span class="stat-card-number">${conversionRate}%</span>
          <span class="stat-card-subtitle">${contractLeads} / ${totalLeads} ${t('enrolledUnit')}</span>
        </div>
        <div class="accent-line orange"></div>
      </div>
    </div>

    <!-- Analytics Breakdown Grid -->
    <div class="dashboard-grid-2col">
      <!-- Moliya tahlili -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
            ${t('classFinanceAnalysis')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${classes.map(c => {
            const classStudents = students.filter(s => s.sinf === c.name);
            const classPaid = classStudents.reduce((acc, s) => acc + (s.paidAmount || 0), 0);
            const classFee = classStudents.reduce((acc, s) => acc + (s.monthlyFee || 0), 0);
            const classDebt = classStudents.reduce((acc, s) => acc + (s.debtAmount || 0), 0);
            const pct = classFee > 0 ? Math.min(100, Math.round((classPaid / classFee) * 100)) : 100;
            const barColor = pct === 100 ? '#10b981' : (pct >= 70 ? '#f59e0b' : '#ef4444');

            return `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
                  <span>${c.name} (${classStudents.length} ${t('studentsCountUnit')})</span>
                  <span>${pct}% ${t('paidBadge')} ${classDebt > 0 ? `(${((classDebt) / 1000000).toFixed(1)} ${t('currencyUnit')} ${t('debtBadge')})` : ''}</span>
                </div>
                <div class="progress-track" style="height: 8px;">
                  <div class="progress-fill" style="width: ${pct}%; background: ${barColor};"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Reklama manbalari samaradorligi -->
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            ${t('marketingEfficiency')}
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${Object.entries(sourceCounts).map(([src, count]) => {
            const share = totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0;
            const badgeClass = sourceColors[src] || 'tag-badge';

            return `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: var(--bg-subtle); border-radius: var(--radius-md);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span class="tag-badge ${badgeClass}">${src}</span>
                  <span style="font-size: 13px; font-weight: 600;">${count} ${t('requestsCount')}</span>
                </div>
                <span style="font-size: 12.5px; color: var(--text-muted); font-weight: 600;">${share}% ${t('shareUnit')}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
