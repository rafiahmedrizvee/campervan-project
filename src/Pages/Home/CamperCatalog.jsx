import React from "react";
import vanImage from "../../assets/images/landing page picture/campervan.png"; // use your van image

const labels = [
  {
    id: 1,
    text: "Solar Panel (200—300 W)\n€160 — €300",
    top: "8%",
    left: "18%",
  },
  {
    id: 2,
    text: "Roof Rack\n€250 — €500",
    top: "10%",
    right: "18%",
  },
  {
    id: 3,
    text: "Solar Panel (200—300 W)\nPrice: €160 — €300",
    top: "28%",
    right: "8%",
  },
  {
    id: 4,
    text: "Overhead Storage\n€300 — €6000",
    top: "40%",
    left: "6%",
  },
  {
    id: 5,
    text: "2-Burner Gas Stove\n€150 — €300",
    top: "52%",
    left: "40%",
  },
  {
    id: 6,
    text: "Wooden Floor Platform\n€300 — €6000",
    top: "70%",
    left: "12%",
  },
  {
    id: 7,
    text: "Leisure Battery\n€200 — €400",
    bottom: "10%",
    left: "28%",
  },
  {
    id: 8,
    text: "External Power Socket\n€50 — €100",
    bottom: "8%",
    right: "25%",
  },
  {
    id: 9,
    text: "Portable Toilet\n€100 — €150",
    top: "70%",
    right: "8%",
  },
];

const CamperCatalog = () => {
  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <p className="subtitle">Explore Camper Van</p>
        <h2>Take Look at Our Catelog</h2>
        <p className="description">
          Explore The Camperstore Catalogue For Essential Campervan
          Accessories And Van Life Upgrades—Available With EU-Wide Delivery.
        </p>
      </div>

      <div className="catalog-image-wrapper">
        <img src={vanImage} alt="Camper Van" className="van-image" />

        {labels.map((label) => (
          <div
            key={label.id}
            className="catalog-label"
            style={label}
          >
            <div className="plus-icon">+</div>
            <div className="tooltip">
              {label.text.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CamperCatalog;