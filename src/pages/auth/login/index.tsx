import React, { useEffect } from "react"
import LoginForm from "@/components/LoginForm"
import { useAppAuth } from "@/context/authContext"
import { useNavigate } from "react-router-dom"
import { Routes as Paths } from "@/shared/paths"

const LoginPage = () => {
  const { authState } = useAppAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate(`/${Paths.drive}/${Paths.home}`, { replace: true })
    }
  }, [authState.isAuthenticated])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #e0eafc, #cfdef3)",
      }}
    >
      <LoginForm />
    </div>
  )
}

export default LoginPage
