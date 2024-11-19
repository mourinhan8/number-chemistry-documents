import { Basic } from "@/layouts/public"
import React from "react"
import { Navigate, RouteObject } from "react-router-dom"
const AuthUserResolver = React.lazy(
  () => import("@/resolvers/authUserResolver")
)
const DocumentViewer = React.lazy(() => import("@/components/DocumentViewer"))
const WelcomeHome = React.lazy(() => import("@/pages/welcomeHome"))
import { Routes as Paths } from "@/shared/paths"

const privateRoutesConfig: RouteObject[] = [
  {
    path: Paths.drive,
    element: (
      <AuthUserResolver>
        <Basic />
      </AuthUserResolver>
    ),
    children: [
      {
        path: Paths.empty,
        element: <Navigate to={Paths.home} replace />,
      },
      {
        path: Paths.home,
        element: <WelcomeHome />,
      },
      {
        path: Paths.byId,
        element: <DocumentViewer />,
      },
    ],
  },
]

export default privateRoutesConfig
