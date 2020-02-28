
import React from 'react'
import { SelectButton, MenuContainer } from './index'

function Footer () {
  return (
    <>
      <MenuContainer>
        <SelectButton
          style={{ textAlign: 'center', opacity: 0.1, bottom: 30, position: 'absolute', left: 0, margin: 'auto', right: 0 }}
          showIndicator={false}
          link='https://twitter.com/tobyfox'
        >
          Sounds by Toby Fox
        </SelectButton>
      </MenuContainer>
    </>
  )
}

export { Footer }
