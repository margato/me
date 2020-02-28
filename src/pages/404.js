import React from 'react'
import { Container, Title, Text, MenuContainer, SelectButton } from '../components'
import '../resources/main.css'

function NotFound () {
  return (
    <>
      <Container>
        <Title>Page not found!</Title>
      </Container>
      <Container>
        <Text style={{ textAlign: 'center' }}>Content not available</Text>
      </Container>
      <Container>
        <MenuContainer>
          <SelectButton link='/' openNewTab={false}>Go back</SelectButton>
        </MenuContainer>
      </Container>
    </>
  )
}

export default NotFound
