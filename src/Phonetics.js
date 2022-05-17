import React from "react";
import "./styles.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <section className="phoneticSection">
        <p>{props.phonetic.text} </p>
        {"  "}
        <a
          className="phoneticLink"
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        >
          Listen
        </a>
      </section>
    </div>
  );
}
