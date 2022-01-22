export async function fetchPosts(id) {
  try {
    const link = "http://localhost:4000/api/posts/";
    let data = await fetch(link + id);

    data = await data.json();
  } catch (err) {
    console.log(err);
  }
}
