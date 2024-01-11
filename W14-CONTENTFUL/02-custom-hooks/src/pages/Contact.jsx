import { useState, useCallback, useMemo } from "react";
import EmailInput from "../components/EmailInput";
import NameInput from "../components/NameInput";
import useInput from "../hooks/useInput";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleNameChange = (e) => setName(e.target.value);
  // const handleEmailChange = (e) => setEmail(e.target.value);

  const name = useInput();
  const email = useInput();

  console.log("🚀 ~ name:", name);
  return (
    <div className="flex flex-col gap-[20px] justify-center items-center ">
      <NameInput {...name} />
      {/* <NameInput name={value} onChange={handleNameChange} /> */}
      <EmailInput {...email} />
    </div>
  );
}
