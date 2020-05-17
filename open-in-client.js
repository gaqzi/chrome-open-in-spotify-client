/* global chrome */
const urls = {
  urls: [
    '*://open.spotify.com/*',
    '*://play.spotify.com/*'
  ]
}

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  const domainEnds = details.url.indexOf('/', 8) + 1 // https://.length == 8
  const uriPart = details.url.slice(domainEnds).replace(/\//g, ':')
  const isEmbedLink = details.url.indexOf('/embed/') !== -1

  if (uriPart && !isEmbedLink) {
    // If the current tab url is the same as the one initiating this
    // request it means this is a newly opened tab, so it is safe to
    // close the tab after Spotify has been opened.
    chrome.tabs.get(details.tabId, function (tab) {
      if (tab.url === details.url) {
        setTimeout(function () {
          chrome.tabs.remove(details.tabId)
        }, 100)
      }
    })

    return {
      redirectUrl: 'spotify:' + uriPart
    }
  }
}, urls, ['blocking'])
