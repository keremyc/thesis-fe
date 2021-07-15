function HeaderRightButtons(props) {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-right">
      <li class="nav-item">
        <button
          className="ms-2 btn btn-success"
          data-toggle="modal"
          data-target="#ModalSignupForm"
        >
          Sign Up
        </button>
      </li>
      <li class="nav-item">
        <button
          className="ms-1 btn btn-primary"
          data-toggle="modal"
          data-target="#ModalLoginForm"
        >
          Sign In
        </button>
      </li>
    </ul>
  );
}

export default HeaderRightButtons;
