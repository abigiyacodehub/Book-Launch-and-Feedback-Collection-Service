import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pages = [
  {
    id: "home",
    label: "Home",
    eyebrow: "Book 1",
    title: "A Call To Be Good Soldier Of Christ",
    subtitle:
      "A bilingual launch portal for the translated book and Constant YA Prayer Service.",
    action: "Register Interest"
  },
  {
    id: "about",
    label: "About",
    eyebrow: "Mission",
    title: "A book launch rooted in prayer and discipleship",
    subtitle:
      "Share the story behind the translation, the heart of the ministry, and the invitation for young adults to grow together.",
    action: "Read the Story"
  },
  {
    id: "register",
    label: "Register",
    eyebrow: "Join Us",
    title: "Collect service signups and book requests",
    subtitle:
      "Capture name, age, phone number, and interest in the YA service or the book with a secure backend form.",
    action: "Open Form"
  },
  {
    id: "gallery",
    label: "Gallery",
    eyebrow: "Media",
    title: "Approved feedback and sermon highlights",
    subtitle:
      "Show moderated reader responses, launch photos, and YouTube sermon links for the community.",
    action: "View Gallery"
  },
  {
    id: "contact",
    label: "Contact",
    eyebrow: "Connect",
    title: "Make the next step easy",
    subtitle:
      "Add location details, Telegram and Instagram links, and clear ways to reach the Constant YA team.",
    action: "Contact Team"
  }
];

function App() {
  const [activePageId, setActivePageId] = useState("home");
  const activePage = useMemo(
    () => pages.find((page) => page.id === activePageId) || pages[0],
    [activePageId]
  );

  return (
    <main className={`app page-${activePage.id}`}>
      <div className="background" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setActivePageId("home")}>
          Constant YA
        </a>
        <nav className="nav" aria-label="Primary pages">
          {pages.map((page) => (
            <button
              className={page.id === activePage.id ? "nav-button active" : "nav-button"}
              key={page.id}
              onClick={() => setActivePageId(page.id)}
              type="button"
            >
              {page.label}
            </button>
          ))}
        </nav>
      </header>

      <section className="content" aria-live="polite" aria-labelledby="page-title">
        <p className="eyebrow">{activePage.eyebrow}</p>
        <h1 id="page-title">{activePage.title}</h1>
        <p className="lead">{activePage.subtitle}</p>
        <button className="primary-action" type="button">
          {activePage.action}
        </button>
      </section>

      <aside className="page-card" aria-label={`${activePage.label} preview`}>
        <span>0{pages.findIndex((page) => page.id === activePage.id) + 1}</span>
        <strong>{activePage.label}</strong>
      </aside>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
