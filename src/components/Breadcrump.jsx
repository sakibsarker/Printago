import { Breadcrumb } from "react-bootstrap";

const Breadcrump = ({ arr }) => {
  return (
    <Breadcrumb
      className="w-50 border rounded d-flex align-items-center px-4 mb-5"
      style={{ backgroundColor: "#fff" }}
    >
      {arr.map((item, idx) =>
        idx === arr.length - 1 ? (
          <p className="text-secondary mb-0 mt-3">
            &nbsp;&nbsp;/&nbsp;&nbsp;{item}
          </p>
        ) : (
          <Breadcrumb.Item className="mt-3" href="/">
            {item}
          </Breadcrumb.Item>
        )
      )}
    </Breadcrumb>
  );
};

export default Breadcrump;
