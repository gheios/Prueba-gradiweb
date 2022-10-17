import React from "react";
import { useState } from "react";

const Modal = (/* Destructuring the props object. */
{ varienteSelected, quantity, setCart, deleteZero }) => {
  return (
    <div className="modal_overley">
      <div className="modal_container">
        {/* /* A destructuring assignment.  */}
        
        <h2>
        {varienteSelected.name}</h2>
        <p>
          quantity: <strong>{quantity}</strong>
        </p>
        <p>
          color: <strong> {varienteSelected.option1}</strong>
        </p>
        <p>
          size: <strong> {varienteSelected.option2}</strong>
        </p>
        <p>
          management: <strong>{varienteSelected.inventory_management}</strong>
        </p>
        <p>
          total price:
          <strong> ${deleteZero(varienteSelected.price * quantity)}</strong>{" "}
        </p>
        <div className="model_buttonContainer">
          <button className="modal_button" onClick={/* A function that is being called when the button
          is clicked. */
          () => setCart(false)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
