export default function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  spinner: {
    width: "55px",
    height: "55px",
    border: "5px solid #ddd",
    borderTop: "5px solid #16A085",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  text: {
    marginTop: "10px",
    color: "#555",
  },
};