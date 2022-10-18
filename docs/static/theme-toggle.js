/**
 * theme-toggle.js
 * Modus React Bootstrap Guide
 * Copyright (c) 2022 Trimble Inc.
 */

const storageKey = "theme-preference",
  getColorPreference = () =>
    localStorage.getItem(storageKey)
      ? localStorage.getItem(storageKey)
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  setPreference = () => {
    localStorage.setItem(storageKey, theme.value), reflectPreference()
  },
  reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", theme.value),
      document
        .querySelector("#theme-toggle")
        ?.setAttribute("aria-label", theme.value)
  },
  theme = { value: getColorPreference() }
reflectPreference(),
  (window.onload = () => {
    reflectPreference()
  }),
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: e }) => {
      ;(theme.value = e ? "dark" : "light"), setPreference()
    })
