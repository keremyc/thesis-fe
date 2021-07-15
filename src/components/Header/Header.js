import HeaderLeftButtons from "./HeaderLeftButtons";
import HeaderRightButtons from "./HeaderRightButtons";
import SearchBox from "./SearchBox";

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <HeaderLeftButtons />
          <SearchBox />
          <HeaderRightButtons />
        </div>
      </div>
    </nav>
  );
}

export default Header;
