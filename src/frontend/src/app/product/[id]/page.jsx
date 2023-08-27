"use client";
import { Fragment, useState } from "react";
import Image from "next/image";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const piece = [
  { val: "1" },
  { val: "2" },
  { val: "3" },
  { val: "4" },
  { val: "5" },
  { val: "10" },
];

const ProductDetails = () => {
  const [selected, setSelected] = useState(piece[0]);

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
          <Listbox value={selected} onChange={setSelected} className="w-1/2">
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.val}</span>
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
                    {piece.map((num, numIdx) => (
                      <Listbox.Option
                        key={numIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={num}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {num.val}
                            </span>
                            {selected ? (
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
            <button className="font-normal text-medium rounded-2xl w-max px-2 py-1 shadow-md bg-red-600 hover:bg-red-700 hover:scale-105">Add To Cart</button>
        </div>
      </div>
    </main>
    
  );
};

export default ProductDetails;
