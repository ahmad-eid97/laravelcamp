import Container from "@mui/material/Container";

import cls from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <nav>
        <div className={cls.logo}>logo</div>
        <div className={cls.links}>
          <ul>
            <li>HOME</li>
            <li>TRACKS</li>
            <li>LIBRARY</li>
            <li>COMMUNITY</li>
            <li>SUPPORT</li>
          </ul>
        </div>
        <div className={cls.domain}>WORKSPACES</div>
      </nav>
    </div>
  );
};

export default Navbar;
