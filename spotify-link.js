const uriPrefixLength = 'https://'.length
// The URIs defined in this list are used on the web and should not be
// intercepted and opened in the desktop client
const spotifyUriStubsToLeaveAlone = [
  '/embed/', // To embed a playlist or track on the web
  '/embed?', // Legacy embed format
  '/log/' // Used for analytics
]
// These are domains to register intercepts for
export const domains = [
  'open.spotify.com',
  'play.spotify.com'
]

export function createDesktop (webUri) {
  const domainEnds = webUri.indexOf('/', uriPrefixLength) + 1
  const uriPart = webUri.slice(domainEnds).replace(/\//g, ':')

  return `spotify:${uriPart}`
}

// If the URI contains any of the stubs specified in spotifyUriStubsToLeaveAlone
// These are URLs
export function leaveAlone (webUri) {
  for (const stub of spotifyUriStubsToLeaveAlone) {
    if (webUri.indexOf(stub) !== -1) return true
  }

  return false
}
