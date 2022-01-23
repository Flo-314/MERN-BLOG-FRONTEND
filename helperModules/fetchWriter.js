export default async function fetchWriters(writerName) {
  const link = "https://floblogapi.herokuapp.com/api/writers/" + writerName;
  let data = await fetch(link);

  const posts = await data.json();

  return posts;
}
