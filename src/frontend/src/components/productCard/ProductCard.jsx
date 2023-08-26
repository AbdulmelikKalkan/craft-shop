import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col w-1/4 rounded-xl overflow-hidden relative shadow-md transition ease-in-out hover:scale-105">
      <div>
        <Image
          src="/tea-cups.jpg"
          width={100}
          height={100}
          className="w-full object-cover h-96"
        />
      </div>
      <div className="w-full absolute bottom-0">
        <div className="flex items-center relative p-3 card-bg backdrop-blur-sm backdrop-saturate-100 h-auto border-t">
          <div className="grow text-left ">Name</div>
          <div className="text-right ">Price</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
