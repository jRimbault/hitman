type Sound = { key: string; file: string; text: string }
type NodeOptions = {
    classList?: string | string[]
    innerHTML?: string
    attributes?: Record<string, string>
    children?: HTMLElement[]
}
type StrictRecord<K extends string | number | symbol, T> = Partial<Record<K, T>>
interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>
}
declare function fetch<T>(input: RequestInfo, init?: RequestInit): Promise<TypedResponse<T>>;


const play = (file: string) => new Audio(`sounds/${file}`).play()

const listenToClick = (sound: Sound) => () => play(sound.file)

function createNode<Tag extends keyof HTMLElementTagNameMap>(tagName: Tag, options?: NodeOptions): HTMLElementTagNameMap[Tag] {
    const node = document.createElement(tagName)
    if (options === undefined) return node
    if (options.classList) {
        if (typeof options.classList === 'string') {
            node.classList.add(options.classList)
        } else {
            node.classList.add(...options.classList)
        }
    }
    if (options.innerHTML) {
        node.innerHTML = options.innerHTML
    }
    if (options.attributes) {
        for (const [key, attr] of Object.entries(options.attributes)) {
            node.setAttribute(key, attr)
        }
    }
    if (options.children) {
        for (const child of options.children) {
            node.appendChild(child)
        }
    }
    return node
}

function makeListItem(sound: Sound) {
    const node = createNode('li', {
        attributes: { 'data-sound': sound.file.replace('.ogg', '') },
        children: [
            createNode('strong', { innerHTML: sound.key }),
            createNode('span', { classList: 'words-text', innerHTML: sound.text }),
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
    const charCodes = sounds.reduce<StrictRecord<number, string>>((acc, sound) => {
        acc[sound.key.charCodeAt(0)] = sound.file
        return acc
    }, {})
    document.addEventListener('keydown', $event => {
        const audioCode = charCodes[$event.keyCode]
        if (audioCode) play(audioCode)
    })
    return sounds
}

window.onload = () => {
    fetch<{ sounds: Sound[] }>('sounds/index.json')
        .then(r => r.json())
        .then(r => r.sounds)
        .then(listeningToKeyboard)
        .then(sounds => sounds.map(makeListItem))
        .then(insertList)
}
