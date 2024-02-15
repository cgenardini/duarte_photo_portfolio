import "./Quote.css";

function Quote() {
  return (
    <section className="quote">
      <h2 className="quote__quote">
        "Photography is the story I fail to put into words."{" "}
      </h2>
      <h3 className="quote__author">- Destin Sparks</h3>
      <div className="quote__overlay"></div>
    </section>
  );
}

export default Quote;
