import { tw } from "twind";

export default function Links() {
  const LINK_STYLE = tw`block mt-4 md:inline-block md:mt-0 hover:text-black flex-none`;
  const NAV_STYLE =
    tw`w-full block flex-grow md:flex md:items-center md:w-auto`;
  const NAV_LINKS_STYLE = tw`text-xl `;
  const BUTTON_STYLE =
    tw`inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:bg-yellow-400 mt-4 md:mt-0 flex-none`
  return (
    <nav class="">
      <div class={tw`${NAV_STYLE}`}>
        <div class={tw`${NAV_LINKS_STYLE} flex items-center`}>
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
            href="/csv"
            class={tw`${LINK_STYLE} mr-4`}
          >
            Upload Chart
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
            server
          </a>
          <a
            href="https://github.com/Denosoar-GUI/Denosoar-GUI"
            target="_blank"
            rel="noopener noreferrer"
            class={tw`${BUTTON_STYLE} mr-4 text-center`}
            mr-4
          >
            <img
              src="/icons8-github-100.png"
              class="w-10 h-10 bg-white rounded-full"
            />
            GUI
          </a>
        </div>
      </div>
    </nav>
  )
}