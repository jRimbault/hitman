import { isSound } from "type.guards"

type GenericSound<K> = {
  key: K
  file: string
  text: string
}
export type Sound = GenericSound<string>
type SoundMap<T> = { [P in keyof T]: GenericSound<P> }

const lookup = {
  A: {
    key: 'A',
    text: "Où est-il à ce jour?",
    file: "a-ce-jour.mp3",
  },
  G: {
    key: 'G',
    text: "Où est donc passé Blacky?",
    file: "african-americany.mp3",
  },
  J: {
    key: 'J',
    text: "Je sais où tu te caches!",
    file: "je-sais.mp3",
  },
  F: {
    key: 'F',
    text: "Mon frère... Je te vengerai!",
    file: "mon-frere.mp3",
  },
  M: {
    key: 'M',
    text: "C'est toi qui va mourir connard!",
    file: "mourir-connard.mp3",
  },
  H: {
    key: 'H',
    text: "Tu ne m'échapperas pas!",
    file: "payer.mp3",
  },
  C: {
    key: 'C',
    text: "Je vais te tuer petit con!",
    file: "petit-con.mp3",
  },
  P: {
    key: 'P',
    text: "Philippe!",
    file: "philippe.mp3",
  },
  Q: {
    key: 'Q',
    text: "Qui a tué mon frère?",
    file: "qui-a-tue.mp3",
  },
  R: {
    key: 'R',
    text: "Rien à foutre des japonais",
    file: "rien-a-foutre.mp3",
  },
  S: {
    key: 'S',
    text: "Salaud!",
    file: "salaud.mp3",
  },
  E: {
    key: 'E',
    text: "Viens ici sale enculé!",
    file: "sale-encule.mp3",
  },
  T: {
    key: 'T',
    text: "Ta gueule!",
    file: "ta-gueule.mp3",
  },
  Y: {
    key: 'Y',
    text: "Vas-y!",
    file: "vas-y.mp3",
  },
  D: {
    key: 'D',
    text: "On t'attend pour la vengeance!",
    file: "vengeance.mp3",
  },
  B: {
    key: 'B',
    text: "Je veux ce connard!",
    file: "veux-ce-connard.mp3",
  },
  V: {
    key: 'V',
    text: "Viens ici que je te bute enculé!",
    file: "viens-ici.mp3",
  },
} as const

const register: SoundMap<typeof lookup> = lookup
export const sounds = Object.values(register).filter(isSound)
