/** @jsx */

import MemoryChart from "../islands/MemoryChart.tsx";
import Header from "../components/Header.tsx";
import Filler from "../components/Filler.tsx";
export default function Home() {
  console.log("hello from Home Export index.tsx");
  return (
    <div id="home">            
      <Header />
      <Filler />
      <MemoryChart />
    </div>
  );
}
