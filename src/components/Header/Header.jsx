import Nav from "./Nav";
import Media from "./Media";
function Header() {
  return (
    <header>
      <div id="title">
        <h1>Flo Blog</h1>
      </div>
      <Nav />
      <Media />
    </header>
  );
}

export default Header;
