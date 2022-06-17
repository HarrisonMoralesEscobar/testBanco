import aval from "../assets/aval.png";

const Footer = () => {
  return (
    <div class="row">
      <div
        class="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-lg-end flex-lg-column"
        style={{ marginBottom: "15px", height: "200px" }}
      >
        <div class="mt-auto p-2">
          <img src={aval} style={{ width: "250", height: "50px" }} alt="aval" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
