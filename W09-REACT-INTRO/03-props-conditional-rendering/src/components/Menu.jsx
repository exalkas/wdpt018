import Li from "./Li";

export default function Menu() {
  return (
    <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
      <Li text="Home" color="red" />
      <Li text="Contact" color={"green"} />
      <Li text="Blog" />
      <Li text="Products" />
    </ul>
  );
}
