import React from "react";
import "./styles.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p className="boldSynonym">{props.synonyms}</p>
      </div>
    );
  } else {
    return null;
  }
}
