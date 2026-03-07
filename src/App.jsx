
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routers/Router/Router'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
    
    <div className='max-w-[1440px] mx-auto '>
    
        <ToastContainer position="top-center" />
        
      <RouterProvider router={router} ></RouterProvider>
    
    </div>
    
    </>
  )
}

export default App
