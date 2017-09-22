function Writters(token, baseUrl) {
  this.urls = {}
  this.urls.getAll = `${baseUrl}/writters`
  this.urls.getOne = id => `${baseUrl}/writters/${id}`
  this.urls.add = `${baseUrl}/writter`
  this.urls.getPage = page => `${baseUrl}/writters/page/${page}`
  this.token = token
  this.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'authorization': this.token
  }
}

Writters.prototype.getPage = async function getPage(page) {
  const options = {
    headers: this.headers,
    method: 'GET'
  }

  const response = await fetch(this.urls.getPage(page), options)
  const writters = await response.json()

  return writters
}

Writters.prototype.addWritter = async function addWritter(writter) {
  const options = {
    headers: this.headers,
    method: 'POST',
    body: JSON.stringify(writter)
  }

  const response = await fetch(this.urls.add, options)
  const addedWritter = await response.json()

  return addedWritter
}

export default Writters







