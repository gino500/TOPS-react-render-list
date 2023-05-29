import React, { Component } from "react";

const Overview = props => {
  const inputs = props.input;

  return (
    <ul>
      {inputs.map(input => {
        return <li key={input}>{input}</li>;
      })}
    </ul>
  );
};

export default Overview;
