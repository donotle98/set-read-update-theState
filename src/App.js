import React from "react";
import HelloWorld from "./helloWorld/HelloWorld";
import Bomb from "./bomb/Bomb";
import RouletteGun from "./rouletteGun/RouletteGun";
import Sections from "./accordion/Sections";
import Accordian from "./accordion/Accordian";
import TabsProps from "./tabs/TabsProps";
import Tabs from "./tabs/Tabs";

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
      <section className="accordian">
        <Accordian sections={Sections} />
      </section>
      <section className="tabs">
        <Tabs tabs={TabsProps} />
      </section>
    </div>
  );
}

export default App;
