import "./index.css"

function Header() {
  return (
    <header>
      <h1>Built For Adventure</h1>
      <nav>
        <ul className="nav_bar">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;