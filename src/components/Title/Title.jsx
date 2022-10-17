import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Modal from "../Modal/Modal";

const Title = ({ data }) => {
  const [colorSelected, setcolorSelected] = useState("");
  const [variantes, setvariantes] = useState([]);
  const [varienteSelected, setvarienteSelected] = useState({});
  const [quantity, setquantity] = useState(0);
  const [Cart, setCart] = useState(false);

  useEffect(() => {
    const variantesTemp = data.variants
      ?.filter((e) => e.option1 === colorSelected)
      .map((element) => {
        return { ...element, selectClass: "title_size" };
      });

    setvariantes(variantesTemp);
  }, [colorSelected]);

  useEffect(() => {
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

  const agregarpunto = (number) => {
    let num = number?.toString();
    let arr = num?.split("");
    let total = arr;
    total?.splice(-2, 0, ".");
    let toString = total?.join("");
    return toString;
  };
  const deleteZero = (number) => {
    let num = number?.toString();
    let arr = num?.split("");
    let total = arr;
    total?.pop(0);
    total?.pop(0);
    let toString = total?.join("");
    return toString;
  };

  const cleanText = (string) => {
    string?.replace(/<\/span>/i, " ");
    return string;
  };

  const seleccionarSize = (value) => {
    if (value) {
      setvarienteSelected(value);
    }
  };
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
  const rest = () => {
    if (quantity > 0) {
      setquantity(quantity - 1);
    }
  };
  const sum = () => {
    setquantity(quantity + 1);
  };

  const addCart = () => {};
  return (
    <div className="title_container">
      <p className="title_colaboration">by Nike x Alyx</p>
      <h1>{data.title}</h1>
      <div className="title_priceContainer">
        <p className="title_priceNow"> $ {agregarpunto(data.price)} </p>{" "}
        <p className="title_priceAfter">
          $ {agregarpunto(data.compare_at_price_max)}{" "}
        </p>
      </div>
      <div className="title_line"></div>
      <form>
        <div className="title_colorContainer">
          <label className="title_colorLabel">
            <p>Color :</p>{" "}
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
          <button onClick={rest}>
            <AiOutlineMinus size={15} />
          </button>
          <p>{quantity}</p>
          <button onClick={sum}>
            <AiOutlinePlus size={15} />
          </button>
        </div>
        <div className="title_totalPriceContainer">
          <p> Total price: </p>
          <strong> $ {deleteZero(data.price * quantity)}</strong>
        </div>
      </div>

      <div className="title_buttonsContainer">
        <button className="title_addFav">Add to favourite</button>
        <button onClick={() => setCart(true)} className="title_addCart">
          Add to cart
        </button>
      </div>
      <div className="title_descriptionContainer">
        <p className="title_description">{cleanText(data?.description)}</p>
      </div>
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
