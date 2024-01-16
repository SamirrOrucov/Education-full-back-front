import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./BasketPage.scss";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
function BasketPage() {
  const { basket, deleteBasket } = useContext(BasketContext);
  const { wishlist, handleWishlist } = useContext(WishlistContext);

  return (
    <div className="basket">
      <div>
        <Helmet>
          <title>Basket</title>
        </Helmet>
      </div>
      <div className="basket_container">
        {basket.map((x) => (
          <div className="basket_container_cards_card">
            <i className={x.icon}></i>
            <div className="title">
              <p className="basket_container_cards_card_title">{x.title}</p>
            </div>
            <div className="description">
              <p className="basket_container_cards_card_desc">
                {x.description}
              </p>
            </div>
            <div className="operations">
              <i onClick={() => deleteBasket(x)} class="fa-solid fa-xmark"></i>
              {wishlist.some((item) => item._id === x._id) ? (
                <i
                  onClick={() => handleWishlist(x)}
                  class="fa-solid fa-heart red"
                ></i>
              ) : (
                <i
                  onClick={() => handleWishlist(x)}
                  class="fa-solid fa-heart "
                ></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketPage;
