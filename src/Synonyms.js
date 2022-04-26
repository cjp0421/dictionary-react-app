import React from "react";
import "./styles.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p>Synonyms:</p>
        {props.synonyms.map(function (synonym, index) {
          return (
            <div>
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
