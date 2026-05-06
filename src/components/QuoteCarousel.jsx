import { useState, useEffect } from "react";

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

  // 🌿 auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <img
          src={data[index].img}
          alt="quote"
          style={styles.img}
        />

        <div style={styles.overlay}>
          <h2 style={styles.text}>
            {data[index].text}
          </h2>
        </div>

        <button
          onClick={prev}
          style={{ ...styles.arrow, left: "10px" }}
        >
          ❮
        </button>

        <button
          onClick={next}
          style={{ ...styles.arrow, right: "10px" }}
        >
          ❯
        </button>

      </div>
    </div>
  );
}

/* 🌿 STYLES */
const styles = {
  container: {
    marginTop: "20px",
    textAlign: "center",
  },

  wrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    height: "320px",
    margin: "0 auto",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.4s ease-in-out",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  text: {
    color: "white",
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.85)",
    border: "none",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
    transition: "0.2s",
  },
};