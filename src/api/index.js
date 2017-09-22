import Users from './users'
import Writters from './writters'

const baseUrl = 'http://localhost:3000'

function Api(token) {
  this.token = token
  this.Users = new Users(this.token, baseUrl)
  this.Writters = new Writters(this.token, baseUrl)
}

export default Api
