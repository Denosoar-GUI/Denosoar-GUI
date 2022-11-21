
/**
 * Logo and name.
 */
export default function Logo() {
  return(
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
  )
}