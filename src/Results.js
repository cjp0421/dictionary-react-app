import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./styles.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results.word);
    return (
      <div className="Results">
        <h2 className="wordDisplay">{props.results.word}</h2>
        <div className="phoneticDisplay">
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="phonetic-div" key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="meaningDisplay" key={index}>
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
