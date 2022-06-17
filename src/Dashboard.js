import App from "./App";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

const Dashboard = () => {
  return (
    <div className="conten">
      <div className="conten__nav">
        <Nav />
      </div>
      <div className="conten__app">
        <App />
      </div>
      <div className="conten__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
