// Boshqaruv paneli (Dashboard) view - screenshotdagi dizayn bilan to'liq moslangan
import { t } from '../i18n.js';

export function renderDashboardView(data) {
  const totalStudents = data.students?.length || 17;
  const totalLeads = data.leads?.length || 14;
  const newLeads = data.leads?.filter(l => l.stage === 'yangi').length || 4;
  const interviewLeads = data.leads?.filter(l => l.stage === 'suhbat').length || 3;
  const contractLeads = data.leads?.filter(l => l.stage === 'shartnoma').length || 4;
  const contactedLeads = data.leads?.filter(l => l.stage === 'boglanildi').length || 4;

  const totalPaidSum = data.students?.reduce((acc, s) => acc + (s.paidAmount || 0), 0) || 128350000;
  const totalExpectedSum = data.students?.reduce((acc, s) => acc + (s.monthlyFee || 0), 0) || 59440000;
  const paidPercent = 216; // Screenshotdagi ko'rsatkich

  const todayPresentCount = 88;
  const todayTotalCount = 96;
  const attendanceRate = "91.7";

  const debtorStudents = data.students?.filter(s => (s.debtAmount || 0) > 0) || [];
  const debtorFamiliesCount = debtorStudents.length || 12;

  return `
    <!-- Top Header bar matching user request -->
    <div class="dash-welcome-header">
      <div class="dash-welcome-left">
        <h1 class="dash-clean-title">Boshqaruv paneli</h1>
      </div>

      <div class="dash-welcome-right">
        <!-- Search Box -->
        <div class="dash-search-pill" style="position: relative;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Qidirish..." 
            class="dash-search-input" 
            id="dash-global-search-input"
            autocomplete="off"
            oninput="window.app.handleGlobalSearch(this.value)"
            onfocus="window.app.handleGlobalSearch(this.value)"
          />
          <div id="dash-search-results-dropdown" class="dash-search-dropdown" style="display: none;"></div>
        </div>

        <!-- Hisobot Button replacing Director & Notification bell removed -->
        <button class="dash-report-btn" onclick="window.app.switchTab('reports')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          <span>Hisobot</span>
        </button>
      </div>
    </div>

    <!-- 4 Main KPI Cards Grid matching Screenshot 5 exactly -->
    <div class="dash-kpi-grid">
      
      <!-- 1. Jami yig'ilgan to'lovlar -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('payments')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Jami yig'ilgan to'lovlar</span>
          <span class="kpi-v5-badge-growth">+2.5%</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">128.3 mln</span>
            <span class="kpi-v5-unit">so'm</span>
          </div>
          <!-- Sparkline Chart matching image 5 -->
          <div class="kpi-v5-chart">
            <svg width="86" height="36" viewBox="0 0 86 36" fill="none">
              <defs>
                <linearGradient id="sparkGrad5" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0.0"/>
                </linearGradient>
              </defs>
              <path d="M2,28 L20,28 L35,22 L50,26 L66,16 L84,8 L84,36 L2,36 Z" fill="url(#sparkGrad5)" />
              <path d="M2,28 L20,28 L35,22 L50,26 L66,16 L84,8" stroke="#10b981" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-row">
          <span class="kpi-v5-pill green">• 1 to'lagan</span>
        </div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 100%;"></div>
        </div>
      </div>

      <!-- 2. Maktab sig'imi to'liqligi -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('students')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Maktab sig'imi to'liqligi</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">13.1%</span>
            <span class="kpi-v5-sub-meta">17 / 130 o'rin</span>
          </div>
          <!-- Donut Ring Chart matching image 5 -->
          <div class="kpi-v5-donut">
            <svg width="42" height="42" viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="14" fill="none" stroke="#e6f2ed" stroke-width="4.5" />
              <circle cx="21" cy="21" r="14" fill="none" stroke="#007a55" stroke-width="4.5" stroke-dasharray="88" stroke-dashoffset="76.4" stroke-linecap="round" transform="rotate(-90 21 21)" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-spacer"></div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 13.1%;"></div>
        </div>
      </div>

      <!-- 3. Bugungi davomat -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('attendance')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Bugungi davomat</span>
          <span class="kpi-v5-status-pill green">A'lo</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">91.7%</span>
            <span class="kpi-v5-sub-meta">88 / 96</span>
          </div>
          <!-- Gauge / Speedometer matching image 5 -->
          <div class="kpi-v5-gauge">
            <svg width="50" height="28" viewBox="0 0 50 28">
              <path d="M5,26 A20,20 0 0,1 45,26" fill="none" stroke="#e6f2ed" stroke-width="5" stroke-linecap="round" />
              <path d="M5,26 A20,20 0 0,1 42,14" fill="none" stroke="#007a55" stroke-width="5" stroke-linecap="round" />
              <circle cx="25" cy="25" r="3" fill="#007a55" />
              <line x1="25" y1="25" x2="38" y2="15" stroke="#007a55" stroke-width="2.2" stroke-linecap="round" />
            </svg>
          </div>
        </div>
        <div class="kpi-v5-bottom-spacer"></div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 91.7%;"></div>
        </div>
      </div>

      <!-- 4. Qabul konversiyasi -->
      <div class="dash-kpi-card-v5" onclick="window.app.switchTab('leads')">
        <div class="kpi-v5-top">
          <span class="kpi-v5-title">Qabul konversiyasi</span>
          <span class="kpi-v5-status-pill orange">O'rta</span>
        </div>
        <div class="kpi-v5-main-row">
          <div class="kpi-v5-num-wrap">
            <span class="kpi-v5-big-num">21.4%</span>
            <span class="kpi-v5-sub-meta">3 / 14 qabul</span>
          </div>
          <!-- Mini Bar Chart matching image 5 -->
          <div class="kpi-v5-bars">
            <span class="kpi-v5-bar active" style="height: 22px;"></span>
            <span class="kpi-v5-bar active" style="height: 18px;"></span>
            <span class="kpi-v5-bar" style="height: 14px;"></span>
            <span class="kpi-v5-bar" style="height: 10px;"></span>
          </div>
        </div>
        <div class="kpi-v5-bottom-row" style="justify-content: flex-end;">
          <span class="kpi-v5-chip-solid-orange">3qbul</span>
        </div>
        <div class="kpi-v5-progress-bar">
          <div class="kpi-v5-progress-fill" style="width: 21.4%;"></div>
        </div>
      </div>

    </div>

    <!-- Tezkor amallar Section matching Screenshot -->
    <div class="dash-quick-actions-panel">
      <div class="quick-panel-header">
        <div class="quick-panel-title-wrap">
          <h3 class="quick-panel-title">
            <span class="quick-bolt">⚡</span> Tezkor amallar
          </h3>
          <p class="quick-panel-sub">Tezkor ishlarni bir necha bosqichda bajaring.</p>
        </div>
        <button class="btn-pill-green" onclick="window.app.switchTab('leads')">
          <span>Barchasi</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <div class="quick-cards-grid">
        
        <!-- 1. Yangi o'quvchi -->
        <div class="quick-action-card" onclick="window.app.openModal('addStudent')">
          <div class="quick-card-icon-circle icon-bg-green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007a55" stroke-width="2.2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Yangi o'quvchi</div>
            <div class="quick-card-desc">O'quvchini qo'shish</div>
          </div>
          <div class="quick-card-arrow arrow-green">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 2. Yangi ariza -->
        <div class="quick-action-card" onclick="window.app.openModal('addLead')">
          <div class="quick-card-icon-circle icon-bg-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Yangi ariza</div>
            <div class="quick-card-desc">Qabul arizasi</div>
          </div>
          <div class="quick-card-arrow arrow-blue">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 3. To'lov kiritish -->
        <div class="quick-action-card" onclick="window.app.openModal('addPayment')">
          <div class="quick-card-icon-circle icon-bg-purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2.2">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="M2 10h20"></path>
              <circle cx="16" cy="15" r="1"></circle>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">To'lov kiritish</div>
            <div class="quick-card-desc">To'lovni tasdiqlash</div>
          </div>
          <div class="quick-card-arrow arrow-purple">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 4. Davomat -->
        <div class="quick-action-card" onclick="window.app.switchTab('attendance')">
          <div class="quick-card-icon-circle icon-bg-orange">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.2">
              <rect x="3" y="4" width="18" height="18" rx="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Davomat</div>
            <div class="quick-card-desc">Davomat belgilash</div>
          </div>
          <div class="quick-card-arrow arrow-orange">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 5. Hisobot -->
        <div class="quick-action-card" onclick="window.app.switchTab('reports')">
          <div class="quick-card-icon-circle icon-bg-cyan">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2.2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Hisobot</div>
            <div class="quick-card-desc">Hisobot yaratish</div>
          </div>
          <div class="quick-card-arrow arrow-cyan">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

        <!-- 6. Sozlamalar -->
        <div class="quick-action-card" onclick="window.app.toggleLanguage()">
          <div class="quick-card-icon-circle icon-bg-pink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2.2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <div class="quick-card-content">
            <div class="quick-card-title">Sozlamalar</div>
            <div class="quick-card-desc">Tizim sozlamalari</div>
          </div>
          <div class="quick-card-arrow arrow-pink">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>

      </div>
    </div>

    <!-- 2 Column Section matching Screenshot 3 -->
    <div class="dash-bottom-2col-layout">
      
      <!-- Left Major Card: Qabul Voronkasi + Oktyabr oyi moliyasi -->
      <div class="dash-white-card dash-funnel-finance-card">
        
        <!-- Header -->
        <div class="card-title-bar">
          <div class="card-title-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span class="card-heading-text">Qabul Voronkasi</span>
          </div>
          <button class="btn-pill-outline" onclick="window.app.switchTab('leads')">
            <span>Barchasini ko'rish</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        <!-- 4 Step Process Voronka Boxes -->
        <div class="funnel-process-steps-row">
          
          <!-- Step 1: Yangi so'rovlar -->
          <div class="funnel-step-box step-blue">
            <div class="step-box-top">
              <div class="step-icon-circle bg-blue-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2">
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                  <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.2 6 .5.4.8 1 1 1.6V17h5.6v-.4c.2-.6.5-1.2 1-1.6 1.9-1.3 3.2-3.5 3.2-6a7 7 0 0 0-7-7z"></path>
                </svg>
              </div>
              <div class="step-title-text">1. Yangi<br/>so'rovlar</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-blue"></div>
              <span class="step-badge badge-blue">4 ta</span>
            </div>
          </div>

          <!-- Step 2: Bog'lanildi & ma'lumot -->
          <div class="funnel-step-box step-orange">
            <div class="step-box-top">
              <div class="step-icon-circle bg-orange-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.2">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div class="step-title-text">2. Bog'lanildi<br/>&amp; ma'lumot</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-orange"></div>
              <span class="step-badge badge-orange">4 ta</span>
            </div>
          </div>

          <!-- Step 3: Suhbat davomati -->
          <div class="funnel-step-box step-purple">
            <div class="step-box-top">
              <div class="step-icon-circle bg-purple-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2.2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div class="step-title-text">3. Suhbat<br/>davomati</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-purple"></div>
              <span class="step-badge badge-purple">4 ta</span>
            </div>
          </div>

          <!-- Step 4: Shartnoma imzolandi -->
          <div class="funnel-step-box step-green">
            <div class="step-box-top">
              <div class="step-icon-circle bg-green-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15l2 2 4-4"></path>
                </svg>
              </div>
              <div class="step-title-text">4. Shartnoma<br/>imzolandi</div>
            </div>
            <div class="step-bottom-bar-wrap">
              <div class="step-color-bar bar-green"></div>
              <span class="step-badge badge-green">4 ta</span>
            </div>
          </div>

        </div>

        <!-- Oktyabr oyi moliyasi Sub-section -->
        <div class="finance-overview-subcard">
          <div class="finance-subcard-title">Oktyabr oyi moliyasi</div>
          
          <div class="finance-subcard-main">
            <!-- Green Donut ring -->
            <div class="finance-donut-ring">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="18" stroke="#e2e8f0" stroke-width="6" fill="none" />
                <circle cx="24" cy="24" r="18" stroke="#00a86b" stroke-width="6" stroke-dasharray="113" stroke-dashoffset="30" fill="none" stroke-linecap="round" />
              </svg>
            </div>

            <!-- Text & Bar Info -->
            <div class="finance-info-col">
              <div class="finance-revenue-row">
                <span class="finance-rev-text">Tushum: <strong>128,350,000 so'm (216%)</strong></span>
                <span class="finance-growth-arrow">&uarr;</span>
              </div>
              <!-- Green Full Progress bar -->
              <div class="finance-green-progress-track">
                <div class="finance-green-progress-fill" style="width: 100%;"></div>
              </div>
              <!-- Expected and Debtors -->
              <div class="finance-expected-row">
                <span class="text-expected">Kutilayotgan: 59,440,000 so'm</span>
                <div class="finance-right-badges">
                  <span class="debtor-alert-pill">
                    <span class="alert-icon">!</span> 12 ta qarzdor oila
                  </span>
                  <button class="btn-subcard-details" onclick="window.app.switchTab('payments')">Batafsil</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Right Card: Bugungi reja -->
      <div class="dash-white-card dash-today-schedule-card">
        <div class="card-title-bar">
          <div class="card-title-left">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="card-heading-text">Bugungi reja</span>
          </div>
        </div>

        <div class="schedule-items-list">
          
          <!-- Item 1: Psixolog suhbati -->
          <div class="schedule-item-box item-border-red">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">👫</span>
                <span class="schedule-title-text">Psixolog suhbati</span>
              </div>
              <input type="checkbox" class="schedule-checkbox" />
            </div>
            <div class="schedule-item-sub">14:00 - Umar Nazarov (6-sinf)</div>
          </div>

          <!-- Item 2: Sinflar davomati -->
          <div class="schedule-item-box">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">🏫</span>
                <span class="schedule-title-text">Sinflar davomati</span>
              </div>
            </div>
            <div class="schedule-item-sub">2-A va 4-B</div>
            <button class="btn-schedule-action" onclick="window.app.showToast('O\'qituvchilarga eslatma yuborildi!', 'success')">
              O'qituvchilarga eslatma yuborish
            </button>
          </div>

          <!-- Item 3: To'lov eslatmalari -->
          <div class="schedule-item-box">
            <div class="schedule-item-top">
              <div class="schedule-item-title-wrap">
                <span class="schedule-emoji">🔔</span>
                <span class="schedule-title-text">To'lov eslatmalari</span>
              </div>
            </div>
            <div class="schedule-action-row">
              <span class="schedule-action-desc">Oylik to'lov muddati o'tgan...</span>
              <button class="btn-schedule-action-pill" onclick="window.app.showToast('SMS eslatmalar yuborildi!', 'success')">
                SMS yuborish
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  `;
}

