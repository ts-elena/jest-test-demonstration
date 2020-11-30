import React, { FC, useEffect, useState } from "react";
import Wizard from "../models/wizard";
import WizardCard from "./wizardCard";

const WizardsList: FC<{}> = () => {
  const [wizards, setWizards] = useState<Wizard[]>([]);
  useEffect(() => {
    fetchData().then((r) => setWizards(r));
  }, []);
  return (
    <div className="wizards-list">
      {wizards.length &&
        wizards.map((w) => <WizardCard wizard={w} key={w.name} />)}
    </div>
  );
};

export default WizardsList;

const fetchData = async (): Promise<Wizard[]> => {
  const data = await fetch(
    "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
  );
  if (data.ok) {
    return data.json();
  }
  return [];
};
