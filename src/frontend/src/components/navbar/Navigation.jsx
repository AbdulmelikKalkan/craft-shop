"use client";
import Link from "next/link";
import { Input, Badge } from "@nextui-org/react";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="fixed mx-2 md:mx-8 left-0 right-0 mt-1 md:mt-2 rounded-lg border navbar-bg shadow-xl backdrop-blur-md backdrop-saturate-150 z-50">
      <ul className="flex gap-2 text-md md:text-lg text-slate-900 my-2 md:my-4 items-center px-2">
        <li className="font-bold grow">
          <Link href="/">Craft Shop</Link>
        </li>
        <li className="relative">
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "border",
                "border-slate-400",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <FiSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-auto flex-shrink-0" />
            }
          />
        </li>
        <li className="relative inline-flex items-center mx-4">
          <Badge content="9" color="danger">
            <FiShoppingCart className="w-6 h-6" />
          </Badge>
        </li>
        <li className="font-bold">Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
