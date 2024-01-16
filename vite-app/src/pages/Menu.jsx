import React, { useState, useEffect } from "react";
import axios from "axios";
import  ProductList  from "../components/ProductCard/ProductList";
import { Cart } from "../components/Cart/Cart";
import { VscCoffee } from "react-icons/vsc";
import { GiTacos } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";

function Menu() {
  const [Menu, setMenu] = useState([]);
  const [filter, setFilter] = useState(null);

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
      <div className="w-full bg-[#f5f5ef] flex">
      </div>
      <div className="menu-content flex">
        <div className="basis-1/4">
          <Cart />
        </div>
        <div className="basis-3/4 flex">
          <ProductList products={Menu} />
        </div>
        <div className="relative text-4xl">
            <div className="bg-white shadow-lg fixed flex flex-col border-1 rounded-lg top-28 right-6">
              <button className="p-2 hover:bg-slate-200" onClick={() => handleFilter(null)}><IoFastFoodOutline /></button>
              <button className="p-2 hover:bg-slate-200" onClick={() => handleFilter("coffee")}><VscCoffee /></button>
              <button className="p-2 hover:bg-slate-200" onClick={() => handleFilter("meals")}><GiTacos /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;