/* global chrome */
import * as spotifyLink from './spotify-link.js'

const urls = {
  urls: spotifyLink.domains.map(d => `*://${d}/*`)
}

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (spotifyLink.leaveAlone(details.url)) return

  const spotifyUri = spotifyLink.createDesktop(details.url)
  if (!spotifyUri) return

  // If the current tab url is the same as the one initiating this
  // request it means this is a newly opened tab, so it is safe to
  // close the tab after Spotify has been opened.
  if (details.tabId >= 0) {
    chrome.tabs.get(details.tabId, function (tab) {
      if (tab.url === details.url) {
        setTimeout(function () {
          chrome.tabs.remove(details.tabId)
        }, 100)
      }
    })
  }

  return {
    redirectUrl: `spotify:${spotifyUri}`
  }
}, urls, ['blocking'])
