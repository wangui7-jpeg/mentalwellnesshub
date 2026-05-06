export default function Mycarousel() {
  return (
    <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">

      {/* INDICATORS */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="0"
          className="active"
        />
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="1"
        />
        <button
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide-to="2"
        />
      </div>

      {/* SLIDES */}
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="d-block w-100"
            alt="slide1"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="d-block w-100"
            alt="slide2"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="d-block w-100"
            alt="slide3"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>

      </div>

      {/* CONTROLS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>

    </div>
  );
}