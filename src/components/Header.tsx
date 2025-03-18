import headerLogo from "../../public/header/header-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src={headerLogo}
          alt="Website logo"
          width={60}
          height={55}
          loading="lazy"
        />
        <h1 className="header-logo-heading">You and me. Always. Forever.</h1>
      </div>
      <div className="header-dated-time">
        <p className="header-dated-time-text">
          <time dateTime="2025-03-18T01:03:00+02:00">01:03, 18.03.2025</time>
        </p>
      </div>
    </header>
  );
};

export default Header;
