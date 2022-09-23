import { createContext } from 'react'
import { Menu } from './MenuConfiguration'

export const MenuContext = createContext<NavigationInfo | null>(null)

export interface NavigationInfo {
  current?: Menu
  menu?: Menu[]
  all?: Menu[]
}
