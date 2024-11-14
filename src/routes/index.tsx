import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
  useRoutes,
} from "react-router-dom"
import { Basic } from "@/layouts/public"
import DocumentViewer from "@/components/DocumentViewer"
import CallbackAuth from "@/pages/auth/callback"
import AuthUserResolver from "@/routes/resolvers/authUserResolver"
import Welcome from "@/pages/welcome"

const privateRoutesConfig: RouteObject[] = [
  {
    path: "/home",
    element: (
      <AuthUserResolver>
        <Basic />
      </AuthUserResolver>
    ),
    children: [
      {
        path: ".",
        element: <div>Home</div>,
      },
      {
        path: ":id",
        element: <DocumentViewer />,
      },
    ],
  },
]

const publicRoutesConfig: RouteObject[] = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/api/auth/callback/identity-server4",
    element: <CallbackAuth />,
  },
]

const errorRoutes = [
  {
    path: "*",
    element: <div>404</div>,
  },
]

const Content = () => {
  const config = [...privateRoutesConfig, ...publicRoutesConfig, ...errorRoutes]
  const routes = useRoutes(config)
  return routes
}

export default Content
