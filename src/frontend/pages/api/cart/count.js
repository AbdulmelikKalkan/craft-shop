import { getCsrfToken } from "next-auth/react";

const apiGateway = process.env.API_GATEWAY;

export default async function handler(req, res) {
  const csrfToken = await getCsrfToken({ req });
  console.log("count csrf: ", csrfToken);
  const response = await fetch("http://" + apiGateway + "/cart/count", {
    method: "POST",
    body: JSON.stringify({ sessionId: csrfToken, productId: "", quantity: "" }),
    headers: { "Content-Type": "application/json" },
  });
  res.status(response.status).json("Created");
}
