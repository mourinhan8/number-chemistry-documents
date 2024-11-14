import { useAppAuth } from "@/context/authContext"
import { Button } from "@fluentui/react-components"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
  const { handleSignIn, authState } = useAppAuth()
  const navigate = useNavigate()
  return (
    <div>
      <h1>WELCOME</h1>
      {authState.isAuthenticated ? (
        <Button onClick={() => navigate("/home")} appearance="primary">
          Đi đến kho lưu trữ
        </Button>
      ) : (
        <Button onClick={handleSignIn} appearance="primary">
          Đăng nhập để sử dụng kho lưu trữ
        </Button>
      )}
    </div>
  )
}

export default Welcome
