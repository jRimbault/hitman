import { createNode } from "utils"
import { sounds, Sound } from "sounds"


const play = (file: string) => new Audio(`sounds/${file}`).play()

const listenToClick = (sound: Sound) => () => play(sound.file)

function makeListItem(sound: Sound) {
  return createNode('li', {
    children: [
      createNode('strong', { textContent: sound.key }),
      createNode('span', { classList: 'words-text', textContent: sound.text }),
    ],
    listeners: {
      click: { callback: listenToClick(sound) }
    }
  })
}

function insertList(listNodes: readonly HTMLLIElement[]) {
  const ul = createNode('ul', { classList: 'words', children: listNodes })
  document.body.appendChild(ul)
}

function listeningToKeyboard(sounds: readonly Sound[]) {
  const charCodes = sounds.reduce<Partial<Record<string, string>>>((acc, sound) => {
    acc[sound.key.toLowerCase()] = sound.file
    return acc
  }, {})
  document.addEventListener('keydown', $event => {
    const audioCode = charCodes[$event.key.toLowerCase()]
    if (audioCode) play(audioCode)
  })
  return sounds
}

window.onload = () => insertList(listeningToKeyboard(sounds).map(makeListItem))
