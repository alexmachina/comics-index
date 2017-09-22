import Api from '../'
import faker from 'faker'

describe('API', () => {
  let token
  beforeAll(async () => {
    let api = new Api()
    fetch.mockResponse(JSON.stringify({token: '123token!'}))
    token = await api.Users.fetchToken({
      username: 'whatever',
      password: 'whatsoever'
    })
  })
  describe('Writters', () => {
    it('Fetches a page of writters', async () => {
      const fakeWritters = []
      for(let i = 0;i < 10;i++) {
        fakeWritters.push({
          fullname: faker.name.findName(),
          profilePicUrl: faker.image.imageUrl()
        })
      }
      const api = new Api(token)
      fetch.mockResponse(JSON.stringify(fakeWritters))
      
      const writters = await api.Writters.getPage(1)
      expect(writters.length).toBe(10)
      
    })

    it('Adds a writter', async () => {
      const writter = {
        fullname: 'Alex Alonso',
        profilePicUrl: faker.image.imageUrl()
      }

      const api = new Api(token)

      fetch.mockResponse(JSON.stringify(writter))
      const addedWritter = await api.Writters.addWritter(writter)

      expect(addedWritter).toEqual(writter)
    })

    it('Gets one writter', async () => {
      const aWritter = {
        id: 1,
        fullname: 'Alex Alonso',
        profilePicUrl: faker.image.imageUrl()
      }
      
      fetch.mockResponse(JSON.stringify(aWritter))

      const api = new Api(token)
      const writter = await api.Writters.getPage(1)

      expect(aWritter).toEqual(writter)
    })
  })
})




