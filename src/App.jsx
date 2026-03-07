
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routers/Router/Router'
import { ToastContainer } from 'react-toastify'
import CartPopup from './cart/CartPopup'


function App() {

  return (
    <>
    
    <div className='max-w-[1440px] mx-auto '>
    
        <ToastContainer position="top-center" />
        <CartPopup />
        
      <RouterProvider router={router} ></RouterProvider>
    
    </div>
    
    </>
  )
}

export default App
