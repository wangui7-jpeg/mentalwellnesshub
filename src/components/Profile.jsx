import { useState } from "react";

export default function Profile() {
  // 🌿 Get logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  // 🌿 States
  const [bio, setBio] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );

  // 🌿 Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* 🌿 PROFILE IMAGE */}
        <div style={styles.imageSection}>
          <img
            src={profileImage}
            alt="profile"
            style={styles.image}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.fileInput}
          />
        </div>

        {/* 🌿 USER INFO */}
        <h1 style={styles.name}>
          {user?.username || "Guest User"} 🌿
        </h1>

        <p style={styles.email}>
          {user?.email || "No email available"}
        </p>

        {/* 🌿 ABOUT SECTION */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me 💚</h2>

          <textarea
            placeholder="Write something about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={styles.textarea}
          />
        </div>

        {/* 🌿 WELLNESS GOALS */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Mental Wellness Goals 🌱
          </h2>

          <ul style={styles.list}>
            <li>✨ Practice mindfulness daily</li>
            <li>💤 Improve sleep routine</li>
            <li>🧘 Reduce stress and anxiety</li>
            <li>📖 Journal consistently</li>
          </ul>
        </div>

        {/* 🌿 STATS */}
        <div style={styles.stats}>
          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>12</h2>
            <p>Journal Entries</p>
          </div>

          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>8</h2>
            <p>Mood Check-ins</p>
          </div>

          <div style={styles.statCard}>
            <h2 style={styles.statNumber}>15</h2>
            <p>Breathing Sessions</p>
          </div>
        </div>

      </div>
    </div>
  );
}

/* 🌿 STYLES */
const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F5FFFD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 20px",
  },

  card: {
    width: "100%",
    maxWidth: "750px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "35px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },

  imageSection: {
    textAlign: "center",
    marginBottom: "20px",
  },

  image: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #16A085",
    marginBottom: "10px",
  },

  fileInput: {
    marginTop: "10px",
  },

  name: {
    textAlign: "center",
    color: "#16A085",
    marginBottom: "5px",
  },

  email: {
    textAlign: "center",
    color: "#777",
    marginBottom: "30px",
  },

  section: {
    marginBottom: "30px",
  },

  sectionTitle: {
    color: "#138D75",
    marginBottom: "10px",
  },

  textarea: {
    width: "100%",
    height: "120px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "12px",
    fontSize: "15px",
    resize: "none",
    outline: "none",
  },

  list: {
    lineHeight: "2",
    color: "#555",
    paddingLeft: "20px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },

  statCard: {
    backgroundColor: "#E8F8F5",
    borderRadius: "14px",
    padding: "25px",
    textAlign: "center",
  },

  statNumber: {
    color: "#16A085",
    fontSize: "32px",
    marginBottom: "10px",
  },
};