export default async function requestCrear(cedula,nombre,apellido) {
    const res = await fetch(`https://8452e698-8322-45e9-9a96-ec07e72c487b.mock.pstmn.io//crear?cedula=${cedula}
      &nombre=${nombre}&apellido=${apellido}`)
  
    return res
  
  
  }