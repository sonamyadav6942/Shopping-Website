import React, { useState } from "react";
import categories from "./categories.json";
import "./Section.css";
import ExpandableList from "./Expandable";

const Section = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isElecPanelOpen, setIsElecPanelOpen] = useState(false);
  const [fashion, setFashion] = useState("");
  const [fashionDetails, setFashionDetails] = useState([]);
  const [electronicDetails, setElectronicDetails] = useState([]);
  const handleMouseEnter = () => {
    console.log("mouse", categories, fashion);
    setFashion("Fashion");
    categories.categories.map((categories) => {
      console.log(categories);
      if (categories.name == "Fashion") {
        setFashionDetails(categories.subcategories);
      }
    });
    console.log("categories--1", fashionDetails);
    setIsPanelOpen(true);
    setIsElecPanelOpen(false);
  };
  const handleMouseEnterElectronics = () => {
    console.log("mouse", categories, fashion);
    setFashion("Fashion");
    categories.categories.map((categories) => {
      console.log(categories);
      if (categories.name == "Electronics") {
        setElectronicDetails(categories.subcategories);
      }
    });
    console.log("categories--2", electronicDetails);
    setIsElecPanelOpen(true);
    setIsPanelOpen(false);
  };
  const handleMouseLeave = () => {
    console.log("on_mouse");
    setIsPanelOpen(false);
  };
  const handleMouseLeaveElec = () => {
    console.log("on_mouse");
    setIsElecPanelOpen(false);
  };
  return (
    <section className="section">
      <div className="section-container">
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100"
            alt="Top Offers"
          />
          Top Offers
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100"
            alt="Mobiles & Tablets"
          />
          Mobiles
        </div>
        <div
          className="section-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/a11d5d13e54bf964.png?q=100"
            alt="Fashion"
          />
          Fashion
          <div>
            {isPanelOpen && (
              <div className="panel-content">
                {/* Content of the expandable panel */}
                <ExpandableList
                  categories={categories}
                  value={fashionDetails}
                />
              </div>
            )}
          </div>
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100"
            alt="Home & Furniture"
          />
          Home
        </div>
        <div
          className="section-item"
          onMouseEnter={handleMouseEnterElectronics}
          onMouseLeave={handleMouseLeaveElec}
        >
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100"
            alt="Electronics"
          />
          Electronics
          <div>
            {isElecPanelOpen && (
              <div className="panel-content">
                {/* Content of the expandable panel */}
                <ExpandableList
                  categories={categories}
                  value={electronicDetails}
                />
              </div>
            )}
          </div>
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100"
            alt="TVs & Appliances"
          />
          Appliances
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100"
            alt="Grocery"
          />
          Grocery
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100"
            alt="Beauty"
          />
          Beauty and Toys
        </div>
        <div className="section-item">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100"
            alt="Flights"
          />
          Flights
        </div>
      </div>
    </section>
  );
};

export default Section;

//
