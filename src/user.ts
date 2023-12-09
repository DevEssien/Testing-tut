import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

export default class User {
  async getUser() {
    return await  axios.get(`${baseUrl}/1`)
  }

  async saveUser(userPayload: unknown) {
    return await  axios.post(`${baseUrl}`)
  }
}