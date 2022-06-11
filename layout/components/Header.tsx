import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Logo } from "./Logo";

const routes = [
  { name: "Inicio", path: "/" },
  { name: "Catálogo", path: "/licores" },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="w-full z-50 fixed backdrop-blur-sm">
      <div className="flex h-20 max-w-7xl mx-auto items-center justify-between flex-row w-full relative">
        <Link href="/">
          <Logo width="55" height="55" bgColor="#5B21B6" initials="#F8F8F8" />
        </Link>
        <div className="absolute top-2/4 -translate-x-2/4 left-2/4">
          {routes.map((_, index) => (
            <Link key={index} href={_.path}>
              <a
                className={`mx-1 text-black text-sm uppercase ${
                  pathname === _.path ? "font-bold" : "font-normal"
                }`}
              >
                {_.name}
              </a>
            </Link>
          ))}
        </div>
        <div>
          <Link href="/ingreso">
            <span className="uppercase text-sm text-black mr-2 hover:border-b-2">
              Ingresar
            </span>
          </Link>
          <Link href="/registro">
            <span className="uppercase text-sm text-black mr-2 hover:border-b-2">
              Registrarse
            </span>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
