
import { useState, useEffect, useRef } from "preact/hooks";
import MenuButton from "../components/MenuButton.tsx";
import Links from "../components/Links.tsx";

/**
 * Site navigation links.
 */
export default function Nav() {
  const ref = useRef(window);
  const [navOpen, setNavOpen] = useState(false);
  const [seeButton, setSeeButton] = useState(false);

  /**
   * Collapse the navigation on window resizing.
   */
  useEffect(() => {
    let lastKnownWidth = 0;
    let ticking = false;
    // collapse the navigation if width is less than 915px na sshow menu button
    const collapse = (width: number) => {
      if (width > 915) {
        setNavOpen(true);
        setSeeButton(false);
      } else {
        setNavOpen(false);
        setSeeButton(true);
      }
    };
    //dynamically set the window width 
    const onResize = () => {
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
      {navOpen ? <Links /> : <></>}
      <MenuButton seen={seeButton} handleClick={() => setNavOpen(!navOpen)} />
    </div>
  )
}