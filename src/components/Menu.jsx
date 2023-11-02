import Link from "next/link";

export default function Menu() {
  return (
    <>
      <nav className="mb-8">
        <Link className="bg" href="/" prefetch={false}>
          Home
        </Link>
        <Link className="bg" href="/henry" prefetch={false}>
          Henry
        </Link>
      </nav>
    </>
  );
}
