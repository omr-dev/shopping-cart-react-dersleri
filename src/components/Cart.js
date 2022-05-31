import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCart, remove, oneMore, oneLess } from "../cartSlice";

const Cart = () => {
  const booksInCart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>
      {booksInCart.map((book, index) => {
        return (
          <div className="book" key={index}>
            <img src={book.image} alt={book.title} />
            <div>
              <h4>{book.title}</h4>
              <p>Yazar: {book.price}</p>
              <p>Fiyat: &#8378;{book.price}</p>
              <p>Toplam: &#8378;{book.price * book.qty}</p>
              <p>Sepetinizde bu kitaptan toplam {book.qty} adet var.</p>
              <button
                disabled={book.qty < 2}
                onClick={() => {
                  dispatch(oneLess(book.id));
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  dispatch(remove(book.id));
                }}
              >
                Sepetten Çıkar
              </button>
              <button
                onClick={() => {
                  dispatch(oneMore(book.id));
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
