import logo from "../assets/logo.png";
import user from "../assets/user.jpg";
import menu from "../assets/menu.png";

const Nav = () => {
  return (
    <div className="row" style={{ borderBottom: "1px solid #a1a1a1" }}>
      <div className="col">
        <img
          src={logo}
          alt="logo"
          style={{ width: "230px", height: "47px", margin: "5px" }}
        />
      </div>

      <div
        className="col col-md-2 d-none d-sm-block d-md-none d-lg-block"
        style={{ margin: "auto" }}
      >
        <h5
          style={{
            textAlign: "right",
            margin: "0",
            color: "gray",
            fontWeight: "500",
            fontSize: "15px",
          }}
          className=""
        >
          Carlos Gómez
        </h5>
        <h6
          style={{
            textAlign: "right",
            margin: "0",
            color: "gray",
            fontSize: "12px",
          }}
        >
          Gerente de relación
        </h6>
      </div>
      <div
        className="col col-md-1 d-none d-sm-block d-md-none d-lg-block"
        style={{ margin: "auto" }}
      >
        <img
          src={user}
          alt="user"
          style={{ borderRadius: "50px", height: "40px", width: "40px" }}
        />{" "}
      </div>

      <div className="col col-md-1 d-xl-none" style={{ margin: "auto" }}>
        <img src={menu} alt="menu" style={{ height: "20px", width: "20px" }} />
      </div>
    </div>
  );
};

export default Nav;
