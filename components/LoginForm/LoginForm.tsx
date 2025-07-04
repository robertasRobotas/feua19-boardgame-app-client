import { useState } from "react";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { loginUser } from "@/api/user";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPAssword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const onLogin = async () => {
    try {
      const response = await loginUser({ email: email, password: password });

      Cookies.set("boardgame-app-user-jwt-token", response.data.jwt);
      router.push("/");
      setErrorMessage("");
    } catch (err) {
      // @ts-expect-error will fix this later
      if (err.status === 401) {
        setErrorMessage("You have provided bad credentials");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Boardgame App</h1>

      <div className={styles.form}>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPAssword(e.target.value);
          }}
        />
        <button onClick={onLogin}>Login</button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
