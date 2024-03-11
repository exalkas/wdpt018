import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EmailConfirm() {
  const { token } = useParams();
  const [text, setText] = useState("Loading");

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + "/users/emailconfirm/" + token
      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        setText(
          "Thank you for verifying your email. In few seconds you will be redirected to the login page"
        );

        setTimeout(() => navigate("/"), 3000);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {text}: {token}
    </div>
  );
}
