import React from "react";
import Meaning from "./Meaning";
import "./styles.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <br />
        <h2>{props.results[0].word}</h2>
        <p>{props.results[0].phonetics[0].text}</p>

        {props.results[0].meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
