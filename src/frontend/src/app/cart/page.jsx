"use client";
import { useEffect, useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

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
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
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
                <button className="bg-white border-red-600 border rounded-2xl px-2">
                  Empty Cart
                </button>
              </div>
              <div>
                <button className="bg-red-600 hover:bg-red-800 border-red-600 border rounded-2xl px-2">
                  Continue Shopping
                </button>
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
            <Listbox value={selectedMonth} onChange={setSelectedMonth} className="w-4/12">
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedMonth.value}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {months.map((month, monthIdx) => (
                      <Listbox.Option
                        key={monthIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={month}
                      >
                        {({ selectedMonth }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedMonth ? "font-medium" : "font-normal"
                              }`}
                            >
                              {month.value}
                            </span>
                            {selectedMonth ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <Listbox value={selectedYear} onChange={setSelectedYear} className="w-4/12">
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selectedYear.value}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {years.map((year, yearIdx) => (
                      <Listbox.Option
                        key={yearIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={year}
                      >
                        {({ selectedYear }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedYear ? "font-medium" : "font-normal"
                              }`}
                            >
                              {year.value}
                            </span>
                            {selectedYear ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <input
              className="relative rounded-lg h-9 mt-1 px-2 placeholder:text-neutral-500  w-3/12"
              type="password"
              maxLength="3"
              placeholder="CVV"
            />
          </div>
          <button className="bg-rose-600 rounded-2xl px-2 py-1 w-fit self-center">
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
