import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const session = useSession();
  const router = useRouter();
  console.log('Session: ', session)
  if (session.status === "authenticated") {
    router?.push("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("email", {
      email,
      password,
    });
  };
    return (
      <div className="flex justify-center items-center min-h-screen bg-black w-full">
        <div className="flex flex-col gap-5 bg-white w-fit">
          <form onSubmit={handleSubmit}>

          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="bg-green-300 w-fit self-center">Login</button>
          </form>
        </div>
      </div>
    )
}