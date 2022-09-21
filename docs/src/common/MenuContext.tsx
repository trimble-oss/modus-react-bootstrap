import { Menu } from "./MenuConfiguration"
import React, { createContext } from "react"

export const MenuContext = createContext<NavigationInfo | null>(null)

export interface NavigationInfo {
  current: Menu
  menu: Menu[]
  all: Menu[]
}
