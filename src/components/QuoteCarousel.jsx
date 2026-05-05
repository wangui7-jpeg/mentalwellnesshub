import { useState } from "react";

export default function QuoteCarousel() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      text: "You are stronger than you think 💪",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      text: "Take it one day at a time 🌿",
    },
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      text: "Peace begins within you 🧘",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % data.length);
  };

  const prev = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  return (
    <div style={styles.container}>
      
      {/* IMAGE WRAPPER */}
      <div style={styles.imageWrapper}>
        <img src={data[index].img} alt="slide" style={styles.img} />

        {/* TEXT OVERLAY */}
        <div style={styles.overlay}>
          <h2 style={styles.text}>{data[index].text}</h2>
        </div>

        {/* LEFT ARROW */}
        <button onClick={prev} style={{ ...styles.arrow, left: "10px" }}>
          ❮
        </button>

        {/* RIGHT ARROW */}
        <button onClick={next} style={{ ...styles.arrow, right: "10px" }}>
          ❯
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "20px",
    textAlign: "center",
  },

  imageWrapper: {
    position: "relative",
    width: "100%",
    maxHeight: "300px",
    overflow: "hidden",
    borderRadius: "12px",
  },

  img: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  text: {
    color: "white",
    fontSize: "22px",
    textAlign: "center",
    padding: "10px",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.7)",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "18px",
    cursor: "pointer",
  },
};