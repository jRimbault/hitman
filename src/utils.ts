type ListenerMap = {
  [K in keyof HTMLElementEventMap]?: {
    callback: (this: HTMLObjectElement, $event: HTMLElementEventMap[K]) => unknown,
    options?: boolean | EventListenerOptions
  }
}

export type NodeOptions = {
  id?: string
  classList?: string | string[]
  textContent?: string | { html: string }
  attributes?: { [attributeName: string]: string }
  children?: HTMLElement[]
  listeners?: ListenerMap
}

export function notNull<T>(value?: T | null): value is T {
  return value !== undefined && value !== null
}

export function createNode<Tag extends keyof HTMLElementTagNameMap>(tag: Tag, options?: NodeOptions): HTMLElementTagNameMap[Tag] {
  const node = document.createElement(tag)
  if (options === undefined) {
    return node
  }
  if (options.id) {
    node.id = options.id
  }
  addClasses(node, options.classList)
  addContent(node, options.textContent)
  addAttributes(node, options.attributes)
  addChildren(node, options.children)
  addListeners(node, options.listeners)
  return node
}

function addListeners(node: HTMLElement, listeners?: NodeOptions['listeners']) {
  if (listeners) {
    for (const [name, listener] of Object.entries(listeners)) {
      if (listener) {
        node.addEventListener(
          name,
          listener.callback as EventListenerOrEventListenerObject,
          listener.options
        );
      }
    }
  }
}

function addChildren(node: HTMLElement, children: NodeOptions['children']) {
  if (children && children.length > 0) {
    node.append(...children)
  }
}

function addAttributes(node: HTMLElement, attributes: NodeOptions['attributes']) {
  if (attributes) {
    for (const [attributeName, value] of Object.entries(attributes)) {
      node.setAttribute(attributeName, value)
    }
  }
}

function addContent(node: HTMLElement, textContent: NodeOptions['textContent']) {
  if (textContent) {
    if (typeof textContent === 'string') {
      node.textContent = textContent
    } else if (textContent.html) {
      node.innerHTML = textContent.html
    }
  }
}

function addClasses(node: HTMLElement, classList: NodeOptions['classList']) {
  if (classList) {
    if (typeof classList === 'string' && classList !== '') {
      node.classList.add(classList)
    }
    if (classList instanceof Array) {
      node.classList.add(...(classList.filter(Boolean)))
    }
  }
}
