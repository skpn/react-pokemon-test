import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "./Nav";

type Props = {
  children?: ReactNode;
  title?: string;
};

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/users", text: "Users" },
  { href: "/users/api", text: "Users API" },
  { href: "/tailwind-components", text: "Tailwind tests" },
];

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav links={navLinks} />
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
