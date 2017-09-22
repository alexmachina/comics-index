import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PersonBox = styled.div`
    @media screen and (min-width:280px) {
        background-color:white;
        display:flex;
        flex-direction: column;
        flex-basis:100%;
        height:300px;
    }
    @media screen and (min-width:640px) {
        flex-basis:33%;
        height:500px;
    }
`,
      PersonProfilePicBox = styled.div`
        height:75%;
        width:100%;
`,
      ProfilePic = styled.img`
        width:100%;
        height:100%;
`,
      PersonFullnameBox = styled.div`
        height:25%;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#999999;
`,
      Fullname = styled.input`
        font-size:22px;
        color:#252525;
        background-color:#999999;
        border:0;
        text-align:center;
`
const PersonComponent = ({
    person,
    onPersonPropChange

}) => (
    <PersonBox>
        <PersonProfilePicBox>
            <ProfilePic src={person.profilePicUrl} />
        </PersonProfilePicBox>
        <PersonFullnameBox>
          <Fullname
            className="person-fullname-input"
            value={person.fullname}
            onChange={(e) => onPersonPropChange('fullname', e.target.value)}
            />
        </PersonFullnameBox>
    </PersonBox>
)

PersonComponent.propTypes = {
    person: PropTypes.shape({
        fullname: PropTypes.string,
        profilePicUrl: PropTypes.string
    }),
    onPersonPropChange: PropTypes.func

}

export default PersonComponent
