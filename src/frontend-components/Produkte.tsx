import "../css-styles/producte.css";
import PageFooter from "./PageFooter";

const Produkte: React.FC = () => {
  return (
    <>
      <div className="productpage">
        <div className="producte-background"></div>
        <div className="product-content">
          <h1 className="product-title">Producte</h1>
          <h3>
            Individuelle Bodenbeläge von klassischem Parkett bis innovativem
            Vinyl.
          </h3>
          <div className="productpage-text">
            <h3>
              Bei JanFußbodenTechnick finden Sie hochwertige Bodenbeläge wie:
            </h3>
            <h4>• PVC Boden</h4>
            <h4>• Vinyl Boden</h4>
            <h4>• Linoeum Boden</h4>
            <h4>• Teppich Boden</h4>
            <h4>• Parkett Boden</h4>
            <h4>• Laminat Boden</h4>
            <h4>• Versiegeln</h4>
            <h4>• Fußleisten montage</h4>
          </div>
          <div className="productpage-text">
            Ob gemütlich, modern oder klassisch – bei Urs Klaus in Dortmund
            finden Sie nicht nur den passenden Bodenbelag, sondern auch echte
            Beratung mit Leidenschaft und Fachverstand. Wir bieten Ihnen ein
            vielseitiges Spektrum an hochwertigen Bodenlösungen: von robustem
            PVC über modernes Vinyl und umweltfreundliches Linoleum bis hin zu
            weichem Teppich, edlem Parkett oder praktischem Laminat.
          </div>
          <div className="productpage-text">
            Doch unser Service endet nicht bei der Auswahl. Wir kümmern uns um
            alles, was dazugehört – von der fachgerechten Versiegelung Ihrer
            Böden bis zur präzisen Montage der Fußleisten. So entsteht ein
            stimmiges Gesamtbild, das nicht nur funktional, sondern auch optisch
            überzeugt.
          </div>
          <div className="productpage-text">
            Unsere Kundinnen und Kunden in Dortmund und der gesamten Region
            Nordrhein-Westfalen schätzen unsere Erfahrung, das Gespür für
            Materialien und die persönliche Beratung auf Augenhöhe. In unserer
            Ausstellung präsentieren wir Ihnen die aktuellsten Designs führender
            Hersteller – und begleiten Sie Schritt für Schritt bis zum perfekten
            Ergebnis.
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default Produkte;
