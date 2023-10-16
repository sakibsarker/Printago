import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import Card2 from "./Card2";

const arr = [
  {
    text1: "KÖRPERGRÖßE",
    text2: "VON 62 cm",
    text3: "BIS 95 cm",
    text4: "MAßGESCHNEIDERTE",
    text5: "BABY-KLEINKIND",
    text6: "BEKLEIDUNG",
    price: "ab 16€",
  },
  {
    text1: "KÖRPERGRÖßE",
    text2: "VON 96 cm",
    text3: "BIS 152 cm",
    text4: "MAßGESCHNEIDERTE",
    text5: "BEKLEIDUNG",
    price: "ab 32€",
  },
  {
    text1: "KÖRPERGRÖßE",
    text2: "VON 153 cm",
    text3: "BIS 220 cm",
    text4: "MAßGESCHNEIDERTE",
    text5: "BEKLEIDUNG",
    price: "ab 50€",
  },
  {
    title1: "HOMEARTIKEL",
    subTitle1: "BETTWÄSCHE",
    para1: "Normalgröße: 135 x 200 cm",
    para2: "Doppelbett: 180x200 cm",
    subTitle2: "KISSEN",
    para3: "2x Kissenbezüge 80 x 80 cm",
    para4: "2x Kissenbezüge 40 x 80 cm",
    subTitle3: "GARDINEN",
    para5: "2 Gardinenschals, 145x250 cm",
    price: "ab 50€",
  },
];

const Cards = () => {
  return (
    // <div className="pb-5">
    <>
      <div className="flex-500">
        <div className="my-3">
          <Card obj={arr[0]} />
        </div>
        <div className="my-3">
          <Card obj={arr[1]} />
        </div>
      </div>
      <div className="flex-500">
        <div className="my-3">
          <Card obj={arr[2]} />
        </div>
        <div className="my-3">
          <Card2 obj={arr[3]} />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Cards;
