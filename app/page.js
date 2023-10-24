import Image from "next/image";
import styles from "./page.module.css";
import Post from "./components/Post/Post";
export default function Home() {
  return (
    <main>
      <Post />
      <Post />
      <Post />
    </main>
  );
}
