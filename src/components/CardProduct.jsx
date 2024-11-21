import React from "react";

// Cách 1
// export default function CardProduct(props) {
//   console.log("props: ", props.productProps);

//   const product = props.productProps;

//   return (
//     <>
//       <li>
//         <div>Id: {product.id}</div>
//         <div>Name:{product.productName}</div>
//         <div>Price: {product.price}</div>
//         <div>Quantity: {product.quantity}</div>
//       </li>
//     </>
//   );
// }

// Cách 2
// export default function CardProduct(props) {
//   console.log("props: ", props);

//   const { productProps, indexProps } = props;

//   return (
//     <>
//       <li>
//         <div>Index: {indexProps}</div>
//         <div>Id: {productProps.id}</div>
//         <div>Name:{productProps.productName}</div>
//         <div>Price: {productProps.price}</div>
//         <div>Quantity: {productProps.quantity}</div>
//       </li>
//     </>
//   );
// }

// Cách 3
export default function CardProduct({ productProps, indexProps }) {
  return (
    <>
      <li>
        <div>Index: {indexProps}</div>
        <div>Id: {productProps.id}</div>
        <div>Name:{productProps.productName}</div>
        <div>Price: {productProps.price}</div>
        <div>Quantity: {productProps.quantity}</div>
      </li>
    </>
  );
}
