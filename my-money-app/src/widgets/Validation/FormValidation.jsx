import React from "react";

function FormValidation(props) {
  return (
    <div class="text-danger fadeDrop">
      <small>{props.message}</small>
    </div>
  );
}
export default FormValidation
