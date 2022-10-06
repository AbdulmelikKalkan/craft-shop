import Main from "../components/main";
import CardLayer from "../components/card";
import { Image, Grid } from "@nextui-org/react";

let count = 0;
export default function Home({ products }) {
  // useEffect(() => {
  //   console.log("useState")
  // }, []);

  // const getProduct = () => {
  //   count = count + 1;
  //   return (
  //     <CardLayer
  //       src={products[count % Object.keys(products).length].src}
  //       title={products[count % Object.keys(products).length].title}
  //       price={products[count % Object.keys(products).length].price}
  //     ></CardLayer>
  //   );
  // };
  
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
        {products.map((p) => (
          <Grid xs={12} sm={4}>
            <CardLayer src={p.src} title={p.title} price={p.price}></CardLayer>
          </Grid>
        ))}
      </Grid.Container>
      {/* <Grid.Container gap={3} justify="center">
        <Grid xs={12} >
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
        <Grid xs={12} >
          <Grid.Container gap={3} justify="center">
            <Grid xs={4}>{getProduct()}</Grid>
            <Grid xs={4}>{getProduct()}</Grid>
            <Grid xs={4}>{getProduct()}</Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container> */}
    </Main>
  );
}

export async function getStaticProps(context) {
  const apiGateway = process.env.API_GATEWAY;
  const res = await fetch("http://" + apiGateway + "/product/get");
  const products = await res.json();
  return {
    props: {
      products: products.products,
    },
  };
}
