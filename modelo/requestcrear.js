export default async function requestCrear(ced,nom,ape) {
  const persona = {
    cedula: ced,
    nombre: nom,
    apellido: ape
  }
    const res = await fetch(`https://localhost:3000//crear`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(persona)
    })
  
    return res
  
  
  }