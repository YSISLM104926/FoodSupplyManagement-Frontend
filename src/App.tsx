
import { Toaster } from "sonner"
import MainLayout from "./components/layout/MainLayout"


function App() {
  
  return (
    <div style={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <MainLayout/>
      <Toaster/>
    </div>
  )
}

export default App
