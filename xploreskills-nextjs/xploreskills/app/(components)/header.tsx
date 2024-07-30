import Link from "next/link";
import Navbar from "./navbar";
export default function Header(props: any) {
  return (
    <div className="Sub-header">
      <Navbar />
      <h1>{props.title}</h1>
    </div>
  );
}
