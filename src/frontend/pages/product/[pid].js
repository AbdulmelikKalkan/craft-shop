import Main from "../../components/main";
import CardLayer from "../../components/card";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  Image,
  Grid,
  Card,
  Col,
  Row,
  Text,
  Dropdown,
  Button,
} from "@nextui-org/react";
import { useState, useMemo } from "react";
const Product = ({ product }) => {
  const [selected, setSelected] = useState("1");
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", ""),
    [selected]
  );
  const router = useRouter()
  const { data: session } = useSession()
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const res = await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({productId: product.id.toString(), quantity: selectedValue}),
      headers: { "Content-Type": "application/json" }
    })
    
    if (res.status !== 201) {
      console.log("There was an error adding item to cart");
    } else {
      router.push('/cart')
    }
    
  }
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
          <form onSubmit={handleSubmit}>
            <h2 className="font-bold">GOZLUK</h2>
            <p className="font-bold">50$</p>
            <p>
              Add a modern touch to your outfits with these sleek aviator
              sunglasses.
            </p>
            <Dropdown>
              <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                color="default"
                variant="flat"
                aria-label="Single selection actions"
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                name="quantity"
              >
                <Dropdown.Item key="1">1</Dropdown.Item>
                <Dropdown.Item key="2">2</Dropdown.Item>
                <Dropdown.Item key="3">3</Dropdown.Item>
                <Dropdown.Item key="4">4</Dropdown.Item>
                <Dropdown.Item key="5">5</Dropdown.Item>
                <Dropdown.Item key="10">10</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button className="mt-1" color="error" auto type="submit">
              Add to Cart
            </Button>
          </form>
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
