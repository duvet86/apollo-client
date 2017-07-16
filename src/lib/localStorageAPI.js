const TOKEN_NAME = "jwt_token";
const USER_ID = "userid";

export function setLocalStorageUserId(value) {
  return sessionStorage.setItem(USER_ID, JSON.stringify(value));
}

export function getLocalStorageUserId() {
  return JSON.parse(sessionStorage.getItem(USER_ID));
}

export function deleteLocalStorageUserId() {
  sessionStorage.removeItem(USER_ID);
}

export function setLocalStorageToken(value) {
  return sessionStorage.setItem(TOKEN_NAME, JSON.stringify(value));
}

export function getLocalStorageToken() {
  return JSON.parse(sessionStorage.getItem(TOKEN_NAME));
}

export function deleteLocalStorageToken() {
  sessionStorage.removeItem(TOKEN_NAME);
}
