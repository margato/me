export const Colors = {
  primary: '#ffd000',
  primaryDarker: '#d1ab00',
  credit: '#ffff80',
  creditShadow: '#e6e673',
  secondary: '#ffe46b',
  white: '#fff'
}

export const Sounds = {
  select: [
    new Audio(window.location.origin + '/resources/sounds/mus_note1.wav'),
    new Audio(window.location.origin + '/resources/sounds/mus_note2.wav'),
    new Audio(window.location.origin + '/resources/sounds/mus_note3.wav'),
    new Audio(window.location.origin + '/resources/sounds/mus_note4.wav')
  ],
  click: [
    new Audio(window.location.origin + '/resources/sounds/mus_f_laugh.wav'),
    new Audio(window.location.origin + '/resources/sounds/snd_wonderfulidea.wav'),
    new Audio(window.location.origin + '/resources/sounds/mus_ohyes.ogg'),
    new Audio(window.location.origin + '/resources/sounds/mus_yeah.wav')
  ],
  error: [
    new Audio(window.location.origin + '/resources/sounds/snd_vaporized.wav')

  ]
}
