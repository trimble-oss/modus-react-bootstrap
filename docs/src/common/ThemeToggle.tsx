import React, { useCallback, useContext, useEffect } from "react"
import ThemeContext from "./ThemeContext"

const storageKey = "theme-preference"

const ThemeToggle = props => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = useCallback(() => {
    const themeValue = theme === "dark" ? "light" : "dark"
    setTheme(themeValue)
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, themeValue)
      window.document?.firstElementChild?.setAttribute("data-theme", themeValue)
      window.document
        ?.querySelector("#theme-toggle")
        ?.setAttribute("aria-label", themeValue)
    }
  }, [theme, setTheme])

  // Replacement for a Mutation observer to observe the html's attribute 'data-theme' change
  // Required logic only for the first load
  useEffect(() => {
    const polling = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        window.document?.firstElementChild?.getAttribute("data-theme")
      ) {
        setTheme(window.document.firstElementChild.getAttribute("data-theme"))
        clearInterval(polling)
      }

      return () => {
        clearInterval(polling)
      }
    }, 25)
  }, [setTheme])

  return (
    <button
      type="button"
      className="theme-toggle bg-transparent border-0 float-end rounded-circle"
      id="theme-toggle"
      title="Toggles light & dark"
      aria-label="auto"
      aria-live="polite"
      onClick={handleThemeChange}
    >
      <svg
        className="sun-and-moon"
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <mask className="moon" id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
          <circle cx="24" cy="10" r="6" fill="#111" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#moon-mask)"
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  )
}

export default ThemeToggle
