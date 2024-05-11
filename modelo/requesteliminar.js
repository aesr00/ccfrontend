export default async function requestEliminar(cedula) {
    const res = await fetch(`https://8452e698-8322-45e9-9a96-ec07e72c487b.mock.pstmn.io//eliminar?cedula=${cedula}`)
  
    return res
  
  
  }