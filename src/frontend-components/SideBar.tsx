import sideBarLogo from "../assets/logo.png";
import "../css-styles/sidebar.css";

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="left">
        <img className="sidebar-logo-img" src={sideBarLogo}></img>
        {/* <button>
          <i className="bi bi-house-door"></i>
        </button>
        <button>
          <i className="bi bi-info-circle"></i>
        </button> */}
      </div>
      <div className="right">
        <div className="right-inner">
          <div className="header">
            <div>
              <h2>JanFußbodenTechnicker</h2>
              <hr />
            </div>
            <i className="ai-chevron-vertical"></i>
          </div>
          <nav>
            <button>
              <i className="ai-open-envelope"></i>
              <span>Home</span>
              <i className="ai-plus"></i>
            </button>
            <button>
              <i className="ai-open-envelope"></i>
              <span>Produkte</span>
              <i className="ai-plus"></i>
            </button>
            <button>
              <i className="ai-open-envelope"></i>
              <span>Galarie</span>
              <i className="ai-plus"></i>
            </button>
            <div className="contact-daten">
              <button>
                <i className="ai-open-envelope"></i>
                <span>Kontakt</span>
                <i className="ai-plus"></i>
              </button>
              <ul className="submenu">
                <i className="bi bi-envelope-at"></i>
                <li>shehohasan@gmail.com</li>
              </ul>
              <ul className="submenu">
                <i className="bi bi-telephone"></i>
                <li>+49 1728296372</li>
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
