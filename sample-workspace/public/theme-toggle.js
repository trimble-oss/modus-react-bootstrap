const storageKey = 'theme-preference',
  onClick = () => {
    (theme.value = 'light' === theme.value ? 'dark' : 'light'), setPreference();
  },
  getColorPreference = () =>
    localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey)
      : window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'dark'
      : 'light',
  setPreference = () => {
    localStorage.setItem(storageKey, theme.value), reflectPreference();
  },
  reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value),
      document
        .querySelector('#theme-toggle')
        ?.setAttribute('aria-label', theme.value);
  },
  theme = { value: getColorPreference() };
reflectPreference(),
  (window.onload = () => {
    reflectPreference();
    themeToggle = () => {
      let t = document.querySelector('#theme-toggle');
      t.addEventListener('click', onClick);
      t.disabled = !1;
    };
    let e = document.querySelector('#theme-toggle');
    if (e) {
      themeToggle();
    } else setTimeout(themeToggle(), 2000);
  }),
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: e }) => {
      (theme.value = e ? 'dark' : 'light'), setPreference();
    });
