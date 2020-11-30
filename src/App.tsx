import React, { FC } from "react";
import "./App.css";
import WizardsList from "./components/wizardsList";

const App: FC<any> = () => {
  return (
    <div className="App">
      <WizardsList />
    </div>
  );
};

export default App;
