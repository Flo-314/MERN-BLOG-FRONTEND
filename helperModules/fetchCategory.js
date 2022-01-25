export default async function fetchWriters(category) {
  console.log(category);
  const link = "https://floblogapi.herokuapp.com/api/category/" + category;

  let data = await fetch(link);
  const posts = await data.json();

  console.log(posts);

  return posts;
}
