import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove, oneMore, oneLess } from "../cartSlice";
import { data } from "../data";

const Products = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {data.map((book, index) => {
        return (
          <div className="book" key={index}>
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
              <button
                onClick={() => {
                  dispatch(
                    add({
                      ...book,
                      qty: 1,
                    })
                  );
                }}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
