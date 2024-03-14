// app/page.tsx

import Link from "next"
import "@/app/global/globals.css"
import Content from "./layouts/content";
import Span from "./layouts/span/Index";
import "./css/Home.css"

export default function Home() {
  return (
    <div>
        <div className="container">
          <Content></Content>
        </div>
        <div>
          <Span></Span>
        </div>
    </div>
  );
}