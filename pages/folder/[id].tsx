import { useRouter } from "next/router";
import React from "react";

export default function FolderItem() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>폴더아이템</h1>
    </div>
  );
}

// export async function getStaticProps(context) {
//   console.log(context);
// }

// export async function getStaticPaths() {}
