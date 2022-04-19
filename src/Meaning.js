import React from "react";
import "./styles.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definitions">
            <h3>{props.meaning.partOfSpeech}</h3>
            <div key={index}>
              <p>{definition.definition}</p>
              <p className="exampleSentence">{definition.example}</p>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
