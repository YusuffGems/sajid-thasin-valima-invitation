const PORTFOLIO_URL = "https://www.yusuffux.com";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Design and developed by{" "}
        <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          Mohammed Yusuff
        </a>
      </p>
    </footer>
  );
}
