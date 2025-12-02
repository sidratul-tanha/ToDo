import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

export default function App() {
  
  const [user, setUser] = useState(null);

  function handleLogin(name) {
    setUser({ name });
  }

  function handleLogout() {
    setUser(null);

  }

  return (
    <div className="app-wrapper">
      <div className="card card-with-padding" style={{ width: "100%", maxWidth: 680 }}>
        <div className="app-title">Panic Planner</div>

        {!user ? (
          <div style={{ maxWidth: 420, margin: "0 auto" }}>
            <Login onLogin={handleLogin} />
          </div>
        ) : (
          <>
            <div className="header-row">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: 700, color: "#0f172a" }}>Welcome, {user.name}</div>
                <div className="greeting">Plan your tasks, Finish Faster… than your Excuses.</div>
              </div>
              <div style={{ width: 96 }}></div>
            </div>

            <Home />
          </>
        )}

        {user && (
          <div className="logout-float">
            <button className="btn btn-yellow" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
