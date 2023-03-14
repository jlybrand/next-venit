export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        <svg
          className="nav-bar__logo"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="nav-bar__title">X-Marketing</span>
      </div>
      <div className="nav-bar_bttn-container">
        <button className="nav-bar-bttn">
          <svg
            className="nav-bar-bttn__svg"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="nav-bar__items-container">
        <div className="nav-bar__items">
          <a
            href="#"
            className="nav-bar__item"
          >
            About
          </a>
          <a
            href="#"
            className="nav-bar__item"
          >
            Contact
          </a>
          <a
            href="#"
            className="nav-bar__item"
          >
            Sign In
          </a>
        </div>
        <div>
          <a
            href="#"
            className="nav-bar__search"
          >
            Search
          </a>
        </div>
      </div>
    </nav>
  );
}
