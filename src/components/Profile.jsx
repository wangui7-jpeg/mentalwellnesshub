import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <h3 style={{ padding: "20px" }}>Please login first</h3>;
  }

  return (
    <div style={styles.container}>
      <h2>User Profile 🌿</h2>

      <div style={styles.card}>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  card: {
    backgroundColor: "#E8F8F5",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "10px",
  },
};