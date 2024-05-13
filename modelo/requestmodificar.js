export default async function requestModificar(ced,nom,ape) {
  const persona = {
    cedula: ced,
    nombre: nom,
    apellido: ape
  }
    const res = await fetch(`https://localhost:3000/modificar?cedula=${ced}`,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(persona)
    })
  
    return res
  
  
  }