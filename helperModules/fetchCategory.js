export default async function fetchWriters(category) {
  const link = "https://floblogapi.herokuapp.com/api/category/" + category;

  let data = await fetch(link);
  const posts = await data.json();

  return posts;
}
