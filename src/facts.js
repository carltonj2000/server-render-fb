import fetch from 'isomorphic-fetch';

export default function getFacts() {
  return fetch('http://localhost:5000/facts.json').then(res => res.json());
}
