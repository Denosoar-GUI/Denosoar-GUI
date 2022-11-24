import Header from "../components/Header.tsx";
import CopyToClip from "../islands/CopyToClip.tsx";

export default function Docs() {
  const children = [
    { name: "What's DenoSoar", href: "#" },
    { name: "Getting Started", href: "#" },
    { name: "Guide", href: "#" },
    { name: "Showcase", href: "#" },
    { name: "Contributions and Issues", href: "#" },
    { name: "Release Notes", href: "#" },
  ];

  return (
    <div>
      <Header />
      <div id="docs-body" >
        <aside class="col-span-1" aria-label="Sidebar">
          <div
            class="pl-5 w-64 h-full shadow-md bg-white"
            key="Documentations"
          >
            <br />
            <div class="font-extrabold">Menu</div>
            <ul class="space-y-6">
              {children.map((child) => (
                <li class="mt-4" key={child.name}>
                  <a
                    class="w-full text-left text-[#635454] p-3 rounded-lg text-sm hover:bg-[#ded5ad] hover:text-[#17313b] hover:scale-110 duration-300"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main class="col-span-3 pt-20 px-5" id="docs-main">
          <h1 class="mx-auto max-w-screen-md font-bold text-5xl">
            Welcome to DenoSoar
          </h1>
          <p class="mx-auto max-w-screen-md">
            <br />
            Denosoar is an open source memory tool that is used to track
            potential memory leaks for applications built with Deno. Denosoar
            analyzes and displays in real time the RSS(resident set size), Heap
            Total, Heap Usage and External Memory using easy to read charts

            .
          </p>
          <br />
          <h2 class="mx-auto max-w-screen-md font-bold text-3xl">
            Getting started
          </h2>
          <p>
            <ul class="mx-auto max-w-screen-md ">
              <li>list of commands to follow with GIF or CLI snippets</li>

              <CopyToClip>
                deno run --allow-read --allow-env --allow-net --allow-run
                test/leaky.ts
              </CopyToClip>
            </ul>
          </p>
          <br />

          <h2 class="mx-auto max-w-screen-md font-bold text-3xl">Guide</h2>
          <p class="mx-auto max-w-screen-md">
            <ul class="mx-auto max-w-screen-md">
              <li>
                list of commands to follow with GIF or CLI snippets
              </li>
            </ul>
          </p>
          <br />
          <h2 class="mx-auto max-w-screen-md font-bold text-3xl">Showcase</h2>
          <p class="mx-auto max-w-screen-md">
            <ul class="mx-auto max-w-screen-md">
              <li>
                list of commands to follow with GIF or CLI snippets
              </li>
            </ul>
          </p>
          <br />

          <h2 class="mx-auto max-w-screen-md font-bold text-3xl">
            Contributions and Issues
          </h2>
          <p class="mx-auto max-w-screen-md">
            <ul class="mx-auto max-w-screen-md">
              <li>
                list of commands to follow with GIF or CLI snippets
              </li>
            </ul>
          </p>
          <br />
          <h2 class="mx-auto max-w-screen-md font-bold text-3xl">
            Release notes
          </h2>
          <p class="mx-auto max-w-screen-md">
            <ul class="mx-auto max-w-screen-md">
              <li>
                list of commands to follow with GIF or CLI snippets
              </li>
            </ul>
          </p>
        </main>
      </div>
    </div>
  );
}
