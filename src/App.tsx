import { ToastContainer } from "react-toastify"
import MainLayout from "./components/layout/MainLayout"


function App() {
  
  return (
    <div style={{
      maxWidth: '1440px',
      margin: 'auto',
    }}>
      <MainLayout/>
      <ToastContainer />
    </div>
  )
}

export default App
