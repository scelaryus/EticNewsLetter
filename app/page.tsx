"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailSubmit = async () => {
    const cleanEmail = email.trim();

    // Client-side validation
    if (!emailRegex.test(cleanEmail)) {
      alert("Please enter a valid E-Mail address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: cleanEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/success");
      } else {
        // Duplicate email alert 
        if (data?.error === "EMAIL_ALREADY_EXISTS") {
          alert("This email already exists.");
          setIsSubmitting(false);
        } else {
          // Any other error 
          router.push("/Error");
        }
      }
    } catch {
      router.push("/Error");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };

  return (
    <main>
      <header>
        <a href="https://etic-club.net/">
          <img src="/img/logo.png" alt="Logo ETIC" className="logo" />
        </a>
      </header>

      <div className="form-container">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#0f9f96",
              marginBottom: "0.5rem",
            }}
          >
            Stay Updated
          </h1>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Ne manquez aucune actualité du club ETIC
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="email">
            E-Mail<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your E-Mail"
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          onClick={handleEmailSubmit}
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: "16px 32px",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "18px",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            background: "linear-gradient(to right, #ff6b35, #00d9ff)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            opacity: isSubmitting ? 0.6 : 1,
          }}
        >
          {isSubmitting ? "Inscription..." : "Subscribe"}
        </button>

        <p
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          Rejoignez notre communauté et restez informé des événements,
          formations et opportunités du club ETIC
        </p>
      </div>
    </main>
  );
}
