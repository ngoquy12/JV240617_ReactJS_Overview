import React from "react";
import CardProduct from "./CardProduct";
import Header from "./Header";

export default function ListProduct() {
  const products = [
    {
      id: 1,
      productName: "Iphone 12",
      price: 200000,
      quantity: 10,
    },
    {
      id: 2,
      productName: "Iphone 13",
      price: 2000020,
      quantity: 20,
    },
    {
      id: 3,
      productName: "Iphone 16",
      price: 300000,
      quantity: 15,
    },
  ];
  return (
    <>
      <div id="list-product-header">
        <Header />
      </div>
      <h3 className="color-blue">ListProduct</h3>
      <ul>
        {products.map((product, index) => (
          <React.Fragment key={product.id}>
            <CardProduct productProps={product} indexProps={index + 1} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}
