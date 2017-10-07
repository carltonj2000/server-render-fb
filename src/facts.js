import fetch from 'isomorphic-fetch';

const url = "https://server-render.firebaseapp.com/facts.json";

export default function getFacts() {
  return fetch(url).then(res => res.json());
}
