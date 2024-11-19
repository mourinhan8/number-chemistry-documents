import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import Content from "@/routes"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider as OIDCAuthProvider } from "react-oidc-context"
import { AuthProvider as AppAuthProvider } from "./context/authContext"
import { WebStorageStateStore } from "oidc-client-ts"
import { Suspense } from "react"

const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  client_secret: import.meta.env.VITE_OIDC_CLIENT_SECRET,
  redirect_uri: `${window.location.origin}/${
    import.meta.env.VITE_OIDC_REDIRECT_PATH
  }`,
  response_type: "code",
  scope: import.meta.env.VITE_OIDC_SCOPE,
  // Save identify information in local storage
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  // ...
}

function App() {
  return (
    <OIDCAuthProvider {...oidcConfig}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <AppAuthProvider>
            <FluentProvider theme={webLightTheme}>
              <Content />
            </FluentProvider>
          </AppAuthProvider>
        </Suspense>
      </Router>
    </OIDCAuthProvider>
  )
}

export default App
