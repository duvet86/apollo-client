const TOKEN_NAME = "jwt_token";

export function setLocalStorageToken(value) {
  return sessionStorage.setItem(TOKEN_NAME, JSON.stringify(value));
}

export function getLocalStorageToken() {
  return JSON.parse(sessionStorage.getItem(TOKEN_NAME));
}

export function deleteLocalStorageToken() {
  sessionStorage.removeItem(TOKEN_NAME);
}

export function getUserIdFromToken() {
  return getLocalStorageToken().userId;
}
