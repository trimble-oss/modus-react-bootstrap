import React from "react"
import { useContext } from "react"
import { Nav } from "../../../src"

import { Menu } from "./MenuConfiguration"
import { MenuContext } from "./MenuContext"

interface NavSectionProps {
  activeMenuKey: string
  items: Menu[]
}
function NavSection({ activeMenuKey, items }: NavSectionProps) {
  return (
    <>
      {items && (
        <Nav
          activeKey={activeMenuKey}
          as="ul"
          onSelect={() => {}}
          className="d-block"
        >
          {items.map(item => (
            <Nav.Item key={item.key} as="li">
              <Nav.Link
                active={item.key == activeMenuKey}
                href={item.path}
                className="text-dark"
              >
                {item.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      )}
    </>
  )
}

const SideNav = ({ ...props }) => {
  const { current, menu } = useContext(MenuContext)

  return (
    <div {...props} className="sticky-top sticky-offset border-bottom">
      <NavSection activeMenuKey={current.key} items={menu} />
    </div>
  )
}

export default SideNav
