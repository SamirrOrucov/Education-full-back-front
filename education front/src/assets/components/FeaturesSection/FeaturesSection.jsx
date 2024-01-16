import React, { useContext, useEffect, useState } from "react";
import "./FeaturesSection.scss";
import { BasketContext } from "../../context/basketContext";
import "./FeaturesSection.scss"
import { WishlistContext } from "../../context/WishlistContext";
function FeaturesSection() {
    const [dbData, setDbData] = useState([])
    const {addBasket} = useContext(BasketContext)
    const {wishlist,handleWishlist} = useContext(WishlistContext)
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState(null)

    async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data=await result.json()
    setDbData(data)
  }
  useEffect(() => {
   getFetch()
  }, [])
  
  return (
    <div className="features">
        <input type="text" name="" id="" placeholder="Search.." onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={()=>setSortBy({field:"title",asc:true})}>A-z</button>
        <button onClick={()=>setSortBy({field:"title",asc:false})}>Z-a</button>
        <button onClick={()=>setSortBy(null)}>Default</button>

      <div className="features_container">
        <h6>Features That Make Us Hero</h6>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
        <div className="features_container_cards">
          {
            dbData
            .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a,b) =>{
                if (!sortBy) {
                    return 0
                }
                else if(sortBy.asc){
                  return  (a[sortBy.field] > b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
                }
                else if(sortBy.asc=== false){
                  return  (a[sortBy.field] < b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
                }
            })

            
            .map((x)=>
            <div className="features_container_cards_card">
            <i className={x.icon}></i>
            <div className="title">{x.title}</div>
            <div className="description">
                {x.description}
            </div>
            <div className="operations">
            <i onClick={()=>addBasket(x)} class="fa-solid fa-cart-shopping"></i>
            {
                wishlist.some((item)=>item._id===x._id)?
                <i onClick={()=>handleWishlist(x)} class="fa-solid fa-heart red"></i>:
                <i onClick={()=>handleWishlist(x)} class="fa-solid fa-heart "></i>
            }
            </div>

          </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
