function Box(props) {
  //   console.log("🚀 ~ props:", props);

  return (
    <div
      style={{ background: props.color, width: "100px", height: "100px" }}
    ></div>
  );
}
function BoxDestructured({ color }) {
  return (
    <div style={{ background: color, width: "100px", height: "100px" }}></div>
  );
}
export default function BoxDestructured2(props) {
  const { color } = props;

  return (
    <div style={{ background: color, width: "100px", height: "100px" }}></div>
  );
}
