import { useNavigate } from "react-router-dom";
import sideBarLogo from "../assets/logo_svg.svg";
import "../css-styles/sidebar.css";

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goProdukte = () => {
    navigate("produkte");
  };
  const goGalarie = () => {
    navigate("galarie");
  };
  return (
    <aside className="sidebar">
      <div className="left">
        <img className="sidebar-logo-img" src={sideBarLogo}></img>
      </div>
      <div className="right">
        <div className="right-inner">
          <div className="header">
            <div>
              <h2>JanFußbodenTechnicker</h2>
              <hr />
            </div>
          </div>
          <nav>
            <button onClick={goHome}>
              <span>Home</span>
            </button>
            <button onClick={goProdukte}>
              <span>Produkte</span>
            </button>
            <button onClick={goGalarie}>
              <span>Galarie</span>
            </button>
            <div className="contact-daten">
              <button>
                <span>Kontakt</span>
              </button>
              <ul className="submenu">
                <i className="bi bi-envelope-at"></i>
                <li>janfussbodenleger@gmail.com</li>
              </ul>
              <ul className="submenu">
                <i className="bi bi-telephone"></i>
                <li>+49 160 81 36 135</li>
              </ul>
              <ul className="submenu">
                <i className="bi bi-geo-alt"></i>
                <li>Dortmund</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
