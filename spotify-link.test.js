const test = require('tape')
const spotifyLink = require('./spotify-link')

test('web -> desktop [track]', function (t) {
  t.equal(
    spotifyLink.createDesktop('https://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
    'spotify:track:0PyZiU4DnQ23rUjx01XlIh'
  )
  t.end()
})

test('web -> desktop [album]', function (t) {
  t.equal(
    spotifyLink.createDesktop('https://open.spotify.com/album/2OM4nPzEgAqQfJEjOg8b7l'),
    'spotify:album:2OM4nPzEgAqQfJEjOg8b7l'
  )
  t.end()
})

test('web -> desktop [http link]', function (t) {
  t.equal(
    spotifyLink.createDesktop('http://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
    'spotify:track:0PyZiU4DnQ23rUjx01XlIh'
  )
  t.end()
})

test('leaveAlone - [/embed/]', function (t) {
  t.ok(
    spotifyLink.leaveAlone('https://open.spotify.com/embed/artist/2VMefj2Ob7Dc7PElvmMdOX'),
    'expected to have returned true for an embed link since they should not be intercepted'
  )
  t.end()
})

test('leaveAlone - [/embed?]', function (t) {
  t.ok(
    spotifyLink.leaveAlone('https://open.spotify.com/embed?uri=spotify:track:6vNrUkbSCj9pvqrdgJi2bF'),
    'expected to have returned true for a legacy embed link since they should not be intercepted'
  )
  t.end()
})

test('leaveAlone - [/log/]', function (t) {
  t.ok(
    spotifyLink.leaveAlone('https://open.spotify.com/log/artist/2VMefj2Ob7Dc7PElvmMdOX'),
    'expected to have returned true for an log/analytics link since they should not be intercepted'
  )
  t.end()
})

test('leaveAlone - [normal link]', function (t) {
  t.notOk(
    spotifyLink.leaveAlone('http://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
    'expected a track link to be openable in the desktop client'
  )
  t.end()
})
