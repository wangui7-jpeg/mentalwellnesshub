export default function Mycarousel() {
  return (
    <div id="wellnessCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="calm nature"
          />
          <div className="carousel-caption">
            <h3>Take a deep breath 🌿</h3>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="peaceful lake"
          />
          <div className="carousel-caption">
            <h3>You are doing your best 💚</h3>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
            className="d-block w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="sunset calm"
          />
          <div className="carousel-caption">
            <h3>One step at a time 🌸</h3>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#wellnessCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#wellnessCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}