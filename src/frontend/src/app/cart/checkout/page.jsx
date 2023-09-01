const Checkout = () => {
    return (
        <main className="flex flex-col relative items-center gap-5 justify-center pt-28 px-16 pb-28">
            <div className="flex flex-col">
                <h2 className="self-center font-bold text-xl">Your order is complete!</h2>
                <p>We've sent you a confirmation email.</p>
            </div>
            <div className="flex flex-col gap-5">
                <ul className="flex flex-col gap-5">
                    <li className="flex gap-16 border-b-1">
                        <div>Confirmation #</div>
                        <div className="grow text-right">0d763ebf-475e-11ee-95e1-7a1894004f34</div>
                    </li>
                    <li className="flex gap-16 border-b-1">
                        <div>Tracking #</div>
                        <div className="grow text-right">PQ-44230-225319131</div>
                    </li>
                    <li className="flex gap-16">
                        <div>Total Paid</div>
                        <div className="grow text-right">$27.98</div>
                    </li>
                </ul>
            </div>
            <div>
                <button className="bg-red-600 hover:bg-red-800 border-red-600 border rounded-2xl px-2">Continue Shopping</button>
            </div>
        </main>
    )
}

export default Checkout