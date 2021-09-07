import axios from 'axios'
const baseUrl = '/api/users'

const register = async credentials => {
  console.log("registering")
  const response = await axios.post(baseUrl, credentials)
  console.log(response)
  return response.data
}

const registerService = { register }

export default registerService