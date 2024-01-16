import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext';
import { Helmet } from 'react-helmet-async';
import { BasketContext } from '../../context/basketContext';
import "./Wishlist.scss"
function Wishlist() {
    const { wishlist, handleWishlist } = useContext(WishlistContext);
    const {addBasket} = useContext(BasketContext)
    return (
      <div className="wishlist">
        <div>
          <Helmet>
            <title>wishlist</title>
          </Helmet>
        </div>
        <div className="wishlist_container">
          {wishlist.map((x) => (
            <div className="wishlist_container_cards_card">
              <i className={x.icon}></i>
              <div className="title">
                <p className="wishlist_container_cards_card_title">{x.title}</p>
              </div>
              <div className="description">
                <p className="wishlist_container_cards_card_desc">
                  {x.description}
                </p>
              </div>
              <div className="operations">
                <i onClick={() => handleWishlist(x)} class="fa-solid fa-xmark"></i>
                <i onClick={() => addBasket(x)} class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Wishlist