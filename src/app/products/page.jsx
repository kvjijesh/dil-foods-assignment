import React from "react";
import ProductCard from '../../components/ProductCard'

const productsData = [
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/t1zu7nte6rejvwvdkzyg.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "450.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/grvsafw40mwtqjja2ysu.jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "550.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/srq8v4cr4ndysrt66knn.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "250.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/zk9zu9dnyfhomkkwxaru.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "450.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/c6mfwl6m9ro9e7as8igj.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "580.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/te7osreevymfcvpvtowb.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "1000.00",
  },
  {
    img: "https://res.cloudinary.com/dw6hpsoj9/image/upload/v1704781784/ecoomerce/sph3e78wymmlxgibjjxl.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "1200.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-14 px-10">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
