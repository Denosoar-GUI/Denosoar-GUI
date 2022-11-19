import Header from "../islands/Header.tsx";
import Bio from "../components/Bio.tsx";
import UploadChart from '../islands/csv.tsx';

export default function About() {
  const names: string[][] = [
    [
      "Katie Angelopoulos",
      "https://github.com/kangelopoulos",
      "https://www.linkedin.com/in/katharine-angelopoulos-8a69a6174/",
      "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      'super-deno.png'
    ],
    [
      "David Russo",
      "https://github.com/RussoDavid",
      "https://www.linkedin.com/in/david-russo-742a7735/",
      "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      "/super-deno.png"
    ],
    [
      "Mohammed Sebbagh",
      "https://github.com/moha99ed",
      "https://www.linkedin.com/in/mohammed-sebbagh/",
      "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      "/super-deno.png"
    ],
    [
      "Ethan Liu",
      "https://github.com/eliu080893",
      "https://www.linkedin.com/in/ethan-liu-0808/",
      "hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello",
      "/super-deno.png"
    ],
  ];

  const bios: any[] = [];

  for (let i = 0; i < names.length; i++) {
    bios.push(<Bio count={i} name={names[i][0]} github={names[i][1]} linkedin={names[i][2]} description={names[i][3]} image={names[i][4]}/>)
  }

  return (
    <div>
        <Header />
       <h1 class='ml-4 text-6xl mt-4 mb-4'>About Denosoar</h1>
       <p class='mr-4 ml-4 text-lg' >Denosoar is an open source memory tool that is used to track potential memory leaks for applications built with Deno.  Denosoar analyzes and displays in real time the RSS(resident set size), Heap Total, Heap Usage and External Memory using easy to read charts. </p>
        <h3 class='text-2xl ml-4 mt-4'> Meet the Engineers behind Denosoar</h3>
        <ul class='mt-6 ml-4 flex justify-between flex-row'> 
            {names.map((el, index) => <li class='text-lg mt-6  w-1/6' key={index}>{el[0]} <a href={el[1]} ><img 
              src="/icons8-github-100.png"
              class="w-10 h-10 bg-white rounded-full"
            /> </a>
            </li>)}
        </ul>
        
    </div>
    )
    
}