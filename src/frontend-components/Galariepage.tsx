import { useState } from "react";
import { getBilder } from "../constant/galarie";
import "../css-styles/galariepage.css";
import PageFooter from "./PageFooter";

const GalariePage: React.FC = () => {
  const bilder = getBilder();
  const defaultImage = "src/assets/galarieBilder/bild1.jpg";
  const [selectedBild, setSelectedBild] = useState(defaultImage);
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
                src={selectedBild}
                alt="selected-image"
              />
            </div>
            <div className="image-container">
              {bilder.map(({ imagelink }, index) => (
                <div key={index}>
                  <img
                    className="image"
                    onClick={() => setSelectedBild(imagelink)}
                    src={imagelink}
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default GalariePage;
