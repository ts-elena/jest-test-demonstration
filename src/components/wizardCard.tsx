import React, { FC } from "react";
import Wizard from "../models/wizard";

interface IWizardCardProps {
  wizard: Wizard;
}

const WizardCard: FC<IWizardCardProps> = (props) => {
  const { wizard } = props;
  return (
    <div className="wizard-container">
      <div className="wizard-name">{wizard.name}</div>
      <div className="wizard-ancestry">{wizard.ancestry}</div>
      {wizard.wand.wood && (
        <div className="wizard-wand">{`Wand ${
          wizard.wand.length && `${wizard.wand.length} inches in length`
        } made of ${wizard.wand.wood} ${
          wizard.wand.core && `with a ${wizard.wand.core} core`
        }`}</div>
      )}
      {wizard.patronus && (
        <div className="wizard-patronus">
          Patronus is the {wizard.patronus} animal
        </div>
      )}
    </div>
  );
};

export default WizardCard;
