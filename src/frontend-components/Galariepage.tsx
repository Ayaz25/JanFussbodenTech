import { useState } from "react";
import "../css-styles/galariepage.css";
import PageFooter from "./PageFooter";
import imageArray from "../constant/galarie";

const GalariePage: React.FC = () => {
  const defaultImage = imageArray[0];
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
              <img className="selectedImage" src={selectedBild} />
            </div>
            <div className="image-container">
              {imageArray.map((image, index) => (
                <div key={index}>
                  <img
                    className="image"
                    onClick={() => setSelectedBild(image)}
                    src={image}
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
