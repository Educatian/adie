(() => {
  const mount = document.querySelector('[data-course-groups]');
  if (!mount) return;
  let lastSignature = '';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function render() {
    const catalog = window.__cvTeachingDesign;
    if (!catalog) return;
    const developed = window.__cvSiteData?.teaching?.developedCourses || [];
    const signature = JSON.stringify({catalog, developed});
    if (signature === lastSignature) return;
    lastSignature = signature;
    const expanded = new Set([...mount.querySelectorAll('details[open]')].map(item => item.dataset.courseCode));
    const university = developed.map(course => ({...course, ...catalog.universityCourses.find(item => item.code === course.code), status:'Developed', year:course.terms}));
    const card = (course, kind) => `
      <article class="lab-course-card${kind === 'planned' ? ' is-planned' : ''}" data-course-code="${escape(course.code)}">
        ${course.image ? `<img class="lab-course-image" src="${escape(course.image)}" alt="${escape(course.imageAlt)}" width="960" height="540" loading="lazy" decoding="async">` : ''}
        <div class="lab-course-body">
          <div class="lab-course-meta"><span>${escape(course.code)}</span><span class="lab-course-status">${escape(course.status)}${course.year ? ` · ${escape(course.year)}` : ''}</span></div>
          <h4>${escape(course.title)}</h4>
          ${course.subtitle ? `<p class="lab-course-subtitle">${escape(course.subtitle)}</p>` : ''}
          <p>${escape(course.summary)}</p>
          ${course.topics ? `<ul class="lab-course-topics" aria-label="Course themes">${course.topics.map(topic => `<li>${escape(topic)}</li>`).join('')}</ul>` : ''}
          <details class="lab-course-details" data-course-code="${escape(course.code)}" ${expanded.has(course.code) ? 'open' : ''}>
            <summary>Course details</summary>
            <p>${escape(course.detail || `${course.level}. Developed for ${course.institution} in ${course.terms}.`)}</p>
          </details>
          ${course.url ? `<a class="lab-course-link" href="${escape(course.url)}" target="_blank" rel="noopener noreferrer">Open course website <span aria-hidden="true">↗</span></a>` : ''}
          ${course.access ? `<p class="lab-course-access">Course access: <strong>${escape(course.access)}</strong></p>` : ''}
        </div>
      </article>`;
    const groups = [
      {key:'university',title:'University of Alabama courses',courses:university},
      {key:'open',title:'Open courseware',courses:catalog.openCourses},
      {key:'planned',title:'In development',courses:catalog.plannedCourses}
    ];
    const totals = document.querySelector('[data-course-totals]');
    if (totals) totals.innerHTML = [[university.length,'UA courses developed'],[catalog.openCourses.length,'open courses'],[catalog.plannedCourses.length,'planned course']].map(([count,label]) => `<span><strong>${count}</strong> ${escape(label)}</span>`).join('');
    mount.innerHTML = groups.map(group => `<section class="lab-course-group" aria-labelledby="courses-${group.key}-title"><h3 id="courses-${group.key}-title">${group.title}</h3><div class="lab-course-grid is-${group.key}" data-course-group="${group.key}">${group.courses.map(course => card(course,group.key)).join('')}</div></section>`).join('');
  }
  window.__addieCourses = {render};
  render();
})();
