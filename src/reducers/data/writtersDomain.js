import { evolve } from 'ramda'

const initialState = {
    writters: [
        {
            id: '1',
            fullname: 'Neil Gaiman',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        },
        {
            id: '2',
            fullname: 'Alan Moore',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        },
        {
            id: '3',
            fullname: 'Brian Michael Bendis',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        }
    ],
    selectedWritter: {
    }
}

export default function writtersDomain(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_WRITTERS_SUCCESS':
            const transformation = {
                writters: action.writters
            }
            return evolve(state, transformation)
        default: return state
    }
}
