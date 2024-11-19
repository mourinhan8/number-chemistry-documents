import axios from "axios"
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react"
import { useAuth } from "react-oidc-context"
import { useNavigate } from "react-router-dom"
import { Routes as Paths } from "@/shared/paths"

type AuthProviderProps = PropsWithChildren

type AuthState = {
  isAuthenticated: boolean
  profile: any
}

type AuthAction = { type: "USER_LOGIN"; payload: any } | { type: "USER_LOGOUT" }

type Dispatch = (action: AuthAction) => void

type AuthContextType = {
  state: AuthState
  dispatch: Dispatch
}

export const AuthContext = createContext<AuthContextType | null>(null)

function reducer(state: any, action: any) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, profile: action.payload, isAuthenticated: true }
    case "USER_LOGOUT":
      return { ...state, profile: null, isAuthenticated: false }
    default:
      return state
  }
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  profile: null,
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState)
  const auth = useAuth()
  const navigate = useNavigate()

  console.log(auth)

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate(Paths.login, { replace: true })
    }
  }, [auth.isAuthenticated])

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider")
  }
  return context
}

export const useAppAuth = () => {
  const { state, dispatch } = useAuthContext()
  const navigate = useNavigate()
  const { isAuthenticated, signinPopup, removeUser, user, isLoading } =
    useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      dispatch({
        type: "USER_LOGIN",
        payload: user?.profile,
      })
    }

    if (!isAuthenticated) {
      dispatch({
        type: "USER_LOGOUT",
      })
    }
  }, [isAuthenticated])

  const handleSignIn = async () => {
    await signinPopup()
    navigate(`/${import.meta.env.VITE_OIDC_REDIRECT_PATH}`)
  }

  const handleLogout = async () => {
    removeUser()
    try {
      await axios.get(`http://authapi.tasp.vn/api/account/logout`)
      window.location.href = `http://authapi.tasp.vn/api/account/logout`
    } catch (error) {
      console.log(error)
    } finally {
      navigate("/")
    }
  }

  return {
    handleSignIn,
    handleLogout,
    authState: state,
    isLoading,
  }
}
