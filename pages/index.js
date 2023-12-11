import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.css";
import { getUsers } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="folder">Folder Page</Link>
        </li>
        <li>
          <Link href="shared">Shared Page</Link>
        </li>
      </ul>
    </>
  );
}
