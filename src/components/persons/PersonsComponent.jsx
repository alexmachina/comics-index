import React from 'react'
import styled from 'styled-components'
import PersonComponent from './PersonComponent'
const PersonsBox = styled.article`
    @media screen and (min-width:280px) {
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;

    }
`
const PersonsComponent = ({persons, onPersonPropChange}) => (
    <PersonsBox>
    {persons.map(p =>
        <PersonComponent
        key={p.id}
        person={p}
        onPersonPropChange={onPersonPropChange}
        /> )}
    </PersonsBox>
)

export default PersonsComponent
