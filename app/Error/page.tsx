import Image from "next/image";

export default function Error() {
  return (
    <main>
      <header>
        <a href="https://etic-club.net/"><img src="/img/logo.png" alt="Logo ETIC" className="logo" /></a>
      </header>
      <div className="success-card">
        <h1 className="color-red">Error</h1>
        <p className="color-red paragraph">E-Mail entery failed.</p>
      </div>
    </main> 
  );
}
