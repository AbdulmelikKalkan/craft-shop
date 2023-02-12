import { getCsrfToken } from "next-auth/react"

const apiGateway = process.env.API_GATEWAY;

export default async function handler(req, res) {
  const csrfToken = await getCsrfToken({ req })
  if (req.method === "POST") {
    const response = await fetch("http://" + apiGateway + "/cart/cart", {
      method: "POST",
      body: JSON.stringify({sessionId: csrfToken, productId: req.body.productId.toString(), quantity: req.body.quantity}),
      headers: { "Content-Type": "application/json" },
    });
    res.status(response.status).json("Created")
  } else {
    res.status(200).json("Get Method");
  }

  //console.log("csrfToken", req.headers);

  //res.status(200).json(products)
}
