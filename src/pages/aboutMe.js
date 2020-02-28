import React from 'react'
import { Container, Title, Text, SelectButton, MenuContainer } from '../components'
import '../resources/main.css'

function AboutMe () {
  function getAge () {
    const birthDate = new Date('2000-08-06')
    const today = new Date()
    return Math.trunc(Math.abs(today - birthDate) / (1000 * 60 * 60 * 24 * 365))
  }

  return (
    <>
      <Container>
        <Title>Who am I?</Title>
      </Container>
      <Container>
        <Text style={{ textAlign: 'center' }}>
          Hello, I'm Osvaldo! {getAge()} years old, CS student, lover of dogs and innovative products and now, an IBMer!
        </Text>
      </Container>
      <Container>
        <Text style={{ textAlign: 'center' }}>
          When I was a child, drawing with&nbsp;
          <SelectButton
            sameLine
            link='https://en.wikipedia.org/wiki/Logo_(programming_language)'
          >Logo
          </SelectButton>&nbsp;was my first contact with programming logics.
          Later in high school, I started developing&nbsp;
          <SelectButton
            sameLine
            link='https://bukkit.org/'
          >
            Minecraft server plugins
          </SelectButton>&nbsp;with&nbsp;
          <SelectButton
            sameLine
            link='https://github.com/SkriptLang/Skript'
          >
           Skript
          </SelectButton>&nbsp;and later with Java!
        </Text>
      </Container>
      <Container>
        <Text style={{ textAlign: 'center' }}>
          Since that time I learned to love programming and studying about it.
        </Text>
      </Container>
      <Container>
        <MenuContainer>
          <SelectButton link='/' openNewTab={false}>Go back</SelectButton>
        </MenuContainer>
      </Container>
    </>
  )
}

export default AboutMe
