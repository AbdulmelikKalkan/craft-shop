// Use the client directive for using usePathname hook.
"use client";

// Use usePathname for catching route name.
import { usePathname } from "next/navigation";
import Navigation from '@/components/navbar/Navigation'
import Footer from '@/components/footer/Footer'

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  if (pathname !== "/login" && pathname !== "/register") {
    return (
        <>
        <Navigation />
        {children}
        <Footer />
        </>
    )
  } else {
    return (
        <>
        {children}
        </>
    )
  }
};

export default LayoutProvider;