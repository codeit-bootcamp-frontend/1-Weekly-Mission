import {Article,Header} from "@/components";
import axios from "@/lib/axios";
import { useState, useEffect } from "react";

export default function FolderPage() {
  const [folders, setFolders] = useState([]);

  const Folder = async() => {
    const response = await axios.get("users/1/folders");
    const data = response.data.data
    setFolders(data);
  }

  useEffect(() => {
    Folder();
  }, []);


  return (
    <>
        <Header />
        <Article folders={folders} />
    </>
  );
}
