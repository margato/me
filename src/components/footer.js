
import React from 'react'
import { SelectButton } from './index'

function Footer () {
  return (
    <>
      <SelectButton
        style={{ textAlign: 'center', opacity: 0.1, bottom: 30, position: 'absolute', left: 0, margin: 'auto', width: '300px', right: 0 }}
        showIndicator={false}
        link='https://twitter.com/tobyfox'
      >
          Sounds by Toby Fox
      </SelectButton>
    </>
  )
}

export { Footer }
