import { getCsrfToken } from "next-auth/react";

const apiGateway = process.env.API_GATEWAY;

export default async function handler(req, res) {
  const csrfToken = await getCsrfToken({ req });
  console.log("count csrf: ", csrfToken);
  const response = await fetch("http://" + apiGateway + "/cart/carts", {
    method: "POST",
    body: JSON.stringify({ sessionId: csrfToken }),
    headers: { "Content-Type": "application/json" },
  });
  res.status(response.status).json(response.body);
}
