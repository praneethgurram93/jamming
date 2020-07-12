let accessToken = '';
const CLIENT_ID = '';
const REDIRECT_URI = 'http://localhost:3000/';
const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;

/**
 *
 * @type {{getAccessToken: Spotify.getAccessToken}}
 */
const Spotify = {
  getAccessToken: function () {
    if (accessToken) {
      return accessToken;
    } else if (
      window.location.href.match(/access_token=([^&]*)/) &&
      window.location.href.match(/expires_in=([^&]*)/)
    ) {
      /*
          window.location.href.match(RegExp) returns an array if matched
          array's first element includes the value appended after RegExp
          second element includes the value
          example: window.location.href.match(/access_token=([^&]*)/) returns [access_token=ABCD, ABCD]
       */
      accessToken =  window.location.href.match(/access_token=([^&]*)/)[1];

      const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1]; // expiresIn would be in ms

      // clear the accessToken after the expire time in seconds
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      /*
         Access token isn't present. Call the authorize api of spotify to get access token
       */
      window.location = REDIRECT_URL;
    }
  },
};

export default Spotify;
