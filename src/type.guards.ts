import { Sound } from "sounds"

export function isSound(value: unknown): value is Sound {
  if (value === null) {
    return false
  }
  if (!(value instanceof Object)) {
    return false
  }
  const keyOfSound: (keyof Sound)[] = ['key', 'text', 'file']
  if (hasKeyAndIsString(keyOfSound[0], value)) {
    if (value[keyOfSound[0]].length !== 1) {
      return false
    }
  }
  for (const key of keyOfSound.slice(1)) {
    if (!hasKeyAndIsString(key, value)) {
      return false
    }
  }

  return true
}

function hasKeyAndIsString<K extends string>(k: K, o: {}): o is { [_ in K]: string } {
  return hasKey(k, o) && typeof o[k] === 'string'
}

function hasKey<K extends string>(k: K, o: {}): o is { [_ in K]: unknown } {
  return typeof o === 'object' && k in o
}
