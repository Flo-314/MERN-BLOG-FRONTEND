export default async function fetchWriters() {
  try {
    const link = "https://floblogapi.herokuapp.com/api/writers";
    let data = await fetch(link);

    const posts = await data.json();

    return posts;
  } catch (err) {
    console.log(err);
  }
}
