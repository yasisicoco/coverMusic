import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="header_home">
        <Link to={"/"}>홈</Link>
      </div>
      <div className="header_male">
        <Link to={"/malecover"}>남자 커버 영상</Link>
      </div>
      <div className="header_female">
        <Link to={"/femalecover"}>여자 커버 영상</Link>
      </div>
      <div className="header_ai">
        <Link to={"/aicover"}>AI 커버 영상</Link>
      </div>
    </header>
  );
};

export default Header;
