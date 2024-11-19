import { useAppAuth } from "@/context/authContext"
import { useAuth } from "react-oidc-context"

export default function WelcomeHome() {
  const { authState } = useAppAuth()
  const auth = useAuth()
  return <div>Hello {authState?.profile?.given_name} from BCTT with &lt;3</div>
}
