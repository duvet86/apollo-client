const TOKEN_NAME = "jwt_token";

export function setLocalStorageToken(value) {
  return localStorage.setItem(TOKEN_NAME, value);
}

export function getLocalStorageToken() {
  return localStorage.getItem(TOKEN_NAME);
}

export function deleteLocalStorageToken() {
  localStorage.removeItem(TOKEN_NAME);
}
