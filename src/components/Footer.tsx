import { Link } from "react-router-dom"; // використовується для навігації

const Footer = () => {
  return (
    <footer className="footer">
      <p>Ми разом, і кожна мить має значення.</p>
      {/* Кнопка переходу до галереї */}
      <Link to="/gallery" className="link-button">
        Переглянути фотографії
      </Link>
    </footer>
  );
};

export default Footer;
