import Nav from '../islands/Nav.tsx';
import Logo from './Logo.tsx';


/**
 * Header; handles collapsing of the Nav component on resize. 
 * Contains components: Nav, Logo, MenuButton.
 */
export default function Header() {

  return (
    <div class="bg-blue-200 h-44 flex items-center justify-between p-6 mx-auto overflow-hidden">
        <Logo />
        <Nav />
    </div>
  );
}
