import Api from '../index'

describe('API', () => {
  describe('User', () => {
    it('Authenticates a user', async () => {
      const api = new Api()
      const user = {
        username: 'alexxmde',
        password: 'cthulhu1'
      }
      fetch.mockResponse(JSON.stringify({ token: 'somefaketoken'}))

      const token = await api.Users.fetchToken(user)
      expect(token).toBe('somefaketoken')
    })

    it('Handles user authentication exception', async () => {
      const api = new Api()
      const user = {
        username: 'alexxmde',
        password: 'lemonde'
      }

      fetch.mockReject()

      try {
        const token = await api.Users.fetchToken(user)
      } catch (exception) {
        //Just test if the flow ends here
        //fetch.mockReject doesn't give control over thrown exception
        expect(exception).toBe(undefined)
        
      }
    })
  })
})

