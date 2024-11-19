import * as React from "react"
import { Hamburger, NavDrawerProps } from "@fluentui/react-nav-preview"

import {
  Tooltip,
  makeStyles,
  tokens,
  SearchBox,
  Field,
  Switch,
} from "@fluentui/react-components"
import { Outlet } from "react-router-dom"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "100vh",
  },
  content: {
    width: "100%",
    padding: "0 10px",
    height: "100vh",
    overflow: "auto",
    backgroundColor: tokens.colorNeutralBackground2,
    display: "flex",
    flexDirection: "column",
  },
  centerContent: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexGrow: 1,
    paddingTop: "10px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: tokens.colorNeutralBackground2,
    padding: "10px 0", // Optional padding if needed for spacing
  },
  searchInput: {
    width: "100%",
  },
  rightBarColumn: {
    backgroundColor: tokens.colorBrandBackground2,
    flexShrink: 0,
    width: "300px",
  },
  contentColumn: {
    backgroundColor: tokens.colorBrandBackground,
    flexGrow: 1,
    flexShrink: 1,
    marginRight: "10px",
  },
})

export const Basic = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles()

  const [isOpen, setIsOpen] = React.useState(true)

  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </Tooltip>
    )
  }

  return (
    <div className={styles.root}>
      <LeftMenu />
      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
        <div className={styles.searchContainer}>
          <SearchBox
            className={styles.searchInput}
            placeholder="Search everything"
          />
        </div>
        <div className={styles.centerContent}>
          <div className={styles.contentColumn}>
            <Outlet />
          </div>
          <div className={styles.rightBarColumn}>
            <RightMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
