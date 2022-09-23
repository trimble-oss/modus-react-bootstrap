import { createContext } from 'react'

const ThemeContext = createContext<{
  theme: string | null
  setTheme: (theme: string | null) => void
}>({
  theme:
    (typeof window !== 'undefined' &&
      window.document?.firstElementChild?.getAttribute('data-theme')) ||
    null,
  setTheme: function () {
    //do nothing
  },
})
export default ThemeContext
