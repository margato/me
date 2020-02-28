import React from 'react'
import { Container, SelectButton, Title, MenuContainer, Footer } from '../components'
import '../resources/main.css'

const IndexPage = () => (
  <>
    <Container>
      <Title>Osvaldo Margato!</Title>
    </Container>
    <Container>
      <MenuContainer>
        <SelectButton openNewTab={false} link='/aboutMe'>About me</SelectButton>
        <SelectButton link='https://github.com/margato'>GitHub</SelectButton>
        <SelectButton link='https://www.linkedin.com/in/margato/'>Linkedin</SelectButton>
        <SelectButton link='https://www.instagram.com/osvaldomargato/'>Instagram</SelectButton>
        <SelectButton openNewTab={false} error link='/404'>Blog</SelectButton>
      </MenuContainer>
    </Container>
    <Container>
      <Footer />
    </Container>
  </>
)

export default IndexPage
