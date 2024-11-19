import * as React from "react"
import {
  AppItem,
  Hamburger,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
} from "@fluentui/react-nav-preview"

import {
  Tooltip,
  makeStyles,
  tokens,
  Button,
  DrawerProps,
  SearchBox,
  Field,
  Switch,
} from "@fluentui/react-components"
import {
  bundleIcon,
  PersonCircle32Regular,
  Home20Regular,
  BinRecycle20Filled,
  HardDrive20Regular,
  Folder20Regular,
  Home20Filled,
  Folder20Filled,
  HardDrive20Filled,
  FolderPeople20Filled,
  FolderPeople20Regular,
  Clock20Filled,
  Clock20Regular,
} from "@fluentui/react-icons"
import { Link } from "react-router-dom"
import { useAppAuth } from "@/context/authContext"

const HomeIcon = bundleIcon(Home20Filled, Home20Regular)
const FolderIcon = bundleIcon(Folder20Filled, Folder20Regular)
const HardDriveIcon = bundleIcon(HardDrive20Filled, HardDrive20Regular)
const FolderSharedIcon = bundleIcon(FolderPeople20Filled, FolderPeople20Regular)
const RecentIcon = bundleIcon(Clock20Filled, Clock20Regular)
type DrawerType = Required<DrawerProps>["type"]

const LeftMenu = (props: Partial<NavDrawerProps>) => {
  const { handleSignIn, handleLogout, authState } = useAppAuth()

  const [isOpen, setIsOpen] = React.useState(true)
  const [enabledLinks, setEnabledLinks] = React.useState(true)
  const [type, setType] = React.useState<DrawerType>("inline")
  const [isMultiple, setIsMultiple] = React.useState(true)

  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </Tooltip>
    )
  }

  return (
    <NavDrawer
      defaultSelectedValue="2"
      defaultSelectedCategoryValue=""
      open={isOpen}
      type={type}
      multiple={isMultiple}
    >
      <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>

      <NavDrawerBody>
        <AppItem icon={<PersonCircle32Regular />}>
          <Link to="/">
            {authState.isAuthenticated
              ? authState.profile.given_name
              : "Đăng nhập đi"}
          </Link>
        </AppItem>
        <NavItem icon={<HomeIcon />} value="1">
          Trang chủ
        </NavItem>
        <NavSectionHeader>Quản lý tài liệu</NavSectionHeader>
        <NavItem icon={<FolderIcon />} value="2">
          Tài liệu của tôi
        </NavItem>
        <NavItem icon={<HardDriveIcon />} value="3">
          Bộ nhớ dùng chung
        </NavItem>
        <NavItem icon={<FolderSharedIcon />} value="4">
          Tài liệu được chia sẻ
        </NavItem>
        <NavSectionHeader></NavSectionHeader>
        <NavItem icon={<RecentIcon />} value="5">
          Gần đây
        </NavItem>
        <NavSectionHeader>Khác</NavSectionHeader>
        <NavItem icon={<BinRecycle20Filled />} value="6">
          Thùng rác
        </NavItem>
        <NavDivider />
        {!authState.isAuthenticated ? (
          <Button onClick={handleSignIn}>Đăng nhập</Button>
        ) : (
          <Button onClick={handleLogout}>Đăng xuất</Button>
        )}
      </NavDrawerBody>
    </NavDrawer>
  )
}

export default LeftMenu
