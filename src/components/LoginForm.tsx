// LoginForm.js
import React, { useState } from "react"
import {
  Button,
  makeStyles,
  Subtitle1,
  Menu,
  MenuTrigger,
  MenuButtonProps,
  SplitButton,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components"
import LogoImg from "@/assets/logo.png"
import { useAppAuth } from "@/context/authContext"

const useStyles = makeStyles({
  container: {
    minHeight: "300px",
    width: "400px",
    padding: "20px",
    margin: "50px auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  splitButton: {
    width: "100%",
    marginTop: "10px",
  },
  primaryButton: {
    width: "100%",
  },
})

enum AuthMethod {
  sso = "sso",
  google = "google",
  facebook = "facebook",
}

const AuthMethodsText = {
  [AuthMethod.sso]: "Đăng nhập với TCU sso",
  [AuthMethod.google]: "Đăng nhập với Google",
  [AuthMethod.facebook]: "Đăng nhập với Facebook",
}

const LoginForm = () => {
  const styles = useStyles()
  const { handleSignIn } = useAppAuth()
  const [authMethod, setAuthMethod] = useState<AuthMethod>(AuthMethod.sso)

  const handleLogin = () => {
    switch (authMethod) {
      case "sso":
        return handleSignIn()
      default:
        alert("Phương thức chưa hoạt động")
        return
    }
  }

  const primaryActionButton = {
    onClick: handleLogin,
    className: styles.primaryButton,
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={LogoImg} alt="Microsoft Logo" style={{ height: "80px" }} />
        <Subtitle1 className={styles.title}>Đăng nhập</Subtitle1>
      </div>
      <Menu positioning="below-end">
        <MenuTrigger disableButtonEnhancement>
          {(triggerProps: MenuButtonProps) => (
            <SplitButton
              menuButton={triggerProps}
              primaryActionButton={primaryActionButton}
              className={styles.splitButton}
            >
              {AuthMethodsText[authMethod]}
            </SplitButton>
          )}
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            {Object.entries(AuthMethodsText).map(
              ([method, text], index: number) => (
                <MenuItem
                  key={index}
                  onClick={() => setAuthMethod(method as AuthMethod)}
                >
                  {text}
                </MenuItem>
              )
            )}
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  )
}

export default LoginForm
