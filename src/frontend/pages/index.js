import Main from "../components/main";
import CardLayer from "../components/card";
import { Image, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { useSession } from "next-auth/react"

let count = 0
export default function Home({ products }) {
  const { data: session } = useSession()
  // useEffect(() => {
  //   console.log("useState")
  // }, []);
  console.log(products);
  const getProduct = () => {
    count = count + 1
    return (
      <CardLayer
        src={products[count % Object.keys(products).length].src}
        title={products[count % Object.keys(products).length].title}
        price={products[count % Object.keys(products).length].price}
      ></CardLayer>
    );
  };
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

export async function getStaticProps(context) {
  const res = await fetch('http://product-dev:8090/get')
  const products = await res.json()
  return {
    props: {
      products: products.products
    }
  }
}