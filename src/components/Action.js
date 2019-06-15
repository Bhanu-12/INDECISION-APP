import React from "react";

const Action = props => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handleChoice}
        disabled={props.hasOptions}
        autoFocus
      >
        What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handleChoice}
//           disabled={this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

export default Action;
