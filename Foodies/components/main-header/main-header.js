import Image from 'next/image';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackgroud from './main-header-background';
import NavLink from './nav-link';
import Link from 'next/link';
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackgroud />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
