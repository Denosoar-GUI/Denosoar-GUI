/** @jsx */

import MemoryChart from "../islands/MemoryChart.tsx";
import Header from "../islands/Header.tsx";

export default function Home() {
  console.log("hello from Home Export index.tsx");
  return (
    <div>
      <Header />
      <MemoryChart />
    </div>
  );
}
