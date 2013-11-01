var urls = {
  urls: [
    '*://open.spotify.com/*',
    '*://play.spotify.com/*'
  ]
};

chrome.webRequest.onBeforeRequest.addListener(function(details) {
  var domainEnds = details.url.indexOf('/', 8) + 1, // https://.length == 8
      uriPart = details.url.slice(domainEnds).replace('/', ':');

  if(uriPart) {
    // Doesn't seem like any events are raised after the redirect, so
    // just wait and then close the tab.
    setTimeout(function() {
      chrome.tabs.remove(details.tabId);
    }, 100);

    return {
      redirectUrl: 'spotify:'+ uriPart
    };
  }
}, urls, ["blocking"]);
