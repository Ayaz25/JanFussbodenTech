import "../css-styles/homepage.css";
import PageFooter from "./PageFooter";
const HomePage: React.FC = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-background"></div>
        {/* <div className="schatten-block"></div> */}
        <div className="home-content">
          <div className="home-title">
            <h2>JanFußbodenTechnick</h2>
            <h3> – Ihr Experte für hochwertige Fußböden aus Dortmund.</h3>
          </div>
          <div className="homepage-text">
            Ein hochwertiger Boden ist mehr als nur ein funktionaler Untergrund
            – er ist die Grundlage für ein stimmiges Raumgefühl, ein angenehmes
            Wohnklima und ein Zuhause, in dem man sich rundum wohlfühlt.
          </div>
          <div className="homepage-text">
            Tag für Tag verbringen wir sehr viel Zeit in geschlossenen Räumen.
            Deshalb ist die Auswahl des richtigen Bodenbelags entscheidend – für
            Ihre Gesundheit, Ihr Wohlbefinden und die ästhetische Wirkung Ihres
            Zuhauses oder Ihrer Geschäftsräume.
          </div>
          <div className="homepage-text">
            Als erfahrenes Fachunternehmen für Bodenbeläge bieten wir Ihnen
            individuelle Lösungen, die genau zu Ihren Räumen, Anforderungen und
            Stilvorlieben passen. Ob im Wohnbereich, im Schlafzimmer, im Büro
            oder in der Küche. Wir schaffen Böden, die nicht nur optisch
            überzeugen, sondern auch durch Langlebigkeit, Nachhaltigkeit und ein
            angenehmes Raumklima.
          </div>
          <div className="homepage-text">
            Mit JanFussbodenTechnick haben Sie langjährige Experten an Ihrer
            Seite!
          </div>
          <div className="uber-uns">
            <h3> Über uns</h3>
          </div>
          <div className="homepage-text">
            <strong>JanFussbodenTechnicker</strong> ist ein inhabergeführtes
            Unternehmen aus Dortmund mit langjähriger Erfahrung in der
            Bodenverlegung. Wir stehen für Qualität, Termintreue und echte
            Handwerkskunst. Unser Anspruch ist es, nicht nur Böden zu liefern –
            sondern Räume zu gestalten, die Lebensqualität vermitteln.
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default HomePage;
