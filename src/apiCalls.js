export const apiCalls = async () => {
  const res = await fetch(`https://studio-ghibli-films-api.herokuapp.com/api/`)
  const data = await res.json()
  return data

}