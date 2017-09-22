function Users(token, baseUrl) {
  this.authUrl = `${baseUrl}/login`
  this.token = token
}

Users.prototype.fetchToken = async function fetchToken (user) {
    const options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept' : 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user),
  }
    try {
      const response = await fetch(this.authUrl, options)
      const { token } = await response.json()

      return token
    } catch (exception) {
      throw exception
    }
}

export default Users
