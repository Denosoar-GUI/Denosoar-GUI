import IconMenu from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/menu.tsx"
export default function Header() {
  return (
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between ">
      <div class ='md:flex md:items-center font-mono bg-gray-300 flex w-full justify-between p-5'>
        <div class="flex justify-around items-center">
          <span class="text-2xl cursor-pointer"> 
            <a 
              href="/" 
      
              class="mx-4 my-6 md:my-0"> 
              <img
              src="/super-deno.png"
              class="h-10 inline border-1 border-solid border-white h-32 w-32 rounded-full"
            />
            </a>
          </span>
          <h1 class="mx-4 text-8xl mx-auto">Denosoar</h1>
          <span class="text-3xl cursor-pointer mx-2 md:hidden block absolute  right-10">
            <IconMenu name = "menu" onClick=""></IconMenu>
          </span>
        </div>
        <ul class=" md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
          <li class="mx-4 my-6 md:my-0">
            <a href="/" class="text-xl hover:text-cyan-500 duration-500">Home</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="/about" class="text-xl hover:text-cyan-500 duration-500">About</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="/docs" class="text-xl hover:text-cyan-500 duration-500">Docs</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a
              href="https://github.com/oslabs-beta/denosoar"
              target="_blank"
              rel="noopener noreferrer"
              class="mx-4 my-6 md:my-0"
            >
              <img
              src="/icons8-github-100.png"
              class="w-10 h-10 bg-white rounded-full"
              />
            </a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="mx-4 my-6 md:my-0">
              <img
                src="/icons8-linkedin-circled-100.png"
                class="w-10 h-10 bg-white rounded-full"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
