import "./Header.css";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1>TaskFlow</h1>
          <p>Manage your tasks, stay organized.</p>
        </div>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;
