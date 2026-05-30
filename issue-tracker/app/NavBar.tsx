"use client";

import React from "react";
import Link from "next/link";
import { GoAlertFill } from "react-icons/go";
import { usePathname } from "next/navigation";
import classnames from "classnames";

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

  const currentpath = usePathname();

  return (
    <nav className="flex items-center justify-around border-b px-5 py-3 h-16">
      <Link href="/" className="hover:text-orange-500">
        <GoAlertFill size={32} />
      </Link>
      <ul className="flex list-none gap-8 ">
        {links.map(({ path, name }) => (
          <li key={path}>
            <Link
              href={path}
              className={classnames({
                "text-[rgb(var(--foreground-rgb))]": currentpath === path,
                "text-zinc-400": currentpath !== path,
                "hover:text-orange-500": true,
                "transition-colors": true,
              })}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
