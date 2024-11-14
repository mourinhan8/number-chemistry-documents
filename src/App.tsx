import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import Content from "@/routes"
import { BrowserRouter as Router } from "react-router-dom"
import { AuthProvider as OIDCAuthProvider } from "react-oidc-context"
import { AuthProvider as AppAuthProvier } from "./context/authContext"
import { WebStorageStateStore } from "oidc-client-ts"

const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY,
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
  client_secret: import.meta.env.VITE_OIDC_CLIENT_SECRET,
  redirect_uri: `${window.location.origin}/${
    import.meta.env.VITE_OIDC_REDIRECT_PATH
  }`,
  response_type: "code",
  scope: import.meta.env.VITE_OIDC_SCOPE,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  // ...
}

function App() {
  return (
    <OIDCAuthProvider {...oidcConfig}>
      <Router>
        <AppAuthProvier>
          <FluentProvider theme={webLightTheme}>
            <Content />
          </FluentProvider>
        </AppAuthProvier>
      </Router>
    </OIDCAuthProvider>
  )
}

export default App
