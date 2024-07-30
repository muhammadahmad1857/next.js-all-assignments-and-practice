import Link from "next/link";

export default function Button2(props: any) {
  return (
    <Link href={props.href} className="hero_btn">
      {props.name}
    </Link>
  );
}
