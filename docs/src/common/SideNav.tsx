import React from 'react'
import { useContext } from 'react'
import { Nav } from '../../../src'

import { Menu } from './MenuConfiguration'
import { MenuContext } from './MenuContext'

interface NavSectionProps {
  activeMenuKey?: string
  items?: Menu[]
}
function noop() {
  // do nothing
}
const NavSection: React.FC<NavSectionProps> = ({ activeMenuKey, items }) => {
  return (
    <>
      {items && (
        <Nav activeKey={activeMenuKey} as='ul' onSelect={noop} className='d-block'>
          {items.map((item) => {
            const openInNewTab = item.path?.startsWith('http')
              ? {
                  target: '_blank',
                  rel: 'noopener',
                }
              : {}
            return (
              <Nav.Item key={item.key} as='li'>
                <Nav.Link
                  active={item.key === activeMenuKey}
                  href={item.path}
                  className='text-dark'
                  {...openInNewTab}
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            )
          })}
        </Nav>
      )}
    </>
  )
}

const SideNav: React.FC<{ className: string }> = ({ className }) => {
  const { current, menu } = useContext(MenuContext) || {}

  return (
    <div className={className}>
      <NavSection activeMenuKey={current?.key} items={menu} />
    </div>
  )
}

export default SideNav
