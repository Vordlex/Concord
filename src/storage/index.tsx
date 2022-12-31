const storageToken = localStorage.getItem('token')
const token: string = JSON.parse(String(storageToken))

export default token
