import { createNode } from "utils"
import { sounds, Sound } from "sounds"


const play = (file: string) => new Audio(`sounds/${file}`).play()

const listenToClick = (sound: Sound) => () => play(sound.file)

function makeListItem(sound: Sound) {
  const node = createNode('li', {
    children: [
      createNode('strong', { textContent: sound.key }),
      createNode('span', { classList: 'words-text', textContent: sound.text }),
    ],
  })
  node.addEventListener('click', listenToClick(sound))
  return node
}

function insertList(listNodes: HTMLLIElement[]) {
  const ul = createNode('ul', { classList: 'words', children: listNodes })
  document.body.appendChild(ul)
}

function listeningToKeyboard(sounds: Sound[]) {
  const charCodes = sounds.reduce<Partial<Record<number, string>>>((acc, sound) => {
    acc[sound.key.charCodeAt(0)] = sound.file
    return acc
  }, {})
  document.addEventListener('keydown', $event => {
    const audioCode = charCodes[$event.keyCode]
    if (audioCode) play(audioCode)
  })
  return sounds
}

window.onload = () => insertList(listeningToKeyboard(sounds).map(makeListItem))
