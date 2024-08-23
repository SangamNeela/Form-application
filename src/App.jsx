import { useState } from 'react'
import Form from './pages/form'
import FormContextProvider from './contextAPI/context'
import Response from './pages/Response'
import './App.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Form/>}/>
      <Route path="/response" element={<Response/>}/>
    </Route>
  )
)

function App() {

  

  return (
    <>
        <FormContextProvider>
        <RouterProvider router={router}/>
        </FormContextProvider>
    </>
  )
}

export default App
