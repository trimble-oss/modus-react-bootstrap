import React, { useCallback, useMemo, useState } from 'react'
import * as PropTypes from 'prop-types'

import Footer from '../common/Footer'
import Header from '../common/Header'
import { MenuContext, NavigationInfo } from '../common/MenuContext'
import GetNavigationMenu from '../common/MenuConfiguration'
import '../assets/css/main.scss'
import SEO from '../seo'
import Banner from '../common/Banner'
import ThemeContext from '../common/ThemeContext'
import { ModusIconsScripts } from '../common/ExternalDependencyHelper'

const propTypes = {
  location: PropTypes.object.isRequired,
  banner: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

interface LayoutProps {
  location: any
  banner?: boolean
  title?: string
  subtitle?: string
  children?: any
}

const CreateMenuContext = (routeInfo: string): NavigationInfo => {
  const allMenus = GetNavigationMenu()
  const routeItems = routeInfo.split('/')?.filter((item) => item)
  const defaultContext = { all: allMenus }

  if (!routeItems || !routeItems.length) return defaultContext

  const parent = allMenus.find((menu) => menu.key === routeItems[0])
  if (!parent) return defaultContext

  const activeMenu =
    (routeItems.length > 1 && parent.children?.find((x) => x.key === routeItems[1])) || parent
  return { current: activeMenu, menu: parent.children, all: allMenus }
}

const DefaultLayout: React.FC<LayoutProps> = ({ children, location, title, subtitle, banner }) => {
  const [theme, setTheme] = useState(null)
  const context = CreateMenuContext(location.pathname)
  const navigationMenu = context.all?.map(({ key, path, title }) => ({
    key,
    path,
    title,
  }))
  const pageTitle = title || (context.current && context.current.title)
  const pageSubtitle = subtitle || (context.current && context.current.subtitle)

  const handleThemeChange = useCallback(
    (value) => {
      setTheme(value)
    },
    [setTheme],
  )

  const themeContext = useMemo(
    () => ({ theme, setTheme: handleThemeChange }),
    [theme, handleThemeChange],
  )

  return (
    <MenuContext.Provider value={context}>
      <ThemeContext.Provider value={themeContext}>
        <SEO title={pageTitle} description={pageSubtitle} pathname={location.pathname} />
        <ModusIconsScripts />
        <Header activePage={context.current} navigationMenu={navigationMenu} />
        {banner && <Banner title={pageTitle} subtitle={pageSubtitle} />}
        {children}
        <Footer />
      </ThemeContext.Provider>
    </MenuContext.Provider>
  )
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
