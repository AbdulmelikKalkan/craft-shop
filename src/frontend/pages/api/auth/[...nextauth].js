import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const jose = require("jose");
const jwt = require("jsonwebtoken");
export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        //console.log(credentials);
        // const jetClaims = {
        //   username: "melik",
        //   password: "hola",
        //   iat: Date.now() / 1000,
        //   exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        // };
        // console.log("token");

        // const jwttoken = jwt.sign({ username: credentials.username, password: credentials.password }, 'captainjacksparrowsayshi', { expiresIn: '7d' });
        // console.log(jwttoken)
        // const res = await fetch("http://localhost:8080/auth", {
        //     method: 'POST',
        //     // body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json", "token": jwttoken }
        // })
        const user = {
          id: 1,
          ali: 'dsdda',
          name: "melik",
          email: "kalkanabdulmelik@gmail.com",
          testprop: "nedisen laa",
        };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        //token.role = "admin";
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: "captainjacksparrowsayshi",
  pages: {
    signIn: "/auth/signin",
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
  },
};
export default NextAuth(authOptions);
