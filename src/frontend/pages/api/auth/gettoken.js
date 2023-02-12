// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import { getCsrfToken } from "next-auth/react"
const secret = process.env.NEXTAUTH_SECRET

export default async (req, res) => {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req, secret })
  if (token) {
    // Signed in
    console.log("JSON Web Token", token)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.status(200).json(token)
}