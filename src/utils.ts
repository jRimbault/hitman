export type NodeOptions = {
  id?: string
  classList?: string | string[]
  textContent?: string | { html: string }
  attributes?: { [attributeName: string]: string }
  children?: HTMLElement[]
}

export function notNull<T>(value?: T | null): value is T {
  return value !== undefined && value !== null
}

export function createNode<Tag extends keyof HTMLElementTagNameMap>(tagName: Tag, options?: NodeOptions): HTMLElementTagNameMap[Tag] {
  const node = document.createElement(tagName)
  if (options === undefined) return node
  if (options.id) {
    node.id = options.id
  }
  if (options.classList) {
    if (typeof options.classList === 'string' && options.classList !== '') {
      node.classList.add(options.classList)
    }
    if (options.classList instanceof Array) {
      node.classList.add(...(options.classList.filter(Boolean)))
    }
  }
  if (options.textContent) {
    if (typeof options.textContent === 'string') {
      node.textContent = options.textContent
    } else if (options.textContent.html) {
      node.innerHTML = options.textContent.html
    }
  }
  if (options.attributes) {
    for (const [key, attr] of Object.entries(options.attributes)) {
      node.setAttribute(key, attr)
    }
  }
  if (options.children) {
    node.append(...options.children)
  }
  return node
}
