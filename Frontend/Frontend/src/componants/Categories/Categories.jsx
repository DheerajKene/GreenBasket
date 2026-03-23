import React from "react";
import "./Categories.css"

function Categories() {

  const data = [
    {
      name: "Vegetables",
      img: "/images/vegetables.jpg"
    },
    {
      name: "Fruits",
      img: "/images/fruits.jpg"
    },
    {
      name: "Milk & Dairy",
      img: "/images/dairy.jpg"
    },
    {
      name: "Organic Grains",
      img: "/images/grains.jpg"
    },
    {
      name: "Farm Fresh Eggs",
      img: "/images/eggs.jpg"
    }
  ];

  return (
    <section className="categories">

      <h2>Explore Categories</h2>

      <div className="category-grid">

        {data.map((item, index) => (
          <div className="card" key={index}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;