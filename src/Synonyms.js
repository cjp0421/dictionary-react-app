import React from "react";
import "./styles.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div>
              {" "}
              <p>Synonym:</p>
              <ul>
                <li key={index}>{synonym}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
