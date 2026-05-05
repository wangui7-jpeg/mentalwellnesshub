export default function QuoteOfTheDay() {
  const quotes = [
    "Healing takes time 🌿",
    "You are doing better than you think 💚",
    "One step at a time 🌸",
    "It’s okay to rest 🫶"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div style={styles.card}>
      <h3>Quote of the Day</h3>
      <p>{randomQuote}</p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#d88d14",
    textAlign: "center",
  },
};