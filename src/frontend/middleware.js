import { withAuth } from "next-auth/middleware";
import { NextResponse, NextRequest } from 'next/server'


export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    req.cookies.set('vercel', 'fast')
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        // `/admin` requires admin role
        if (req.nextUrl.pathname === "/admin") {
          
          return token?.role === "admin";
        }
        
        // `/me` only requires the user to be logged in
        return !!token;
      },
    },
  }
);

// export function middleware(req) {
//   const response = NextResponse.next()
//   console.log("Hele bu nedir");
//   return response
// }

export const config = { matcher: ["/admin"] };
//export const config = { matcher: ["/cart"] }
