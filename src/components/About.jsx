export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h1><center>About us</center></h1>

        <h5>
          Mental Wellness Hub is a safe space designed to help you manage stress,
          track your mood, write your thoughts, and practice mindfulness.
        </h5>

        <h5>
          Our goal is to support your mental well-being using simple daily tools
          like breathing exercises, journaling, and motivational quotes.
        </h5>

        <h5>This hub was considered to help especially teenagers/gen z who struggle mentally,to give them a safe space to get help in this era where mental health is neglected especially most of the elderly. This app is intended to help teenaggers/gen z evade negative malicious thoughts such as suicide.</h5>
      </div>

      <div style={styles.imageSection}>
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
          alt="Mental wellness"
          style={styles.image}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "30px",
    padding: "30px 30px",
    flexWrap: "wrap",
  },
  textSection: {
    flex: 1,
    minWidth: "280px",
  },
  imageSection: {
    flex: 1,
    minWidth: "280px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "12px",
  },
};