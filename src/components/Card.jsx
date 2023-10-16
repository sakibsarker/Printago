import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Card = ({ obj }) => {
  const { mode } = useSelector((state) => state.auth);
  return (
    <div
      style={{ width: "240px", margin: "auto", fontSize: "1rem" }}
      className="d-flex flex-column align-items-center"
    >
      <Link to={`/category?val=All`} style={{ textDecoration: "none" }}>
        <div className="card-1 card-max-height">
          <p className="first-p">{obj?.text1}</p>
          <div className="mid-ps">
            <p className="next-p">
              {obj?.text2.split(" ")[0]}{" "}
              <strong>{obj?.text2.split(" ")[1]}</strong>{" "}
              {obj?.text2.split(" ")[2]}
            </p>
            <p className="third-p">
              {obj?.text3.split(" ")[0]}{" "}
              <strong>{obj?.text3.split(" ")[1]}</strong>{" "}
              {obj?.text3.split(" ")[2]}
            </p>
          </div>
          <div className="bottom-ps">
            <p className="forth-p">{obj?.text4}</p>
            <p className="fifth-p">{obj?.text5}</p>
            <p className="sixth-p">{obj?.text6}</p>
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
            lineHeight: "1.75rem",
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

export default Card;
