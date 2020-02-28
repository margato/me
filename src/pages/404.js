import React from 'react'
import { Container, Title, Text } from '../components'
import '../resources/main.css'

const NotFound = () => (
  <>
    <Container>
      <Title>Page not found!</Title>
    </Container>
    <Container>
      <Text style={{textAlign: 'center'}}>Content not available</Text>
    </Container>
  </>
)

export default NotFound
