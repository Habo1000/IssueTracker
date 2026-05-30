import React from "react";
import Link from "next/link";
import { GoAlertFill } from "react-icons/go";

const NavBar = () => {
  const links = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/issues",
      name: "Issues",
    },
  ];

  return (
    <nav className="flex items-center justify-around border-b px-5 py-3">
      <Link href="/">
        <GoAlertFill />
      </Link>
      <ul className="flex list-none gap-8 ">
        {links.map(({ path, name }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
