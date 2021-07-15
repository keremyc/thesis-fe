function HeaderRightButtonsLoggedIn(props) {
  return (
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <button className="ms-2 btn btn-success">Edit Profile</button>
      </li>
      <li class="nav-item">
        <button className="ms-2 btn btn-success">Log out</button>
      </li>
      <li class="nav-item mx-2">
        <img
          src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
          width="40"
          height="40"
          class="rounded-circle"
        />
      </li>
    </ul>
  );
}

export default HeaderRightButtonsLoggedIn;
