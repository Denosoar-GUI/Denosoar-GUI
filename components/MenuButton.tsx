import { JSX } from 'preact';

/**
 * A clickable menu button that either opens or collapses the Nav component.
 */
export default function MenuButton(props: { onClick: JSX.HTMLAttributes<HTMLButtonElement>, seen: boolean}) {
  if(props.seen){
    return(
      <button
        class="flex items-center px-3 py-2 border rounded text-black hover:border-yellow-400 hover:bg-gray-400 focus:outline-none"
        onClick={props.onClick}
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
    )
  } else { 
    return (
      <div></div>
    )
  }                   
}
