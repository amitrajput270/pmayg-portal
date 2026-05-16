// LoginPage.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [financialYear, setFinancialYear] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaDisplay, setCaptchaDisplay] = useState("2 9 9 6 9 4");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentRawCaptchaRef = useRef("299694");

  const generateRandomSpacedCaptcha = useCallback(() => {
    let digits = "";
    for (let i = 0; i < 6; i++) {
      digits += Math.floor(Math.random() * 10).toString();
    }
    return digits.split("").join(" ");
  }, []);

  const refreshCaptcha = useCallback(() => {
    const newSpaced = generateRandomSpacedCaptcha();
    setCaptchaDisplay(newSpaced);
    currentRawCaptchaRef.current = newSpaced.replace(/\s/g, "");
    setCaptchaInput("");
    if (message.text.includes("Captcha") || message.text.includes("mismatch")) {
      setMessage({ text: "", type: "" });
    }
  }, [generateRandomSpacedCaptcha, message.text]);

  const showMessage = useCallback((text, type = "error") => {
    setMessage({ text, type });
    if (type !== "success") {
      setTimeout(() => {
        setMessage((prev) =>
          prev.text === text ? { text: "", type: "" } : prev,
        );
      }, 4000);
    }
  }, []);

  const performLogin = useCallback(async () => {
    if (!financialYear) {
      showMessage("Please select a Financial Year.", "error");
      return;
    }
    if (!username.trim()) {
      showMessage("Username cannot be empty.", "error");
      return;
    }
    if (!password) {
      showMessage("Password cannot be empty.", "error");
      return;
    }
    if (!captchaInput.trim()) {
      showMessage("Please type the Captcha.", "error");
      return;
    }

    const normalizedCaptcha = captchaInput.replace(/\s/g, "");
    if (!/^\d+$/.test(normalizedCaptcha)) {
      showMessage("Captcha must contain only digits.", "error");
      setCaptchaInput("");
      return;
    }

    if (normalizedCaptcha !== currentRawCaptchaRef.current) {
      showMessage("Captcha mismatch. Please type correct code.", "error");
      setCaptchaInput("");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    showMessage(`Login successful! Welcome ${username}.`, "success");

    setPassword("");
    setCaptchaInput("");
    refreshCaptcha();
    setIsSubmitting(false);
  }, [
    financialYear,
    username,
    password,
    captchaInput,
    showMessage,
    refreshCaptcha,
  ]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        performLogin();
      }
    },
    [performLogin],
  );

  useEffect(() => {
    setCaptchaDisplay("2 9 9 6 9 4");
    currentRawCaptchaRef.current = "299694";
  }, []);

  return (
    <div className="login-page">
      {/* Header with emblem and title */}
      <div className="header">
        <div className="emblem"></div>
        <div className="title-section">
          <h1>Block Panchayat</h1>
          <p>Government of India</p>
        </div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <h2>Login</h2>

        <div className="field">
          <label>Financial Year</label>
          <select
            value={financialYear}
            onChange={(e) => setFinancialYear(e.target.value)}
            onKeyPress={handleKeyPress}
          >
            <option value="">- Select Financial Year -</option>
            <option value="2024-2025">2024-2025</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2022-2023">2022-2023</option>
            <option value="2025-2026">2025-2026</option>
          </select>
        </div>

        <div className="field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter username"
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter password"
          />
        </div>

        <div className="field">
          <label>Captcha</label>
          <div className="captcha-container">
            <div className="captcha-digits">{captchaDisplay}</div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type Captcha"
            />
            <button
              type="button"
              className="captcha-refresh"
              onClick={refreshCaptcha}
            >
              Get Captcha
            </button>
          </div>
        </div>

        <button
          className="login-btn"
          onClick={performLogin}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {message.text && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
