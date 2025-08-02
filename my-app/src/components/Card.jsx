function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "16px",
      boxShadow: "2px 2px 12px rgba(0,0,0,0.1)"
    }}>
      {children}
    </div>
  );
}

export default Card;
