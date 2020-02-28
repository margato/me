
import React, { useEffect, useState } from 'react'
import { Item } from './index'
import { Sounds } from '../resources'

function SelectButton ({ style, error, link, soundId, children, showIndicator = true }) {
  function getSound (soundId, category) {
    return Sounds[category][soundId || 0]
  }

  function redirectTo (link) {
    const random = Math.floor(Math.random() * Sounds.click.length)
    if (error) {
      getSound(0, 'error').play()
    } else {
      getSound(random, 'click').play()
    }
    window.open(link, '_blank')
  }

  const [currentSound, setSound] = useState(null)
  const [isIndicatorVisible, setIndicatorVisible] = useState(false)

  useEffect(() => {
    if (currentSound) {
      setIndicatorVisible(true)
      currentSound.play()
    }
  }, [currentSound])

  function handleMouseOut () {
    currentSound.pause()
    currentSound.currentTime = 0
    setIndicatorVisible(false)
    setSound(null)
  }

  return (
    <Item
      style={style}
      onClick={() => redirectTo(link)}
      onMouseEnter={() => setSound(getSound(soundId, 'select'))}
      onMouseLeave={() => handleMouseOut()}
    >
      {showIndicator && (
        <span style={{
          position: 'absolute',
          marginLeft: -30,
          display: isIndicatorVisible ? 'inline-block' : 'none'
        }}
        >>
        </span>
      )}
      {children}
    </Item>
  )
}

export { SelectButton }
