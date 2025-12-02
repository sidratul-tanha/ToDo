import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    const val = name.trim();
    if (!val) {
      alert("Please enter a name.");
      return;
    }
    onLogin(val);
    setName("");
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "72vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

   
        backgroundImage: "url('/is.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 10 }}>Login</h2>

        <input
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="btn btn-yellow">
          Login
        </button>
      </form>
    </div>
  );
}
