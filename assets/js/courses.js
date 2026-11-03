(() => {
  const mount = document.querySelector('[data-course-groups]');
  if (!mount) return;
  const sourceBase = new URL('https://educatian.github.io/cv/');
  const sourceUrl = new URL('assets/teaching-design.generated.json', sourceBase);
  let liveData = null;
  let inFlight = null;
  let lastAttempt = 0;
  let lastSignature = '';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const isUnannounced = course => /^to\s*be\s*announced$/i.test(String(course.access || '').trim());
  const imageUrl = image => {
    if (!liveData) return image;
    const url = new URL(image, sourceBase);
    const version = liveData.imageVersions[image];
    if (version) url.searchParams.set('v', version);
    return url.href;
  };
  function validPayload(data) {
    if (!data || data.schemaVersion !== 1 || typeof data.revision !== 'string' || !data.revision || !data.catalog || !data.imageVersions || typeof data.imageVersions !== 'object' || Array.isArray(data.imageVersions)) return false;
    if (!Object.values(data.imageVersions).every(value => typeof value === 'string' && /^[a-f0-9]{16}$/.test(value))) return false;
    const validCourse = course => {
      if (!course || typeof course.code !== 'string' || !course.code.trim()) return false;
      const textFields = ['title','image','imageAlt','summary','subtitle','detail','status','year','url','access','institution','level','terms'];
      if (textFields.some(key => course[key] != null && typeof course[key] !== 'string')) return false;
      if (course.topics != null && (!Array.isArray(course.topics) || !course.topics.every(topic => typeof topic === 'string'))) return false;
      try {
        return ['image','url'].every(key => !course[key] || /^https?:$/.test(new URL(course[key], sourceBase).protocol));
      } catch { return false; }
    };
    for (const key of ['universityCourses', 'openCourses', 'plannedCourses']) {
      if (!Array.isArray(data.catalog[key]) || !data.catalog[key].every(validCourse)) return false;
      if (key !== 'universityCourses' && !data.catalog[key].every(course => typeof course.title === 'string' && course.title.trim())) return false;
    }
    return Array.isArray(data.developedCourses) && data.developedCourses.every(course => validCourse(course) && typeof course.title === 'string');
  }
  function render() {
    const catalog = liveData?.catalog || window.__cvTeachingDesign;
    if (!catalog) return;
    const developed = liveData ? liveData.developedCourses : window.__cvSiteData?.teaching?.developedCourses || [];
    const signature = JSON.stringify({catalog, developed, revision:liveData?.revision});
    if (signature === lastSignature) return;
    lastSignature = signature;
    const expanded = new Set([...mount.querySelectorAll('details[open]')].map(item => item.dataset.courseCode));
    const active = document.activeElement;
    const focusedCourse = mount.contains(active) ? active.closest('[data-course-code]')?.dataset.courseCode : null;
    const focusedElement = active?.tagName === 'A' ? 'a' : 'summary';
    const university = developed.map(course => ({...course, ...catalog.universityCourses.find(item => item.code === course.code), status:'Developed', year:course.terms}));
    const card = (course, kind) => `
      <article class="lab-course-card${kind === 'planned' ? ' is-planned' : ''}" data-course-code="${escape(course.code)}">
        ${course.image ? `<img class="lab-course-image" src="${escape(imageUrl(course.image))}" alt="${escape(course.imageAlt)}" width="960" height="540" loading="lazy" decoding="async">` : ''}
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
          ${course.url && !isUnannounced(course) ? `<a class="lab-course-link" href="${escape(course.url)}" target="_blank" rel="noopener noreferrer">Open course website <span aria-hidden="true">↗</span></a>` : ''}
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
    if (focusedCourse) {
      const card = [...mount.querySelectorAll('.lab-course-card')].find(item => item.dataset.courseCode === focusedCourse);
      card?.querySelector(focusedElement)?.focus({preventScroll:true});
    }
  }
  function sync() {
    if (inFlight) return inFlight;
    if (location.protocol === 'file:') return Promise.resolve(false);
    lastAttempt = Date.now();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    inFlight = (async () => {
      try {
        const response = await fetch(sourceUrl, {cache:'no-cache', signal:controller.signal});
        if (!response.ok) return false;
        const data = await response.json();
        if (!validPayload(data)) return false;
        liveData = data;
        render();
        return true;
      } catch {
        // Keep the last valid live record or the bundled course snapshot.
        return false;
      } finally {
        clearTimeout(timeout);
        inFlight = null;
      }
    })();
    return inFlight;
  }
  const refresh = () => {
    if (!document.hidden && Date.now() - lastAttempt >= 10000) sync();
  };
  window.__addieCourses = {render, sync, getSyncState:() => ({source:liveData ? 'personal' : 'bundled', revision:liveData?.revision || null})};
  render();
  sync();
  window.addEventListener('focus', refresh);
  window.addEventListener('online', () => { if (!document.hidden) sync(); });
  document.addEventListener('visibilitychange', refresh);
  setInterval(refresh, 5 * 60 * 1000);
})();
