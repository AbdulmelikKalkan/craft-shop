import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col w-1/4 rounded-xl overflow-hidden relative bg-rose-600 ml-2 mt-2">
      <div>
        <Image
          src="/tea-cups.jpg"
          width={100}
          height={100}
          className="w-full object-cover"
        />
      </div>
      <div className="w-full absolute bottom-0">
        <div className="flex items-center relative py-1 card-bg backdrop-blur-sm backdrop-saturate-100 border-t">
          <div className="grow text-left pl-2">Name</div>
          <div className="text-right pr-2">Price</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
