import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default class User {
  async getUser() {
    return await  axios.get(`${baseUrl}/users/1`)
  }

  async saveUser(userPayload: unknown) {
    return await  axios.post(`${baseUrl}/users`, userPayload)
  }
}