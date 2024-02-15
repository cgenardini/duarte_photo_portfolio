import ImageCollage from "../ImageCollage/ImageCollage";
import "./Discover.css";

function Discover() {
  return (
    <div className="discover">
      <ImageCollage />
      {/* <div className="discover__overlay"></div> */}
      <h2 className="discover__header">Through the Lens</h2>
      <button type="button" className="discover__button">
        Discover
      </button>
    </div>
  );
}

export default Discover;
