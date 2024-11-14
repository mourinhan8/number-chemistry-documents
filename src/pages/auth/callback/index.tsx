import { useAuth } from "react-oidc-context"
import { useNavigate } from "react-router-dom"

const CallbackAuth = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>
  }

  if (auth.isAuthenticated) {
    navigate("/home")
  } else {
    navigate("/")
  }

  return <div>Hello</div>
}

export default CallbackAuth
