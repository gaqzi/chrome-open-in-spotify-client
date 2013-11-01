Open Spotify link in client
===========================

This is a small simple extension that tries to open any
open.spotify.com or play.spotify.com url in the Spotify desktop client
and then close the newly opened browser window.

The way the extension works is:

1. If the URL visited is open.spotify.com or play.spotify.com then
2. Remove the FQDN part and the first slash and
3. Replace those with spotify: and 
4. Replace the remaining slashes (/) with colons (:)
5. Redirect to that URL
6. Close the tab that was opening the URL

Available in the [Google Chrome web store][store-url]

[store-url]: https://chrome.google.com/webstore/detail/open-in-spotify-client/okkdbmdhpgmajopdpmflkldkemcldnjd
