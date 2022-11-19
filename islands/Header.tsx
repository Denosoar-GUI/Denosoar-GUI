import { useEffect, useRef, useState } from "preact/hooks";
import { tw } from "twind";
export default function Header() {
  const ref = useRef(window);
  const [navOpen, setNavOpen] = useState(false);
  const LINK_STYLE = tw`block mt-4 md:inline-block md:mt-0 hover:text-black`;
  const NAV_STYLE =
    tw`w-full block flex-grow md:flex md:items-center md:w-auto`;
  const NAV_LINKS_STYLE = tw`text-xl md:flex-grow`;
  const BUTTON_STYLE =
    tw`inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-yellow-400 mt-4 md:mt-0`;
  useEffect(() => {
    let lastKnownWidth = 0;
    let ticking = false;
    const doSomething = (width) => {
      // console.log(width);
      if (width > 768) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    };
    const onResize = (e) => {
      lastKnownWidth = ref.current.innerWidth;
      if (!ticking) {
        ref.current.requestAnimationFrame(() => {
          doSomething(lastKnownWidth);
          ticking = false;
        });
        ticking = true;
      }
    };
    doSomething(ref.current.innerWidth);
    ref.current.addEventListener("resize", onResize);
    return () => {
      ref.current.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div class="bg-gray-300">
      <nav class="flex items-center justify-between flex-wrap p-6 max-w-screen-md mx-auto">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <a href="/" class="mx-4 my-6 md:my-0">
            <img
              src="/super-deno.png"
              class="h-10 inline border-1 border-solid border-white h-32 w-32 rounded-full"
            />
          </a>
          <a href="/">
            <span class="font-semibold text-4xl tracking-tight">
              Denosoar
            </span>
          </a>
        </div>
        <div class="place-self-center block md:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-black hover:border-yellow-400 hover:bg-gray-400 focus:outline-none"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {navOpen
          ? (
            <div class={tw`${NAV_STYLE}`}>
              <div class={tw`${NAV_LINKS_STYLE} flex items-center ...`}>
                <a
                  href="/"
                  class={tw`${LINK_STYLE} mr-4 `}
                >
                  Home
                </a>
                <a
                  href="/about"
                  class={tw`${LINK_STYLE} mr-4`}
                >
                  About
                </a>
                <a
                  href="/docs"
                  class={tw`${LINK_STYLE} mr-4 `}
                >
                  Docs
                </a>
                <a
                  href="https://github.com/oslabs-beta/denosoar"
                  target="_blank"
                  rel="noopener noreferrer"
                  class={tw`${BUTTON_STYLE} mr-4`}
                >
                  <img
                    src="/icons8-github-100.png"
                    class="w-10 h-10 bg-white rounded-full"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class={tw`${BUTTON_STYLE}`}
                  mr-4
                >
                  <img
                    src="/icons8-linkedin-circled-100.png"
                    class="w-10 h-10 bg-white rounded-full"
                  />
                </a>
              </div>
            </div>
          )
          : ""}
      </nav>
    </div>
  );
}
