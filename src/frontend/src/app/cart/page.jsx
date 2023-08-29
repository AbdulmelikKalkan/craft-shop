import Image from "next/image";
const Cart = () => {
    return (
        <main className="flex relative justify-center pt-28 px-16 pb-28 gap-20 h-screen bg-rose-400">
            <div className="flex relative w-2/3 bg-amber-300">
                <ul className="flex flex-col gap-6 w-full">
                    <li className="border-b-1">
                        <div className="flex gap-5 relative">
                            <div className="grow"><h1 className="font-bold">Cart (count)</h1></div>
                            <div><button className="bg-white border-red-600 border rounded-2xl px-2">Empty Cart</button></div>
                            <div><button className="bg-red-600 border-red-600 border rounded-2xl px-2">Continue Shopping</button></div>
                        </div>
                    </li>
                    <li className="border-b-1 flex gap-5">
                        <div className="rounded-md overflow-hidden"><Image src="/bonsai.jpg" width={145} height={145} className="object-cover" /></div>
                        <div className="flex flex-col relative w-full">
                            <div>Product Name</div>
                            <div>Product ID</div>
                            <div className="flex grow items-end relative">
                                <div className="grow">Quantity</div>
                                <div>Total</div>
                            </div>
                        </div>
                    </li>
                    <li className="flex border-b-1">
                        <div className="grow">Shipping</div>
                        <div>Price</div>
                    </li>
                    <li className="flex">
                        <div className="grow">Total</div>
                        <div>Price</div>
                    </li>
                </ul>
            </div>
            <div className="flex md:flex-col relative w-1/3 bg-lime-300">
                <div className="flex flex-col gap-5 relative bg-teal-300">
                    <h2>Shipping Address</h2>
                    <input placeholder="E-mail Address" />
                    <input placeholder="Street Address"/>
                    <input placeholder="Zip Code"/>
                    <input placeholder="City" />
                    <div className="flex relative">
                        <input placeholder="State" />
                        <input placeholder="Country" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col relative gap-5 bg-sky-300">
                    <h2>Payment Method</h2>
                    <input placeholder="Credit Card Number"/>
                    <div className="flex relative w-full">
                        <input placeholder="Month" className="w-full" />
                        <input placeholder="Year" className="w-full"/>
                        <input placeholder="CVV" className="w-full"/>
                    </div>
                    <button className="bg-rose-600 rounded-2xl px-2 w-fit self-center">Place Order</button>
                </div>
            </div>
        </main>
    )
}

export default Cart