"use client"
import Image from "next/image";

import { Select, SelectItem, Button } from "@nextui-org/react";

const pieces = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "10" },
];

const ProductDetails = () => {
  return (
    <main className="flex relative justify-center pt-28 px-16 pb-28">
      <div className="flex flex-col md:flex-row gap-10 relative ">
        <div className="flex flex-auto relative overflow-hidden rounded-xl md:w-1/2 shadow-md">
          <Image
            src="/bonsai.jpg"
            width={200}
            height={100}
            alt="Desc"
            quality={75}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="flex flex-auto flex-col gap-3 relative justify-end font-bold text-lg md:w-1/2">
          <h1>Header</h1>
          <h4>$200</h4>
          <p className="font-normal text-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Select
            label="Quantity"
            defaultSelectedKeys={["1"]}
            className="w-1/4"
          >
            {pieces.map((piece) => (
              <SelectItem key={piece.value} value={piece.value}>
                {piece.value}
              </SelectItem>
            ))}
          </Select>
          <Button color="danger" className="w-1/2">Add To Cart</Button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
