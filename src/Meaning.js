import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div>
            <h3>{props.meaning.partOfSpeech}</h3>
            <div key={index}>
              <p>{definition.definition}</p>
              <p className="exampleSentence">{definition.example}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
