// This is an example of how to read a JSON Web Token from an API route

import { getCsrfToken } from "next-auth/react"

export default async (req, res) => {
  const csrfToken = await getCsrfToken({ req })
  console.log("csrfToken: ", csrfToken);
  if (csrfToken) {
    // Signed in
    res.status(200).json(csrfToken)
  } else {
    // Not Signed in
    res.status(401).json(csrfToken)
  }
}