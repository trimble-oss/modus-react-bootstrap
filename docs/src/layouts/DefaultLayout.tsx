import React, { useCallback, useEffect, useMemo, useState } from "react"
import * as PropTypes from "prop-types"

import Footer from "../common/Footer"
import Header from "../common/Header"
import { MenuContext, NavigationInfo } from "../common/MenuContext"
import GetNavigationMenu from "../common/MenuConfiguration"
import "../assets/css/main.scss"
import SEO from "../seo"
import Banner from "../common/Banner"
import ThemeContext from "../common/ThemeContext"

const propTypes = {
  location: PropTypes.object.isRequired,
  banner: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

const CreateMenuContext = (routeInfo: string): NavigationInfo => {
  const allMenus = GetNavigationMenu()
  const routeItems = routeInfo.split("/")?.filter(item => item)
  const defaultContext = { current: null, menu: null, all: allMenus }

  if (!routeItems || !routeItems.length) return defaultContext

  let parent = allMenus.find(menu => menu.key == routeItems[0])
  if (!parent) return defaultContext

  let activeMenu = parent
  if (routeItems.length > 1 && parent.children) {
    activeMenu = parent.children.find(function (x) {
      return x.key == routeItems[1]
    })
  }
  return { current: activeMenu, menu: parent.children, all: allMenus }
}

const DefaultLayout = ({ children, location, title, subtitle, banner }) => {
  const [theme, setTheme] = useState(null)
  const context = CreateMenuContext(location.pathname)
  const navigationMenu = context.all.map(({ key, path, title }) => ({
    key,
    path,
    title,
  }))
  const pageTitle = title || (context.current && context.current.title)
  const pageSubtitle = subtitle || (context.current && context.current.subtitle)

  const handleThemeChange = useCallback(
    value => {
      setTheme(value)
    },
    [setTheme]
  )

  const themeContext = useMemo(
    () => ({ theme, setTheme: handleThemeChange }),
    [theme, handleThemeChange]
  )

  return (
    <MenuContext.Provider value={context}>
      <ThemeContext.Provider value={themeContext}>
        <SEO
          title={pageTitle}
          description={pageSubtitle}
          pathname={location.pathname}
        />
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
