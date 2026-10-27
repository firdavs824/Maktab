// Davomat (Attendance) view with full i18n support
import { t, translateStatus } from '../i18n.js';

export function renderAttendanceView(data, subTab = 'classes') {
  const classes = data.classes || [];

  return `
    <div class="page-header">
      <div class="header-title-block">
        <h2>${t('attendanceTitle')}</h2>
        <p>${t('todayDate')}</p>
      </div>
      <div class="header-actions">
        <div class="segmented-control">
          <button 
            class="segmented-btn ${subTab === 'classes' ? 'active' : ''}"
            onclick="window.app.switchAttendanceSubTab('classes')"
          >
            ${t('tabClasses')}
          </button>
          <button 
            class="segmented-btn ${subTab === 'tutors' ? 'active' : ''}"
            onclick="window.app.switchAttendanceSubTab('tutors')"
          >
            ${t('tabTutors')}
          </button>
        </div>
      </div>
    </div>

    ${subTab === 'classes' ? `
      <div style="margin-bottom: 16px;">
        <h3 class="section-title" style="margin-bottom: 2px;">${t('tabClasses')}</h3>
        <p style="font-size: 13px; color: var(--text-muted);">${t('selectClassForAttendance')}</p>
      </div>

      <div class="attendance-grid">
        ${classes.map(c => {
          const isMarked = c.attendanceStatus === 'Belgilangan';
          const percent = c.todayTotal > 0 ? Math.round((c.todayPresent / c.todayTotal) * 100) : 0;
          const statusText = translateStatus(c.attendanceStatus);

          return `
            <div class="attendance-card" onclick="window.app.openAttendanceModal('${c.id}')">
              <div class="class-card-top">
                <span class="class-name">${c.name}</span>
                <span class="status-pill ${isMarked ? 'status-marked' : 'status-unmarked'}">
                  ${statusText}
                </span>
              </div>

              <div class="class-teacher-row">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                  <span class="teacher-meta-label">${t('homeroomTeacherLabel')}</span>
                  <span class="teacher-meta-name">${c.teacherName}</span>
                  <span style="font-size: 11.5px; color: var(--text-light);">${c.room}</span>
                </div>
              </div>

              <div class="class-card-bottom" style="margin-top: 6px;">
                <div class="class-capacity-info">
                  <span class="capacity-label">${t('cameToday')}</span>
                  <span class="capacity-val" style="color: ${isMarked ? 'var(--text-main)' : '#94a3b8'};">
                    ${c.todayPresent} / ${c.todayTotal}
                  </span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width: ${percent}%;"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    ` : `
      <!-- Repetitorlar (Extracurricular / Tutoring) Subtab -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h3 class="section-title" style="margin-bottom: 2px;">${t('tutorsAttendanceTitle')}</h3>
          <p style="font-size: 13px; color: var(--text-muted);">${t('tutorsAttendanceSub')}</p>
        </div>
        <button class="btn btn-primary" onclick="window.app.openModal('addTutorCourse')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>${t('addTutorCourseBtn')}</span>
        </button>
      </div>

      <div class="attendance-grid">
        ${(data.tutorCourses && data.tutorCourses.length > 0) ? data.tutorCourses.map(course => {
          const studentCount = (course.studentIds || []).length;
          const isMarked = course.attendanceStatus === 'Belgilangan';
          const todayPresent = course.todayPresent != null ? course.todayPresent : (isMarked ? studentCount : 0);
          const percent = studentCount > 0 ? Math.round((todayPresent / studentCount) * 100) : 0;
          return `
            <div class="attendance-card" onclick="window.app.openTutorAttendanceModal('${course.id}')" style="cursor: pointer;">
              <div class="class-card-top">
                <span class="class-name">${course.name}</span>
                <span class="status-pill ${isMarked ? 'status-marked' : 'status-unmarked'}">
                  ${isMarked ? t('marked') : t('notMarked')}
                </span>
              </div>
              <div style="font-size: 12.5px; color: var(--text-muted); display: flex; flex-direction: column; gap: 3px; margin: 4px 0 8px 0;">
                <span><strong>${t('instructor')}:</strong> ${course.instructor || '—'}</span>
                <span>📅 ${course.days || ''} ${course.time ? `(${course.time})` : ''}</span>
                ${course.fee ? `<span style="color: var(--primary); font-weight: 600;">💰 ${Number(course.fee).toLocaleString()} ${t('som')}</span>` : ''}
              </div>
              <div class="class-card-bottom" style="margin-top: 6px;">
                <div class="class-capacity-info">
                  <span class="capacity-label">${t('cameToday')}</span>
                  <span class="capacity-val" style="color: ${isMarked ? 'var(--text-main)' : '#94a3b8'};">
                    ${todayPresent} / ${studentCount} ${t('studentsUnitAtt')}
                  </span>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width: ${percent}%;"></div></div>
              </div>
            </div>
          `;
        }).join('') : `
          <div class="empty-students-box" style="grid-column: 1 / -1;">
            <p>${t('noTutorStudentsFound')}</p>
            <button class="btn btn-primary" onclick="window.app.openModal('addTutorCourse')">
              ${t('addTutorCourseBtn')}
            </button>
          </div>
        `}
      </div>
    `}
  `;
}
