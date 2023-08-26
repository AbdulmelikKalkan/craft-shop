import Link from "next/link";
import { FiShoppingCart, FiSearch } from "react-icons/fi";

const Navigation = () => {
  return (
    <nav className="fixed mx-2 md:mx-8 left-0 right-0 mt-1 md:mt-2 rounded-lg border navbar-bg shadow-xl backdrop-blur-md backdrop-saturate-150 z-50">
      <ul className="flex gap-2 text-md md:text-lg text-slate-900 my-2 md:my-4 items-center px-2">
        <li className="font-bold grow">
          <Link href="/">Craft Shop</Link>
        </li>
        <li className="relative">
          <div class="absolute pointer-events-auto inset-y-0 left-0 flex items-center pl-3">
            <FiSearch />
          </div>
          <input type="search" placeholder="Search" className="navbar-input text-sm focus:ring-blue-500 focus:border-blue-500" />
        </li>
        <li className="relative inline-flex items-center mx-4">
          <FiShoppingCart className="w-6 h-6" />
          <div className="absolute scale-100 translate-x-3 -translate-y-3 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full dark:border-gray-900">
            20
          </div>
        </li>
        <li className="font-bold">Login</li>
      </ul>
    </nav>
  );
};

export default Navigation;
