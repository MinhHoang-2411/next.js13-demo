"use client";
import {useRouter} from "next/navigation";
import React, {FormEvent, useState} from "react";
import {useSelectedLayoutSegment} from "next/navigation";
import {usePathname} from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter the search term"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
      <p>Active segment: {segment}</p>
      <p>Path name: {pathname}</p>
    </form>
  );
}

export default Search;
