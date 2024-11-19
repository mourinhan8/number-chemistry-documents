import React from "react"
import { RouteObject } from "react-router-dom"
import { Routes as Paths } from "@/shared/paths"

const CallbackAuth = React.lazy(() => import("@/pages/auth/callback"))

const Welcome = React.lazy(() => import("@/pages/welcome"))
const LoginPage = React.lazy(() => import("@/pages/auth/login"))

const publicRoutesConfig: RouteObject[] = [
  {
    path: Paths.empty,
    element: <Welcome />,
  },
  {
    path: Paths.login,
    element: <LoginPage />,
  },
  {
    path: Paths.identifyCallback,
    element: <CallbackAuth />,
  },
]

export default publicRoutesConfig
