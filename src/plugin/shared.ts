

export const EXTERNAL_URL_RE = /^[a-z]+:/i
export const APPEARANCE_KEY = 'vitepress-theme-appearance'
export const HASH_RE = /#.*$/
export const EXT_RE = /(index)?\.(md|html)$/

export const inBrowser = typeof document !== 'undefined'

export const notFoundPageData = {
  relativePath: '',
  filePath: '',
  title: '404',
  description: 'Not Found',
  headers: [],
  frontmatter: { sidebar: false, layout: 'page' },
  lastUpdated: 0,
  isNotFound: true
}

export function isActive(
  currentPath: string,
  matchPath?: string,
  asRegex: boolean = false
): boolean {
  if (matchPath === undefined) {
    return false
  }

  currentPath = normalize(`/${currentPath}`)

  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  }

  if (normalize(matchPath) !== currentPath) {
    return false
  }

  const hashMatch = matchPath.match(HASH_RE)

  if (hashMatch) {
    return (inBrowser ? location.hash : '') === hashMatch[0]
  }

  return true
}

export function normalize(path: string): string {
  return decodeURI(path).replace(HASH_RE, '').replace(EXT_RE, '')
}

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}


const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

export function sanitizeFileName(name: string): string {
  const match = DRIVE_LETTER_REGEX.exec(name)
  const driveLetter = match ? match[0] : ''

  return (
    driveLetter +
    name
      .slice(driveLetter.length)
      .replace(INVALID_CHAR_REGEX, '_')
      .replace(/(^|\/)_+(?=[^/]*$)/, '$1')
  )
}

export function slash(p: string): string {
  return p.replace(/\\/g, '/')
}
