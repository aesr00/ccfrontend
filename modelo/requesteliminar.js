export default async function requestEliminar(cedula) {
    const res = await fetch(`https://localhost:3000/eliminar?cedula=${cedula}`,{
      method: 'DELETE'})
  
    return res
  
  
  }