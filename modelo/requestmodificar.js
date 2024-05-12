export default async function requestModificar(ced,nom,ape) {
  const persona = {
    cedula: ced,
    nombre: nom,
    apellido: ape
  }
    const res = await fetch(`https://d8dd269c-0af0-403c-88f1-40ec1cd4e53c.mock.pstmn.io//modificar?cedula=${ced}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(persona)
    })
  
    return res
  
  
  }