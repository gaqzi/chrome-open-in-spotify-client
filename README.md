Open Spotify link in client
===========================

This is a small simple extension that tries to open any
open.spotify.com or play.spotify.com url in the Spotify desktop client
instead of playing it using the Spotify web player. After opening
the desktop client it tries to close the newly opened browser window.

# How

The way the extension works is:

1. If the URL visited is open.spotify.com or play.spotify.com then
2. Don't do anything if the URL contains any of the following, else
   - `/embed/`: Embedded playlists
   - `/embed?`: Legacy embed playlist format
   - `/log/`: Requests to Spotify's analytics
3. Remove the protocol and domain part together with the first slash and
4. Replace those with `spotify:` and
5. Replace the remaining slashes (`/`) with colons (`:`) and
6. Redirect to that URL and
7. Close the tab that opened the URL if it was a newly opened tab

Available in the [Google Chrome web store][store-url]

# Changes
## 1.4.1
* Purely a technical implementation release, switched from using webpack,
  in the unreleased 1.4, to relying on [native ES6 modules in the extension.][es6-modules-extension]

[es6-modules-extension]: https://medium.com/front-end-weekly/es6-modules-in-chrome-extensions-an-introduction-313b3fce955b

## 1.4
* Don't touch analytics/log links and legacy embed links. 
  Thanks [@claui] for the PR.

[@claui]: https://github.com/claui 

## 1.3
* Don't touch embedded links, so that websites that embed a playlist
  can do so without having Spotify trying to open the link automatically.
  Thanks [@shape55] for reporting the issue.

[@shape55]: https://github.com/shape55
## 1.2
* Opens links to user's playlists properly. Thanks for the bug report Robin H.

[store-url]: https://chrome.google.com/webstore/detail/open-in-spotify-client/okkdbmdhpgmajopdpmflkldkemcldnjd
