import axios from 'axios';

export default async function RequestData() {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
  return data;
}
