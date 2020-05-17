/* global describe, it */
import * as spotifyLink from './spotify-link.js'
import chai from 'chai'
const assert = chai.assert

describe('#createDesktop', () => {
  it('converts a track link', () => {
    assert.strictEqual(
      spotifyLink.createDesktop('https://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
      'spotify:track:0PyZiU4DnQ23rUjx01XlIh'
    )
  })

  it('converts an album link', () => {
    assert.strictEqual(
      spotifyLink.createDesktop('https://open.spotify.com/album/2OM4nPzEgAqQfJEjOg8b7l'),
      'spotify:album:2OM4nPzEgAqQfJEjOg8b7l'
    )
  })

  it('converts a http link as well as https', () => {
    assert.strictEqual(
      spotifyLink.createDesktop('http://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
      'spotify:track:0PyZiU4DnQ23rUjx01XlIh'
    )
  })
})

describe('#leaveAlone', () => {
  it('is true for /embed/', () => {
    assert.isOk(
      spotifyLink.leaveAlone('https://open.spotify.com/embed/artist/2VMefj2Ob7Dc7PElvmMdOX'),
      'expected to have returned true for an embed link since they should not be intercepted'
    )
  })

  it('is true for /embed?', () => {
    assert.isOk(
      spotifyLink.leaveAlone('https://open.spotify.com/embed?uri=spotify:track:6vNrUkbSCj9pvqrdgJi2bF'),
      'expected to have returned true for a legacy embed link since they should not be intercepted'
    )
  })

  it('is true for /log/', () => {
    assert.isOk(
      spotifyLink.leaveAlone('https://open.spotify.com/log/artist/2VMefj2Ob7Dc7PElvmMdOX'),
      'expected to have returned true for an log/analytics link since they should not be intercepted'
    )
  })

  it('is false for normal links', () => {
    assert.isNotOk(
      spotifyLink.leaveAlone('http://open.spotify.com/track/0PyZiU4DnQ23rUjx01XlIh'),
      'expected a track link to be openable in the desktop client'
    )
  })
})
