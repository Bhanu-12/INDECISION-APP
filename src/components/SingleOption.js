import React from "react";

// passing singledelete in indecisonApp to options to option.which handle every single option.
const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleSingleDelete(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;