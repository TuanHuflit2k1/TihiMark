import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data, index }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index}></ProductCard>
      ))}
    </>
  );
};

export default ProductsList;
