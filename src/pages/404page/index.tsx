import svg from "@/assets/404.svg"
import { useAppAuth } from "@/context/authContext"
import { Button } from "@fluentui/react-components"
import { useNavigate } from "react-router-dom"
import { Routes as Paths } from "@/shared/paths"

const PageNotFound = () => {
  const { authState } = useAppAuth()
  const navigate = useNavigate()
  const handleNavigate = () => {
    if (authState.isAuthenticated) {
      navigate(`/${Paths.drive}`)
    } else {
      navigate(`/${Paths.empty}`)
    }
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
        className="cont-404"
      >
        <img width={"60%"} src={svg} alt="svg" />
        <Button appearance="primary" onClick={handleNavigate}>
          Back to Home
        </Button>
      </div>
    </>
  )
}

export default PageNotFound
