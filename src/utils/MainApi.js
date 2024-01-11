function MainApi () {

const BASE_URL = 'https://api.aelia.diploma.nomoredomainsmonster.ru';

function register(data) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 201) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });
}

function login(data) {
 return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });
}

function getUser(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });
}

return {register, login, getUser};

}

export default MainApi;
