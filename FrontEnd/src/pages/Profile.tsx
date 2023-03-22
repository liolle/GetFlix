import React from 'react'
import styled from 'styled-components'
import ProfilePage from '../Components/ProfilePage/ProfilePage'

const ProfileText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Profile: React.FunctionComponent = () => {
    return (
       <ProfilePage/>
    )
}

export default Profile
