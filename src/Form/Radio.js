import React from "react";

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: "2rem",
        marginTop: "2rem",
        marginBottom: "1rem",
        border: "2px solid #eee",
      }}
    >
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input
            type="radio"
            checked={value === option}
            id={id}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
