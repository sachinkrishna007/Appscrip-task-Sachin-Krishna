"use client";
import "@styles/products.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons"; 
const Products = () => {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showIdealForDropdown, setShowIdealForDropdown] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleIdealForDropdown = () => {
    setShowIdealForDropdown(!showIdealForDropdown);
  };

  return (
    <div>
      <div className="filter">
        <p style={{ fontWeight: "bolder" }}>3425 items </p>
        <p style={{ paddingLeft: "6px" }} onClick={toggleFilter}>
          {showFilter ? "Hide Filter" : "Show Filter"}
        </p>
        <p style={{paddingLeft:"50rem ",fontWeight: "bolder"}}> 
            RECOMMENDED
        </p>
      </div>

      {showFilter && (
        <div className="filter-options">
          <div className="custom">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">Customizable</label>
          </div>

          <div className="ideal-for-dropdown">
            <div className="ideal-for-heading" onClick={toggleIdealForDropdown}>
              <h3>
                IDEAL FOR{" "}
                <FontAwesomeIcon
                  icon={showIdealForDropdown ? faAngleUp : faAngleDown}
                />
              
               
             
              </h3>
              
            </div>
            {showIdealForDropdown && (
              <div className="ideal-for-options">
                <div>
                  <input type="checkbox" id="checkbox2" />
                  <label htmlFor="checkbox2">Men</label>
                </div>
                <div>
                  <input type="checkbox" id="checkbox3" />
                  <label htmlFor="checkbox3">Women</label>
                </div>
                <div>
                  <input type="checkbox" id="checkbox4" />
                  <label htmlFor="checkbox4">Baby and Kids</label>
                </div>
              </div>
            )}
          </div>
          <div className="ideal-for-dropdown">
            <div className="ideal-for-heading" >
              <h3>
                OCCASION{" "}
                <FontAwesomeIcon
                  icon={showIdealForDropdown ? faAngleDown :faAngleDown}
                />
               
               
              </h3>
              
            </div>
           
          </div>
          <div className="ideal-for-dropdown">
            <div className="ideal-for-heading" >
              <h3>
                WORK{" "}
                <FontAwesomeIcon
                  icon={showIdealForDropdown ? faAngleDown :faAngleDown}
                />
               
               
              </h3>
              
            </div>
           
          </div>
          <div className="ideal-for-dropdown">
            <div className="ideal-for-heading" >
              <h3>
                FABRIC{" "}
                <FontAwesomeIcon
                  icon={showIdealForDropdown ? faAngleDown :faAngleDown}
                />
               
               
              </h3>
              
            </div>
           
          </div>
        </div>
      )}

      <div className="items">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <div style={{ display: "flex" }}>
              <p>Sign in or Create account to see pricing </p>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ padding: "6px ", color: "gray" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
