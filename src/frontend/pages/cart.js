import Main from "../components/main";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getCsrfToken } from "next-auth/react";

export default function Cart() {
    const res = fetch('api/cart/carts')
    console.log(res);
  return (
    <Main>
      <div className="flex items-center justify-center mt-32">
        <h2>Cart Full</h2>
      </div>
    </Main>
  );
  // if (typeof carts !== "undefined") {
  //   const res = fetch('api/cart/carts')
  //   console.log(res);
  //   return (
  //     <Main>
  //       <div className="flex items-center justify-center mt-32">
  //         <h2>Cart Full</h2>
  //       </div>
  //     </Main>
  //   );
  // } else {
  //   return (
  //     <Main>
  //       <div className="flex flex-col items-center justify-center mt-32">
  //         <h2>Your shopping cart is empty!</h2>
  //         <p>Items you add to your shopping cart will appear here.</p>
  //         <br />
  //         <Button color="error" auto rounded><Link href="/" className="text-current">Continue Shopping</Link></Button>
  //       </div>
  //     </Main>
  //   );
  // }
}

// export async function getStaticProps(context) {
//   console.log(context);

//   const apiGateway = process.env.API_GATEWAY;
//   const res = await fetch("http://localhost:3000/api/auth/csrf");
//   console.log("CSRFToken: ", res);
//   // const products = await res.json();
//   return {
//     props: {
//       carts: "",
//     },
//   };
// }
