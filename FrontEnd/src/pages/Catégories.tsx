import React from 'react'
import styled from 'styled-components'

const CategoriesText= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`


const Categories: React.FunctionComponent = () => {
    return (
        <CategoriesText>Catégories</CategoriesText>
    )
}

export default Categories
