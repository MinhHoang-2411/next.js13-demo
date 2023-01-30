import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-5">
      <Link
        href="/"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg ml-1"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg ml-1"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-2 py-1 bg-white text-blue-500 rounded-lg ml-1"
      >
        Search
      </Link>
    </header>
  );
};

export default Header;
