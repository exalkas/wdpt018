export default function ColorBoxes() {
  const colors = ["red", "blue", "green", "yellow"];

  const colored = colors.map((item, idx) => (
    <div
      key={idx}
      style={{ background: item, width: "100px", height: "100px" }}
    ></div>
  ));

  return (
    <div>
      {
        // colors.map((item, idx) => <div key={idx} style={{}}></div>)
        // colored
        colors.map((item, idx) => (
          <div
            key={idx}
            style={{ background: item, width: "100px", height: "100px" }}
          ></div>
        ))
      }
    </div>
  );
}
