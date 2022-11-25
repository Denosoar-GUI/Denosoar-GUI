
import { useState, useEffect, useRef } from "preact/hooks";
import MenuButton from "../components/MenuButton.tsx";
import Links from "../components/Links.tsx";

/**
 * Site navigation links.
 */
export default function Nav(){
  const ref = useRef(window);
  const [navOpen, setNavOpen] = useState(false);
  
  useEffect(() => {
    let lastKnownWidth = 0;
    let ticking = false;
    const collapse = (width: number) => {
      // console.log(width);
      if (width > 768) {
        setNavOpen(true);
      } else {
        setNavOpen(false);
      }
    };
    const onResize = (e: Event) => {
      lastKnownWidth = ref.current.innerWidth;
      if (!ticking) {
        ref.current.requestAnimationFrame(() => {
          collapse(lastKnownWidth);
          ticking = false;
        });
        ticking = true;
      }
    };
    collapse(ref.current.innerWidth);
    ref.current.addEventListener("resize", onResize);
    return () => {
      ref.current.removeEventListener("resize", onResize);
    };
  }, []);

  
    return (
      <div class="flex flex-row justify-between items-center overflow-hidden">
        {navOpen ? <Links/> : <></>}
        <MenuButton onClick = {() => {
          setNavOpen( (prev) => {
            // const title = document.getElementById('denosaur');
            // console.log(title)
            // if (!prev) { title?.classList.add('hidden') }
            // else {title?.classList.remove('hidden')}
            return !prev;
          });
          }
        }/>
      </div>
  )
}