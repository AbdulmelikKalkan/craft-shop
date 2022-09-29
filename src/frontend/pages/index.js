import Main from "../components/main";
import CardLayer from "../components/card";
import { Image, Grid } from "@nextui-org/react";
import { useEffect } from "react";
import {products} from '../data/products'
let count = -1;
export default function Home() {
  useEffect(() => {
    count = -1;
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
    return (
      <CardLayer
        src={products[count].src}
        title={products[count].title}
        price={products[count].price}
      ></CardLayer>
    );
  };
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
