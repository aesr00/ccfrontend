export default async function requestBuscar(cedula) {
    const res = await fetch(`https://localhost:3000/buscar?cedula=${cedula}`)
  
    return res
  
  
  }