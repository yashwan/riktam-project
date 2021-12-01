import "./styles.css";
import { auth } from "./Firebase";
import { useState, useEffect } from "react";
import Home from "./Home";
import TotalScreen from "./TotalScreen";
import Login from "./Login";
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user?.uid,
          email: user?.email
        });
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="App">{!user ? <Login /> : <Home email={user.email} />}</div>
  );
}
