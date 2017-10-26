import agent from 'superagent';

export async function citiesAPI() {
  
  let data = await agent('GET', 'https://gist.githubusercontent.com/nept/0f311e330a7881fff35d9a8aca129bb2/raw/1227b03c6f85950095b302c4c0c5f5843a604094/cities.json');
  return JSON.parse(data.text);
  
}