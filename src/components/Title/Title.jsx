import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
/* Importing the Modal component from the Modal folder. */
import Modal from "../Modal/Modal";

const Title = ({ data }) => {
  const [colorSelected, setcolorSelected] = useState("");
  const [variantes, setvariantes] = useState([]);
  const [varienteSelected, setvarienteSelected] = useState({});
  const [quantity, setquantity] = useState(0);
  const [Cart, setCart] = useState(false);

  useEffect(() => {
    /* Filtering the variants array by the color selected and adding a class to each element. */
    const variantesTemp = data.variants
      ?.filter((e) => e.option1 === colorSelected)
      .map((element) => {
        return { ...element, selectClass: "title_size" };
      });

    setvariantes(variantesTemp);
  }, [colorSelected]);

  useEffect(() => {
    /* Changing the class of the element that is selected. */
    const variantesStyle = variantes?.map((element) => {
      if (element.id === varienteSelected.id) {
        element.selectClass = "selected";
      } else {
        element.selectClass = "title_size";
      }

      return element;
    });

    setvariantes(variantesStyle);
  }, [varienteSelected]);

  /**
   * It takes a number, converts it to a string, splits it into an array, adds a dot to the array, joins
   * the array back into a string, and returns the string.
   * @returns A function that takes a number and returns a string with a dot in the middle.
   */
  const agregarpunto = (number) => {
    let num = number?.toString();
    let arr = num?.split("");
    let total = arr;
    total?.splice(-2, 0, ".");
    let toString = total?.join("");
    return toString;
  };
  /**
   * It takes a number, converts it to a string, splits it into an array, removes the first two
   * elements of the array, joins the array back into a string, and returns the string.
   * @returns the string of the number without the first two digits.
   */
  const deleteZero = (number) => {
    let num = number?.toString();
    let arr = num?.split("");
    let total = arr;
    total?.pop(0);
    total?.pop(0);
    let toString = total?.join("");
    return toString;
  };

  /**
   * It takes a string, replaces all instances of &lt;/span&gt; with a space, and returns the string.
   * @returns The string is being returned.
   */
  const cleanText = (string) => {
    string?.replace(/<\/span>/i, " ");
    return string;
  };

  /**
   * If the value is true, then set the varienteSelected to the value.
   */
  const seleccionarSize = (value) => {
    if (value) {
      setvarienteSelected(value);
    }
  };
  /**
   * If the user has selected a radio button, then set the colorSelected state to the value of the
   * radio button.
   */
  const click = () => {
    if (
      document.querySelector('input[name="activo"]:checked') &&
      document.querySelector('input[name="activo"]:checked').value
    ) {
      const activo = document.querySelector(
        'input[name="activo"]:checked'
      ).value;
      setcolorSelected(activo);
    }
  };
  /**
   * If the quantity is greater than 0, then subtract 1 from the quantity.
   */
  const rest = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };

  /**
   * The sum function is a constant that is set to a function that adds one to the quantity state.
   */
  const sum = () => {
    setquantity(quantity + 1);
  };

  const addCart = () => {};
  return (
    <div className="title_container">
      <p className="title_colaboration">by Nike x Alyx</p>
      {/* /* Displaying the title of the product.  */}
      <h1>{data.title}</h1>
      <div className="title_priceContainer">
         <p className="title_priceNow"> $ {agregarpunto(data.price)} </p> 
        {/* Displaying the price of the product.  */}
        <p className="title_priceAfter">
          $ {agregarpunto(data.compare_at_price_max)}{" "}
        </p>
      </div>
      <div className="title_line"></div>
      <form>
        <div className="title_colorContainer">
          <label className="title_colorLabel">
            <p>Color :</p>
          </label>
          <label className="title_customBtn" onClick={click} id="btn" for="Red">
            <input type="radio" id="Red" value="Red" name="activo" />
            <span className="checkmark" id="Red" name="Red"></span>
          </label>
          <label
            className="title_customBtn"
            onClick={click}
            id="btn"
            for="Black"
          >
            <input type="radio" id="Black" value="Black" name="activo" />
            <span className="checkmark" id="Black" name="Black"></span>
          </label>
          <label
            className="title_customBtn"
            onClick={click}
            id="btn"
            for="White"
          >
            <input type="radio" id="White" value="White" name="activo" />
            <span className="checkmark" id="White" name="White"></span>
          </label>
        </div>
      </form>
      <div className="title_line2"></div>
      <div>
        <form className="title_formContainer">
          <div className="title_sizeContain">
            <p className="title_sizep">Size: </p>
          </div>
          <div>
            <div>
              <ul className="title_variantsContainer">
                {/* /* Checking if the length of the variantes array is greater than
                0. If it is, then it is mapping over the array and returning a
                list item for each element in the array. If the length of the
                array is not greater than 0, then it is returning a paragraph
                that says "seleccione un color".  */}
                {variantes?.length > 0 ? (
                  variantes?.map((e) => (
                    <li
                      onClick={() => seleccionarSize(e)}
                      key={e.id}
                      className={`${e.selectClass}`}
                    >
                      {e.option2}
                    </li>
                  ))
                ) : (
                  <p className="title_colorNoSelected">seleccione un color</p>
                )}
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div className="title_line3"></div>
      <div className="title_quantityContainer">
        <div className="title_count">
          {/* /* Creating a button that when clicked, it will call the rest
          function.  */}
          <button onClick={rest}>
            <AiOutlineMinus size={15} />
          </button>
          <p>{quantity}</p>
          {/* /* Creating a button that when clicked, it will call the sum function.
          */ }
          <button onClick={sum}>
            <AiOutlinePlus size={15} />
          </button>
        </div>
        <div className="title_totalPriceContainer">
          <p> Total price: </p>
          <strong>
            $
            {/* /* Taking the price of the product and multiplying it by the
            quantity. Then it is taking the number and calling the deleteZero
            function on it. The deleteZero function is taking the number and
            converting it to a string, splitting it into an array, removing the
            first two elements of the array, joining the array back into a
            string, and returning the string. */ }
            {deleteZero(data.price * quantity)}
          </strong>
        </div>
      </div>
      <div className="title_buttonsContainer">
        <button className="title_addFav">Add to favourite</button>
        <button
          onClick={() => /* Setting the Cart state to true. */ setCart(true)}
          className="title_addCart"
        >
          Add to cart
        </button>
      </div>
      <div className="title_descriptionContainer">
        <p className="title_description">
          {/* /* Taking the description of the product and calling the cleanText
          function on it. The cleanText function is taking the description and
          replacing all instances of &lt;/span&gt; with a space, and returning
          the string. */ }
          {cleanText(data?.description)}
        </p>
      </div>
      {/* /* Checking if the Cart state is true. If it is, then it is returning the
      Modal component. If it is not, then it is returning an empty fragment. */ }
      {Cart === true ? (
        <Modal
          varienteSelected={varienteSelected}
          quantity={quantity}
          Cart={Cart}
          setCart={setCart}
          deleteZero={deleteZero}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Title;
