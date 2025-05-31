import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/client">client</Link>
      </li>
      <li>
        <Link href="/serverside">serverside</Link>
      </li>
    </ul>
  );
}
