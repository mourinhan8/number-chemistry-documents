import DocViewer, { PDFRenderer } from "@cyntler/react-doc-viewer"
import { useParams } from "react-router-dom"
import ExamplePdf from "@/example_files/sample.pdf"
import { useAuth } from "react-oidc-context"

const DocumentViewer = () => {
  const { id } = useParams()
  const auth = useAuth()
  console.log(auth)
  const docs = [{ uri: ExamplePdf, type: "application/pdf" }]
  return (
    <>
      <div>{id}</div>
      <DocViewer documents={docs} pluginRenderers={[PDFRenderer]} />
    </>
  )
}

export default DocumentViewer
