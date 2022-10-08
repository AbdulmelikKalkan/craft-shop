import Main from "../../components/main";
import CardLayer from "../../components/card";
import { useRouter } from "next/router";
import { Image, Grid, Card, Col, Row, Text, Dropdown, Button } from "@nextui-org/react";
import { useState, useMemo } from "react";
const Product = ({ product }) => {
  const [selected, setSelected] = useState("1")
  const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", ""), [selected])
  return (
    <Main>
      <div className="flex items-center justify-center mt-32">
        <Grid.Container gap={3} justify="center" css={{ w: "auto" }}>
          <Grid>
            <Card variant="flat" css={{ mw: "400px", w: "100%" }}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={product.src}
                  objectFit="cover"
                  width="100%"
                  height={400}
                  alt={product.title}
                />
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <div className="ml-6">
          <h2 className="font-bold">GOZLUK</h2>
          <p className="font-bold">50$</p>
          <p>Add a modern touch to your outfits with these sleek aviator sunglasses.</p>
          <Dropdown>
            <Dropdown.Button flat>
            {selectedValue}
            </Dropdown.Button>
            <Dropdown.Menu
              color="default"
              variant="flat"
              aria-label="Single selection actions"
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="1">1</Dropdown.Item>
              <Dropdown.Item key="2">2</Dropdown.Item>
              <Dropdown.Item key="3">3</Dropdown.Item>
              <Dropdown.Item key="4">4</Dropdown.Item>
              <Dropdown.Item key="5">5</Dropdown.Item>
              <Dropdown.Item key="10">10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className="mt-1" color="error" auto>Add to Cart</Button>
        </div>
      </div>
    </Main>
  );
};

export async function getStaticPaths() {
  const apiGateway = process.env.API_GATEWAY;
  const res = await fetch("http://" + apiGateway + "/product/get");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { pid: product.id.toString() },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const apiGateway = process.env.API_GATEWAY;
  const res = await fetch(
    "http://" + apiGateway + "/product/product/" + params.pid
  );
  const product = await res.json();
  return {
    props: {
      product: product,
    },
  };
}

export default Product;
