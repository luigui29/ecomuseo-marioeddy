// URL base para la API
const urlBase = import.meta.env.VITE_URL_BASE

// Funciones de API que extraen el array de datos de la respuesta
export const getAutores = async () => {
  try {
    const response = await fetch(`${urlBase}/authors/list`)
    const result = await response.json()
    
    // Verificamos si la respuesta tiene la estructura esperada
    if (result && result.success && Array.isArray(result.data)) {
      return result.data // Devolvemos solo el array de datos
    } else {
      console.error('Formato de respuesta inesperado:', result)
      return [] // Devolvemos un array vacío si la estructura no es la esperada
    }
  } catch (error) {
    console.error('Error al obtener autores:', error)
    return [] // Devolvemos un array vacío en caso de error
  }
}

export const getObras = async () => {
  try {
    const response = await fetch(`${urlBase}/histories/list`)
    const result = await response.json()
    
    // Verificamos si la respuesta tiene la estructura esperada
    if (result && result.success && Array.isArray(result.data)) {
      return result.data // Devolvemos solo el array de datos
    } else {
      console.error('Formato de respuesta inesperado:', result)
      return [] // Devolvemos un array vacío si la estructura no es la esperada
    }
  } catch (error) {
    console.error('Error al obtener obras:', error)
    return [] // Devolvemos un array vacío en caso de error
  }
}

export const getTiteres = async () => {
  try {
    const response = await fetch(`${urlBase}/actors/list`)
    const result = await response.json()
    
    // Verificamos si la respuesta tiene la estructura esperada
    if (result && result.success && Array.isArray(result.data)) {
      return result.data // Devolvemos solo el array de datos
    } else {
      console.error('Formato de respuesta inesperado:', result)
      return [] // Devolvemos un array vacío si la estructura no es la esperada
    }
  } catch (error) {
    console.error('Error al obtener títeres:', error)
    return [] // Devolvemos un array vacío en caso de error
  }
}


