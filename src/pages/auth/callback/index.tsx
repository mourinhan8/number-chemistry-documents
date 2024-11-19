import { useEffect } from "react"
import { useAuth } from "react-oidc-context"
import { useNavigate } from "react-router-dom"
import { Routes as Paths } from "@/shared/paths"

const CallbackAuth = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(`/${Paths.drive}/${Paths.home}`, { replace: true })
    } else {
      navigate("/", { replace: true })
    }
  }, [auth.isAuthenticated])

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>
  }

  return <div>Hello</div>
}

export default CallbackAuth
