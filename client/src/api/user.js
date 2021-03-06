import { API } from '../config'

export const updateProfile = (data) => {
  let jwt = JSON.parse(localStorage.getItem('jwt'))
  return fetch(`${API}/profile/updateProfile`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.token}`,
    },
    body: JSON.stringify({ ...data, userUuid: jwt.user._id }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const uploadProfileImage = (data) => {
  let jwt = JSON.parse(localStorage.getItem('jwt'))
  return fetch(`${API}/profile/uploadProfileImage`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt.token}`,
    },
    body: data,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const readImage = (guestUuid = null) => {
  let jwt = JSON.parse(localStorage.getItem('jwt'))
  return fetch(`${API}/profile/readImage`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ guestUuid }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const readProfile = () => {
  let jwt = JSON.parse(localStorage.getItem('jwt'))
  return fetch(`${API}/profile/readProfile`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uuid: 'UUID' }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}

export const readGuestProfile = (guestUuid) => {
  console.log(guestUuid)
  let jwt = JSON.parse(localStorage.getItem('jwt'))
  return fetch(`${API}/profile/readGuestProfile`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${jwt.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ guestUuid }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err))
}
