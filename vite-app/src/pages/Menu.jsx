import React, { useState, useEffect } from "react";
import axios from "axios";
import  ProductList  from "../components/ProductCard/ProductList";
import { Cart } from "../components/Cart/Cart";
import { IoCartOutline } from "react-icons/io5";
import { VscCoffee } from "react-icons/vsc";
import { GiTacos } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

function Menu() {
  const [Menu, setMenu] = useState([]);
  const [filter, setFilter] = useState(null);
  const [cartMobile, setCartMobile] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = filter
          ? await axios.get(`/api/get-menu/${filter}`)
          : await axios.get('/api/get-menu');

          setMenu(response.data);
          console.log(response.data);
      } catch (error) {
        console.error(error)
      }
    } 
    fetchData();
  }, [filter]);

  const handleFilter = (id) => {
    setFilter(id);
  };


  return (
    <div className="pt-24 bg-[#f5f5ef]">
      <div className="flex lg:flex-row max-md:flex-col">
        <div className={`w-1/3 max-md:absolute max-md:-left-[100%] max-md:w-full`}>
          <Cart />
          <button></button>
        </div>
        <div className="w-auto md:w-full max-md:mt-32">
          <ProductList products={Menu} />
        </div>
        <div className="w-2/5 max-md:fixed max-md:w-full">
          <div className="m-2 bg-white shadow-lg flex flex-col border-1 rounded-lg">
            <h2 className="m-2 font-bold text-center text-xl">MENU</h2>
            <div className="m-2 border-2 rounded-lg flex flex-col max-md:flex-row">
              <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter(null)}><IoFastFoodOutline className="mx-2"/><p>ALL MENU</p></button>
              <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter("coffee")}><VscCoffee className="mx-2"/><p>COFFEE</p></button>
              <button className="p-2 w-full hover:bg-slate-200 flex flex-row" onClick={() => handleFilter("meals")}><GiTacos className="mx-2"/><p>WRAPS</p></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;