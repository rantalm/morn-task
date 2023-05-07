import axios from 'axios'

const BASE_URL = document.location.origin.includes('http://127.0.0.1')
  ? '/api'
  : 'https://sandbox.d.greeninvoice.co.il/api/v1/'

export const login = (email, password) => {
  if (!email || !password) return new Error('Please provide credentials!')

  return new Promise(async (resolve, reject) => {
    const url = `${BASE_URL}account/login`

    try {
      const response = await axios.post(url, {
        email,
        password
      })
      resolve(response.data)
    } catch (err) {
      reject(err)
    }
  })
}
