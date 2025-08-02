function DynamicBox({ boxId, className, text, bgColor }) {
  const styleObj = {
    backgroundColor: bgColor,
    color: "#fff",
    padding: "1rem",
    borderRadius: "8px",
  };

  return (
    <div id={boxId} className={className} style={styleObj}>
      {text}
    </div>
  );
}

export default DynamicBox;