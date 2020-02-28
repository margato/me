
import React, { useEffect, useState } from 'react'
import { Item, Link } from './index'
import { Sounds } from '../resources'
import { useHistory } from 'react-router-dom'

function SelectButton ({ sameLine = false, openNewTab = true, style, error, link, soundId = 0, children, showIndicator = true }) {
  const history = useHistory()

  function getSound (category) {
    return Sounds[category][soundId]
  }

  function playSound () {
    if (error) {
      return (getSound('error').play())
    } else {
      return (getSound('click').play())
    }
  }

  function redirectTo (link) {
    playSound()
    if (openNewTab) {
      window.open(link, '_blank')
    } else {
      history.push(link)
    }
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
    if (currentSound) {
      currentSound.pause()
      currentSound.currentTime = 0
    }
    setIndicatorVisible(false)
    setSound(null)
  }

  if (!sameLine) {
    return (
      <Item
        style={style}
        onClick={() => redirectTo(link)}
        onMouseEnter={() => setSound(getSound('select'))}
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
  } else {
    return (
      <Link
        type='secondary'
        style={style}
        onClick={() => redirectTo(link)}
        onMouseEnter={() => setSound(getSound('select'))}
        onMouseLeave={() => handleMouseOut()}
      >
        {children}
      </Link>
    )
  }
}

export { SelectButton }
