import { clientCredentials } from '../client';

const checkGamer = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/checkgamer`, {
    method: 'POST',
    body: JSON.stringify({
      uid,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const registerUser = (userInfo) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/register`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

export { checkGamer, registerUser };
