import "../css-styles/PageFooter.css";

const PageFooter: React.FC = () => {
  return (
    <>
      <div className="layout"></div>
      <div className="footer-container">
        <div className="footer">
          <img
            className="footer-img"
            src="../src/assets/logo_svg.svg"
            alt="logo-logo"
          ></img>
          <div className="adress">
            <span>FussStrasse 2</span>
            <span>4421 Dortmund</span>
            <span>Tel: +491608136135</span>
            <span>info@jan.com</span>
          </div>
          <div className="adress">
            <span className="offnung">Öffnungszeiten:</span>
            <span> Auf Voranmeldung</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFooter;
