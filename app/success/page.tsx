import Image from "next/image";

export default function Success() {
  return (
    <main>
      <header>
        <a href="https://etic-club.net/"><img src="/img/logo.png" alt="Logo ETIC" className="logo" /></a>
      </header>
      <div className="success-card">
        <h1 className="color-green">Success</h1>
        <p className="color-green paragraph">E-Mail entered successfully.</p>
      </div>
    </main> 
  );
}
