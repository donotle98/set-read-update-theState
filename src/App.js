import React from "react";
import HelloWorld from "./helloWorld/HelloWorld";
import Bomb from "./bomb/Bomb";
import RouletteGun from "./rouletteGun/RouletteGun";

function App() {
  return (
    <div>
      <section className="hello-world">
        <HelloWorld />
      </section>
      <section className="bomb">
        <Bomb />
      </section>
      <section className="roulette-gun">
        <RouletteGun />
      </section>
    </div>
  );
}

export default App;
