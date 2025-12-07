export default function Home() {
  return (
    <main>
      <header>
        <a href="https://etic-club.net/"><img src="/img/logo.png" alt="Logo ETIC" className="logo" /></a>
      </header>
      <div>
            <label htmlFor="email">
                E-Mail<span>*</span>
            </label>
            <input
                id='email'
                type="email"
                placeholder="Enter your E-Mail"
                required
             />
        </div>
    </main>
  );
}