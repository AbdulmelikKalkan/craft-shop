import Main from "../components/main";
import CardLayer from "../components/card";
import { Image, Grid } from "@nextui-org/react";
import { useEffect } from "react";
import {products} from '../data/products'
import { useSession, getSession, signIn, signOut } from "next-auth/react"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { getToken } from "next-auth/jwt"


let count = -1;
const secret = process.env.NEXTAUTH_SECRET
export default function Home() {
  const { data: session } = useSession()
  useEffect(() => {
    count = -1;
    // const fetchData = async () => {
    //   const res = await fetch("/api/gettoken")
    //   const json = await res.json()
    //   console.log("gettoken: ", json);
    // }
    // fetchData()
  });
  const getProduct = () => {
    count = count + 1;
    // Using for production
    // return (
    //   <CardLayer
    //     src={products[count].src}
    //     title={products[count].title}
    //     price={products[count].price}
    //   ></CardLayer>
    // );
    // return (
    //   <CardLayer
    //     src={products[count].src}
    //     title={products[count].title}
    //     price={products[count].price}
    //   ></CardLayer>
    // );
  };
  console.log("session: ", session);
  console.log("data: ", useSession());
  console.log("get: ", getSession());
  const getUser = () => {
    if (session) {
      return (
        <><p>Signed in as {session.user.email}</p></>
      )
    }
    return (
      <><p>Not signed in</p></>
    )
  }
  return (
    <Main>
      <Image
        src="./images/banner/folded-clothes-on-white-chair-wide.jpg"
        height={300}
        objectFit="fill"
        alt="Banner"
        weight="100%"
      />
      <header className="text-3xl font-bold pt-4 pl-8">Hot Products</header>
      {getUser()}
      <Grid.Container gap={3} justify="center">
        <Grid xs={12}>
          <Grid.Container gap={3} justify="center">
            <Grid xs={4}>{getProduct()}</Grid>
            <Grid xs={4}>
              <Grid.Container gap={1} justify="center">
                <Grid xs={12}>{getProduct()}</Grid>
                <Grid xs={12}>{getProduct()}</Grid>
              </Grid.Container>
            </Grid>
            <Grid xs={4}>
              <Grid.Container gap={1} justify="center">
                <Grid xs={12}>{getProduct()}</Grid>
                <Grid xs={12}>{getProduct()}</Grid>
              </Grid.Container>
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12}>
          <Grid.Container gap={3} justify="center">
            <Grid xs={4}>{getProduct()}</Grid>
            <Grid xs={4}>{getProduct()}</Grid>
            <Grid xs={4}>{getProduct()}</Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Main>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3000/api/products");
//   const products = await res.json();
//   console.log("getStaticProps");
//   return {
//     props: {
//       products,
//     }, // will be passed to the page component as props
//   };
// }
// Export the `session` prop to use sessions with Server Side Rendering
// export async function getServerSideProps(context) {
//   const t = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions
//   )
//   const res = await fetch("http://localhost:3000/api/get-token-example")
//   const json = await res.json()
//   console.log("gettoeken: ", json);
//   console.log("serverside");
//   console.log(t)
//   return {
//     props: {
//       hola: 'hola',
//     },
//   }
// }