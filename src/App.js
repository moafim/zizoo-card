import React from "react";
import Card from "./components/Card";
import boatImage from "./assets/img/boat/boat-image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card
        recommend
        hot
        viewCount={69}
        reviewCount={3}
        length={12.04}
        cabin={4}
        guest={10}
        currency="€"
        price={1083.0}
        period="weekly"
        image={boatImage}
        title="Jeannau Sun Odyssey 45.2"
        year={2011}
        location="Split, Croatia"
        tags={["Sicherungsshein", "Luxury"]}
        extras={"AirCon, WiFi, Very Long Extra Description"}
        saleType="Rolling Mainsail"
        directBook
      />
    </div>
  );
}

export default App;
