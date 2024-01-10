import { useState, useCallback, useMemo } from "react";
import EmailInput from "../components/EmailInput";
import NameInput from "../components/NameInput";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  //   const handleNameChange = useCallback((e) => setName(e.target.value), []);
  //   const handleEmailChange = useCallback((e) => setEmail(e.target.value), []);

  const userName = useMemo(() => {
    console.log("Heavy calc here!");
    email.split("@")[0];
  }, [email]);
  //   const userName = email.split("@")[0];
  //   console.log("🚀 ~ userName:", userName);

  return (
    <div className="flex flex-col gap-[20px] justify-center items-center ">
      <NameInput value={name} onChange={handleNameChange} />
      <EmailInput value={email} onChange={handleEmailChange} />
    </div>
  );
}
