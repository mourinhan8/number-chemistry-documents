import { PropsWithChildren, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "oidc-client-ts"
import { APP_AUTH_KEY } from "@/shared/constants"

function getUser() {
  const oidcStorage = localStorage.getItem(APP_AUTH_KEY)
  if (!oidcStorage) {
    return null
  }

  return User.fromStorageString(oidcStorage)
}

const AuthUserResolver = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
  const user = getUser()
  const token = user?.access_token
  useEffect(() => {
    if (!token) {
      navigate("/")
    }
    // TODO Check expires token
  }, [token])

  return children
}

export default AuthUserResolver
