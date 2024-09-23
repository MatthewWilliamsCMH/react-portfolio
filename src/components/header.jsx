import Navbar from "./navbar";

function Header() {
  return (
    <>
      <div>
        <h6>Portfolio</h6>
        <h1>Matthew Williams</h1>
        <a href = "mailto:matthewwilliamscmh@icloud.com">matthewwilliamscmh@icloud.com</a>
      </div>
      <div id = "navigation">
        <nav>
          <Navbar />
        </nav>
      </div>
    </>
  );
}

export default Header;