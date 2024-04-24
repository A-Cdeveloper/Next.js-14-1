import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">Next news</Link>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
