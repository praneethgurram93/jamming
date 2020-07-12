import axios from 'axios';
const CLIENT_ID = '';
const REDIRECT_URI = 'http://localhost:3000/';
const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;

/**
 *
 * @type {{getAccessToken: spotify.getAccessToken}}
 */
const spotify = {
  getAccessToken: function () {
    let accessToken = localStorage.getItem('accessToken');
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
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];

      // DOM has a localStorage. Store the token in there for later use
      localStorage.setItem('accessToken', accessToken);

      const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1]; // expiresIn would be in ms

      // clear the accessToken after the expire time in seconds
      window.setTimeout(() => (localStorage.clear()), expiresIn * 1000);
      return accessToken
    } else {
      /*
         Access token isn't present. Call the authorize api of spotify to get access token
       */
      window.location = REDIRECT_URL;
    }
  },
  search: function (searchTerm) {
    const accessToken = this.getAccessToken();
    const axiosRequestConfig = {
      url: `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return axios(axiosRequestConfig).then(results => results.data);
  },
};

export default spotify;
