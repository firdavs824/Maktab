// Sinflar va o'qituvchilar view with full i18n support & clean single-icon action buttons
import { t, translateSubject } from '../i18n.js';

export function renderClassesView(data) {
  const classes = data.classes || [];
  const teachers = data.teachers || [];

  return `
    <div class="page-header">
      <div class="header-title-block">
        <h2>${t('classesTitle')}</h2>
        <p>${t('academicYear')}</p>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="window.app.openModal('addTeacher')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${t('addTeacherBtn')}</span>
        </button>
        <button class="btn btn-primary" onclick="window.app.openModal('addClass')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${t('addClassBtn')}</span>
        </button>
      </div>
    </div>

    <!-- Section: Sinflar -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h3 class="section-title" style="margin: 0;">${t('classesSection')}</h3>
      <span style="font-size: 12.5px; color: var(--text-muted);">${t('classesHint')}</span>
    </div>
    <div class="classes-grid">
      ${classes.map(c => {
        const percent = Math.min(100, Math.round((c.currentStudents / c.capacity) * 100));
        const roomStr = c.room ? (c.room.replace(/\D/g, '') ? `${c.room.replace(/\D/g, '')}-xona` : c.room) : '12-xona';
        return `
          <div class="student-class-card" style="cursor: pointer;" onclick="window.app.switchTab('students'); window.app.selectStudentClass('${c.name}')">
            <div class="class-card-top" style="justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div class="class-card-badge">${c.name}</div>
                <div class="class-card-meta">
                  <div class="class-card-title">${c.name} Sinf</div>
                  <div class="class-card-sub">${roomStr} • ${c.teacherName || t('homeroomTeacherLabel')}</div>
                </div>
              </div>
              <button 
                type="button" 
                class="btn-close-modal" 
                style="width: 24px; height: 24px; padding: 2px; color: #ef4444; border-radius: 6px; border: none; background: transparent; cursor: pointer;"
                onclick="event.stopPropagation(); window.app.deleteClass('${c.id}')"
                title="${t('deleteClassTitle')}"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            
            <div class="class-card-stats-row">
              <span class="class-card-stats-label">${t('studentsInClass')}</span>
              <span class="class-card-stats-val">${c.currentStudents} / ${c.capacity}</span>
            </div>

            <div class="class-card-progress-bar">
              <div class="class-card-progress-fill" style="width: ${percent}%;"></div>
            </div>

            <button class="class-card-enter-btn">
              <span>Sinfga kirish</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Section: O'qituvchilar -->
    <h3 class="section-title">${t('teachersSection')}</h3>
    <div class="table-card">
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>${t('teacherColName')}</th>
              <th>${t('teacherColSubject')}</th>
              <th>${t('teacherColClasses')}</th>
              <th>${t('teacherColHours')}</th>
              <th style="text-align: right;">${t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${teachers.map(tch => `
              <tr>
                <td>
                  <div class="cell-user">
                    <div class="cell-user-avatar">${tch.initials}</div>
                    <div>
                      <div class="cell-user-name">${tch.name}</div>
                      ${tch.phone ? `<div style="font-size: 11px; color: var(--text-muted);">${tch.phone}</div>` : ''}
                    </div>
                  </div>
                </td>
                <td style="color: var(--text-secondary);">${translateSubject(tch.subject)}</td>
                <td style="color: var(--text-secondary);">${tch.classes}</td>
                <td style="font-weight: 600; color: var(--text-main);">${tch.weeklyHours} ${t('hoursUnit')}</td>
                <td style="text-align: right;">
                  <button 
                    class="btn-card-action edit" 
                    style="display: inline-flex; padding: 4px 8px; font-size: 12px; color: #ef4444;"
                    onclick="window.app.deleteTeacher('${tch.id}')"
                    title="${t('deleteTeacherTitle')}"
                  >
                    ${t('delete')}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
