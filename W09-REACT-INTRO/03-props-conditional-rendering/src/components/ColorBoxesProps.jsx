import Box from "./Box";
export default function ColorBoxes() {
  const colors = ["red", "blue", "green", "yellow", "white"];

  return (
    <div>
      {colors.map((item, idx) => (
        <Box key={idx} color={item} test="abc" bcd="dog" />
      ))}
    </div>
  );
}

// function a(b,c,d) {

// }

// a(1,2,3)

// <a b={1} c={2} d={3} />
