import styled from 'styled-components'
import { Colors } from '../resources'
import { isMobile } from 'react-device-detect'
const textColors = {
  primary: Colors.primary,
  secondary: Colors.secondary,
  default: Colors.white
}

const Text = styled.text`
  font-family: 'Press Start 2P';
  color: ${props => textColors[props.type || 'default']};
  text-shadow: 0px 2px 0px gray;
  margin: 0 auto;
  line-height:30px;
`
const Item = styled.li`
  list-style: none;
  font-family: 'Press Start 2P';
  color: ${props => textColors[props.type || 'default']};
  text-shadow: 0px 2px 0px gray;
  margin-top: 20px;

  &:hover {
    text-shadow: 0px 2px 0px ${Colors.primaryDarker};
    color: ${Colors.secondary};
    cursor: pointer;
  }
`
const Link = styled.span`
  font-family: 'Press Start 2P';
  color: ${props => textColors[props.type || 'default']};
  text-shadow: 0px 2px 0px gray;
  margin: 0;
  &:hover {
    text-shadow: 0px 2px 0px ${Colors.primaryDarker};
    color: ${Colors.secondary};
    cursor: pointer;
  }
`

const Title = styled(Text)`
  margin: 0 auto;
  -webkit-animation: pulsate 1.6s ease-out;
  -webkit-animation-iteration-count: infinite; 
  font-size: 30px;
  text-shadow: 0px 2px 0px ${Colors.primaryDarker};
  color: ${Colors.primary};
  margin-top: 5%;
  text-align: center;
  line-height: ${isMobile ? '35px' : '33px'}
`

export { Text, Title, Item, Link }
