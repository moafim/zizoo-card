import React from "react";
import Card from "./components/Card";
import boatImage from "./assets/img/boat/boat-image.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card
        image={boatImage}
        title="Jeannau Sun Odyssey 45.2"
        year="2011"
        location="Split, Croatia"
      />
    </div>
  );
}

export default App;
