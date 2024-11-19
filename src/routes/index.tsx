import React from "react"
import { RouteObject, useRoutes } from "react-router-dom"
import privateRoutesConfig from "@/routes/privateRoutesConfig"
import publicRoutesConfig from "@/routes/publicRoutesConfig"
import PageNotFound from "@/pages/404page"

const errorRoutes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
]

const Content = () => {
  const config = [...privateRoutesConfig, ...publicRoutesConfig, ...errorRoutes]
  const routes = useRoutes(config)
  return routes
}

export default Content
