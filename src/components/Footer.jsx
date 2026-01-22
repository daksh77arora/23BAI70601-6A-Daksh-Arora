export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} CU AIML - Experiment 1</p>
        <p>Built with React | Deployed with Git</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a>
        </div>
      </div>
    </footer>
  );
}