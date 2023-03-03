export const apiCalls = async () => {
  try {
    const res = await fetch(`https://studio-ghibli-films-api.herokuapp.com/api`)
    const data = await res.json()
    return data
  } catch {
    return 'Something wrong with the server'
  }
}