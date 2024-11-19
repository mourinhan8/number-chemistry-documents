import { DrawerProps } from "@fluentui/react-components"
import * as React from "react"
import {
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerProps,
  NavItem,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview"

type DrawerType = Required<DrawerProps>["type"]

const RightMenu = (props: Partial<NavDrawerProps>) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [enabledLinks, setEnabledLinks] = React.useState(true)
  const [type, setType] = React.useState<DrawerType>("inline")
  const [isMultiple, setIsMultiple] = React.useState(true)

  return (
    <NavDrawer
      defaultSelectedValue="2"
      defaultSelectedCategoryValue=""
      open={isOpen}
      type={type}
      multiple={isMultiple}
      style={{ height: "100%", width: "100%" }}
    >
      <NavDrawerBody>
        <NavItem value="1">Tất cả văn bản</NavItem>
        <NavItem value="2">Văn bản mới</NavItem>
        <NavCategory value="3">
          <NavCategoryItem value="4">Văn bản vi phạm pháp luật</NavCategoryItem>
          <NavSubItemGroup>
            <NavSubItem value="5">Cơ quan ban hành</NavSubItem>
            <NavSubItem value="6">Loại văn bản</NavSubItem>
          </NavSubItemGroup>
        </NavCategory>
        <NavItem value="7">Văn bản hợp nhất</NavItem>
        <NavItem value="8">Văn bản chỉ đạo điều đào</NavItem>
        <NavItem value="9">Nghị quyết của chính phủ</NavItem>
        <NavItem value="10">Nghị quyết phiên họp của chính phủ</NavItem>
        <NavItem value="11">Báo cáo của chính phủ</NavItem>
      </NavDrawerBody>
    </NavDrawer>
  )
}

export default RightMenu
