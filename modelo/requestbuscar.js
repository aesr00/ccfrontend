export default async function requestBuscar(cedula) {
    const res = await fetch(`https://d8dd269c-0af0-403c-88f1-40ec1cd4e53c.mock.pstmn.io/buscar?cedula=${cedula}`)
  
    return res
  
  
  }