import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "../index.css";

function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
