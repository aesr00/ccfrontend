import React from "react"
import requestEliminar from "@/modelo/requesteliminar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function controlEliminar(cedula) {

    try {
      const respuesta = await requestEliminar(cedula)
      if (respuesta.status === 200) {
  
        toast("eliminado")
  
      }if (respuesta.status === 404) {
          toast("hubo un error intente de nuevo")
        } else {
  
  
        toast("hubo un error intente de nuevo")
      }
    }
    catch (error) {
      toast("hubo un error intente de nuevo")
  
    }
  
    <ToastContainer
      position="top-center"
      autoClose={7000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  }