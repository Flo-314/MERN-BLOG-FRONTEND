export default async function fetchPosts() {
  try {
    const link = "https://floblogapi.herokuapp.com/api/posts";
    let data = await fetch(link);

    const posts = await data.json();

    return posts;
  } catch (err) {
    console.log(err);
  }
}
