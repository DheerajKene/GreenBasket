import React from "react";
import "./Categories.css"

function Categories() {

  const data = [
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
    },
    {
      name: "Vegetables",
      img: "https://png.pngtree.com/background/20230613/original/pngtree-bunch-of-fresh-vegetables-and-fruits-on-a-black-background-picture-image_3402695.jpg"
    },
    {
      name: "Fruits",
      img: "https://static.vecteezy.com/system/resources/previews/029/628/395/large_2x/studio-shot-of-various-fruits-and-vegetables-isolated-on-black-background-top-view-high-resolution-products-free-photo.jpeg"
    },
    {
      name: "Milk & Dairy",
      img: "https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg"
    },
    {
      name: "Organic Grains",
      img: "https://img.freepik.com/premium-photo/natural-nourishment-collage-background-diverse-organic-grains-legumes_892776-21893.jpg?w=2000"
    },
    {
      name: "Farm Fresh Eggs",
      img: "https://img.freepik.com/premium-photo/local-farm-fresh-eggs_87720-69176.jpg"
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