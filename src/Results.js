import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./styles.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div>
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
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
