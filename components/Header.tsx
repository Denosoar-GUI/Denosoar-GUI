import Nav from '../islands/Nav.tsx';
import Logo from './Logo.tsx';


/**
 * Header; handles collapsing of the Nav component on resize. 
 * Contains components: Nav, Logo, MenuButton.
 */
export default function Header() {

  return (
    <div class="bg-blue-200">
      <div class="flex items-center justify-between flex-wrap p-6 mx-auto">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
