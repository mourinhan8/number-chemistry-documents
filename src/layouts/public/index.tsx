import { Button, DrawerProps } from "@fluentui/react-components"
import * as React from "react"
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview"

import {
  Label,
  Radio,
  RadioGroup,
  Switch,
  Tooltip,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components"
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  HeartPulse20Filled,
  HeartPulse20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  People20Filled,
  People20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  Person20Filled,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
  Person20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  bundleIcon,
  PersonCircle32Regular,
  Home20Regular,
  DocumentPerson20Regular,
  BinRecycle20Filled,
  HardDrive20Regular,
  Folder20Regular,
  Home20Filled,
  Folder16Filled,
  Folder20Filled,
  HardDrive20Filled,
  FolderPeople20Filled,
  FolderPeople20Regular,
  Clock20Filled,
  Clock20Regular,
  SignOut20Regular,
} from "@fluentui/react-icons"
import { Link, Outlet } from "react-router-dom"
import { useAuth } from "react-oidc-context"
import axios from "axios"
import { useAppAuth } from "@/context/authContext"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "100vh",
  },
  content: {
    width: "100%",
    padding: "10px",
    overflow: "auto",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
})

const Person = bundleIcon(Person20Filled, Person20Regular)
const HomeIcon = bundleIcon(Home20Filled, Home20Regular)
const FolderIcon = bundleIcon(Folder20Filled, Folder20Regular)
const HardDriveIcon = bundleIcon(HardDrive20Filled, HardDrive20Regular)
const FolderSharedIcon = bundleIcon(FolderPeople20Filled, FolderPeople20Regular)
const RecentIcon = bundleIcon(Clock20Filled, Clock20Regular)
const Dashboard = bundleIcon(Board20Filled, Board20Regular)
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular)
const EmployeeSpotlight = bundleIcon(
  PersonLightbulb20Filled,
  PersonLightbulb20Regular
)
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular)
const PerformanceReviews = bundleIcon(PreviewLink20Filled, PreviewLink20Regular)
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular)
const Interviews = bundleIcon(People20Filled, People20Regular)
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular)
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular)
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular)
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular)
const Reports = bundleIcon(
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular
)

type DrawerType = Required<DrawerProps>["type"]

export const Basic = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles()
  const { handleSignIn, handleLogout, authState } = useAppAuth()
  const typeLableId = useId("type-label")
  const linkLabelId = useId("link-label")
  const multipleLabelId = useId("multiple-label")

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
    <div className={styles.root}>
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
      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
        <Outlet />
      </div>
    </div>
  )
}
