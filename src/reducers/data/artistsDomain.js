import { evolve } from 'ramda'

const initialState = {
    artists: [
        {
            fullname: 'Neil Gaiman',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        },
        {
            fullname: 'Alan Moore',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        },
        {
            fullname: 'Brian Michael Bendis',
            profilePicUrl: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn2us.denofgeek.com%2Fsites%2Fdenofgeekus%2Ffiles%2F2017%2F04%2Fupcoming-neil-gaiman-adaptations-film-tv.jpg&f=1'
        }
    ],
    selectedWritter: {
    }
}

export default function artistsDomain(state = initialState, action) {
    switch (action){
        case 'SET_ARTISTS':
            const transformation = {
                artists: action.artists
            }
            return evolve(state, transformation)
            default: return state
    }
}
