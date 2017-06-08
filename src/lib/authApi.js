import {
  getLocalStorageToken,
  deleteLocalStorageToken
} from "lib/localStorageAPI";

const TIME_TO_LIVE = 1209600;

export function isUserAuthenticated() {
  // attempt to grab the token from localstorage
  const jwtToken = getLocalStorageToken();

  // if it exists
  if (jwtToken) {
    // compare the total seconds of the created
    // time of the token vs the ttl (time to live) seconds
    const createdDate = new Date(jwtToken.created);
    const created = Math.round(createdDate.getTime() / 1000);
    const expiry = created + TIME_TO_LIVE;

    // if the token has expired return false
    if (created > expiry) {
      deleteLocalStorageToken();
      return false;
    }

    return true;
  }

  return false;
}
