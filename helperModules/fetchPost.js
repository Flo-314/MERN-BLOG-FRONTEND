export default async function fetchPost(id) {
  try {
    const link = "https://floblogapi.herokuapp.com/api/posts/" + id;
    let data = await fetch(link);
    let post = await data.json();

    post = post.post;
    console.log(post);

    return post;
  } catch (err) {
    console.log(err);
  }
}
