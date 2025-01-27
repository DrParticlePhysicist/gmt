// ProductsGrid.jsx
import React from "react";

const ProductGrid = () => {
  const products = [
    { name: "Rainbow 600", img: "/rainbow-600.jpg" },
    { name: "Rio 650", img: "/rio-650.jpg" },
    { name: "Big Bull 1300", img: "/big-bull-1300.jpg" },
    { name: "Rome 600", img: "/rome-600.jpg" },
    { name: "Rainbow 600", img: "/rainbow-600.jpg" },
    { name: "Rio 650", img: "/rio-650.jpg" },
  ];

  return (
    <div className="p-4">
      <img src="/Special bottle.png" alt= "Special bottle" style={{width: '100%',height:'auto',objectFit: 'cover'}} />
    </div>
  );
};

export default ProductGrid;
