import React, { useState } from 'react';
import { Checkbox, Rating } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterAccordion = ({ name, choices }) => {
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleCheckboxChange = (choice) => {
    setSelectedChoice((prevChoice) => (prevChoice === choice ? "" : choice));
  };

  const renderChoiceContent = (choice) => {
    if (name === "Ratings") {
      return choice === "All" ? "All" : <Rating name="read-only" value={parseInt(choice, 10)} readOnly />;
    } else {
      return choice;
    }
  };

  return (
    <Accordion
      sx={{
        width: "100%",
        background: "var(--section-color-css)",
        color: "var(--color-text-2-css)",
        boxShadow: "none",
        border: "1px solid var(--color-border-css)",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "var(--color-text-2-css)" }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {name}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-col gap-1">
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-1 cu">
              <input
                id={`inStock-${name}-${index}`}
                className="border-white-400/20 scale-100 transition-all duration-500 ease-in-out hover:scale-110 checked:scale-100 w-4 h-4"
                type="checkbox"
                checked={selectedChoice === choice}
                onChange={() => handleCheckboxChange(choice)}
              />
              <label htmlFor={`inStock-${name}-${index}`} className="text-colorText2">
                {renderChoiceContent(choice)}
              </label>
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
