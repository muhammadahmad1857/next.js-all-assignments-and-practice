import Link from "next/link";
import React from "react";

export default function Button(props: any) {
  return (
    <Link href="#" className="hero_btn btn">
      {props.text}
    </Link>
  );
}
