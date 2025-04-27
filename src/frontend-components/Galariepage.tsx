// import { useState } from "react";
// import { getBilder } from "../constant/galarie";
import "../css-styles/galariepage.css";
import PageFooter from "./PageFooter";

const GalariePage: React.FC = () => {
  //const bilder = getBilder();
  // const defaultImage = "/assets/bild1.jpg";
  //const [selectedBild, setSelectedBild] = useState(defaultImage);
  return (
    <>
      <div className="galareipage">
        <div className="galariepage-background"></div>
        <div className="galarie-content">
          <div className="glarie-title">
            <h2>Galarie</h2>
            <h3>
              Jeder Boden erzählt eine Geschichte – hier zeigen wir Ihnen echte
              Beispiele aus unserer Arbeit.
            </h3>
            <hr className="line" />

            <div className="selectedImage-container">
              <img
                className="selectedImage"
                src="../src/assets/shexo.jpg"
                alt="src/assets/shexo.jpg"
              />
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default GalariePage;
