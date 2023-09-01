"use client";
import { useState } from "react";

import Image from "next/image";
import { Select, SelectItem, Button, Input } from "@nextui-org/react";

const months = [
  { id: 1, value: "January" },
  { id: 2, value: "February" },
  { id: 3, value: "March" },
  { id: 4, value: "April" },
  { id: 5, value: "May" },
  { id: 6, value: "June" },
  { id: 7, value: "July" },
  { id: 8, value: "August" },
  { id: 9, value: "September" },
  { id: 10, value: "October" },
  { id: 11, value: "November" },
  { id: 12, value: "December" },
];

const years = [
  { value: "2022" },
  { value: "2023" },
  { value: "2024" },
  { value: "2025" },
  { value: "2026" },
  { value: "2027" },
  { value: "2028" },
  { value: "2029" },
  { value: "2030" },
];

const cardValueFormat = (value) => {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
};

const Cart = () => {
  const [cardNumber, setCardNumber] = useState("");
  const onChange = (e) => {
    setCardNumber(e.target.value);
  };

  return (
    <main className="flex relative justify-center pt-28 px-16 pb-28 gap-28 h-screen">
      <div className="flex relative w-2/4">
        <ul className="flex flex-col gap-6 p-4 w-full bg-neutral-100">
          <li className="border-b-1 pb-2">
            <div className="flex gap-5 relative">
              <div className="grow">
                <h1 className="font-bold text-xl">Cart (4)</h1>
              </div>
              <div>
              <Button color="danger" variant="ghost">Empty Cart</Button>
              </div>
              <div>
                <Button color="danger">Continue Shopping</Button>
              </div>
            </div>
          </li>
          <li className="border-b-1 flex gap-5 pb-2">
            <div className="rounded-md overflow-hidden">
              <Image
                src="/bonsai.jpg"
                width={145}
                height={145}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 relative w-full">
              <div>Bonsai</div>
              <div className="font-serif text-xs text-slate-500">
                SKU #66VCHSJNUP
              </div>
              <div className="flex grow items-end relative">
                <div className="grow">Quantity: 1</div>
                <div>$18</div>
              </div>
            </div>
          </li>
          <li className="flex border-b-1 pb-2">
            <div className="grow">Shipping</div>
            <div>$32</div>
          </li>
          <li className="flex">
            <div className="grow">Total</div>
            <div>$50</div>
          </li>
        </ul>
      </div>
      <div className="flex md:flex-col gap-10 relative w-1/4 p-3 bg-neutral-100">
        <div className="flex flex-col gap-5 relative">
          <h2 className="font-bold text-xl">Shipping Address</h2>
          <input
            className="rounded-xl  p-1 px-2 placeholder:text-neutral-500"
            type="text"
            placeholder="E-mail Address"
          />
          <input
            className="rounded-xl  p-1 px-2 placeholder:text-neutral-500"
            type="text"
            placeholder="Street Address"
          />
          <input
            className="rounded-xl  p-1 px-2 placeholder:text-neutral-500"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="rounded-xl  p-1 px-2 placeholder:text-neutral-500"
            type="text"
            placeholder="City"
          />
          <div className="flex gap-4 relative">
            <input
              className="rounded-xl  p-1 px-2 placeholder:text-neutral-500  w-2/5"
              type="text"
              placeholder="State"
            />
            <input
              className="rounded-xl  p-1 px-2 placeholder:text-neutral-500  w-3/5"
              type="text"
              placeholder="Country"
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col relative gap-5">
          <h2 className="font-bold text-xl">Payment Method</h2>
          <input
            className="rounded-xl  p-1 px-2 placeholder:text-neutral-500"
            value={cardValueFormat(cardNumber)}
            onChange={onChange}
            placeholder="Credit Card Number"
            pattern="[0-9.]+"
          />
          <div className="flex relative gap-3 w-full">
            <Select label="Month" className="w-1/4">
              {months.map((month) => (
                <SelectItem key={month.id} value={month.value}>
                  {month.value}
                </SelectItem>
              ))}
            </Select>
            <Select label="Year" className="w-1/4">
              {years.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.value}
                </SelectItem>
              ))}
            </Select>
            <Input
              variant="bordered"
              placeholder="CVV"
              maxLength="3"
              type={"password"}
              className=" w-3/12 h-9"
            />
          </div>
          <Button color="danger" className="self-center w-fit">Place Order</Button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
