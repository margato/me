import React from 'react'
import {  Container, SelectButton, Title, MenuContainer, Footer } from '../components'
import '../resources/main.css'

const IndexPage = () => (
  <>
    <Container>
      <Title>Osvaldo Margato!</Title>
    </Container>
    <Container>
      <MenuContainer>
        <SelectButton link='https://github.com/margato'>GitHub</SelectButton>
        <SelectButton link='https://www.linkedin.com/in/margato/'>Linkedin</SelectButton>
        <SelectButton error link='/404'>Blog</SelectButton>
        <SelectButton link='https://github.com/margato/me'>Exit</SelectButton>
      </MenuContainer>
    </Container>
    <Footer />
  </>
)

export default IndexPage
