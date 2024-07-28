import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import Button from "./Button";

const Header = () => {
  const navigator = useNavigate();

  return (
    <header className="Header">
      <div className="header_home">
        <Link to={"/"}>AI COVER</Link>
      </div>
      <div className="header_middle">
        <div className="header_male">
          <Link to={"/malecover"}>남자 커버 영상</Link>
        </div>
        <div className="header_female">
          <Link to={"/femalecover"}>여자 커버 영상</Link>
        </div>
        <div className="header_ai">
          <Link to={"/aicover"}>AI 커버 영상</Link>
        </div>
      </div>
      <div className="header_login">
        <Button
          onClick={() => {
            navigator("/login");
          }}
          text={"LOGIN"}
          type={"LOGIN"}
        />
        <Button
          onClick={() => {
            navigator("/signup");
          }}
          text={"SIGNUP"}
          type={"SIGNUP"}
        />
      </div>
    </header>
  );
};

export default Header;
