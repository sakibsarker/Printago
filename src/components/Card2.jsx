import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Card2 = ({ obj }) => {
  const { mode } = useSelector((state) => state.auth);
  return (
    <div
      style={{ width: "260px", margin: "auto", fontSize: "1rem" }}
      className="d-flex flex-column align-items-center"
    >
      <Link to={`/category?val=All`} style={{ textDecoration: "none" }}>
        <div className="card-2 card-max-height">
          <h2 className="shop-card-title">{obj?.title1}</h2>
          <div className="my-2">
            <h4 className="shop-card-subtitle">{obj.subTitle1}</h4>
            <p className="shop-card-para first-para">{obj.para1}</p>
            <p className="shop-card-para">{obj.para2}</p>
          </div>
          <div className="my-2">
            <h4 className="shop-card-subtitle">{obj.subTitle2}</h4>
            <p className="shop-card-para first-para">{obj.para3}</p>
            <p className="shop-card-para">{obj.para4}</p>
          </div>
          <div className="my-2">
            <h4 className="shop-card-subtitle">{obj.subTitle3}</h4>
            <p className="shop-card-para first-para">{obj.para5}</p>
          </div>
          <h4 className="shop-card-price">{obj?.price}</h4>
        </div>
      </Link>
      <Link to={`/category?val=All`} style={{ textDecoration: "none" }}>
        <Button
          className="px-2 py-1 text-decoration-none"
          style={{
            marginTop: "1em",
            display: "inline-block",
            fontSize: "1.25rem",
            lineHeight: "1.4em",
            borderRadius: "8px",
            color: "white",
            backgroundColor: mode === "dark" ? "#3B3C1B" : "#3B3C1B",
          }}
        >
          AUSWÄHLEN
        </Button>
      </Link>
    </div>
  );
};

export default Card2;
