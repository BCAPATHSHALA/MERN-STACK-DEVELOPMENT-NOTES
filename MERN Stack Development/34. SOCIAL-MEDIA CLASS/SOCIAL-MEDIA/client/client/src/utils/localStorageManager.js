export const KEY_ACCESS_TOKEN = "access_token";

export function getItem(key) {
  // invoked it when check the user is loged in or not
  return localStorage.getItem(key);
}

export function setItem(key, value) {
  // invoked it when save the accessToken in local storage
  // after user loged in
  localStorage.setItem(key, value);
}

export function removeItem(key) {
  // invoked it when logout
  localStorage.removeItem(key);
}
