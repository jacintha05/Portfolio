import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-8 py-4 bg-primary shadow-md fixed w-full top-0 z-50">
            {/* Brand Name */}
            <a className="font-extrabold text-2xl text-white tracking-wide hover:text-secondary transition-all duration-300" href="#">
                Welcome To My Portfolio
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-8 text-white text-lg font-medium">
                    <li><a className="hover:text-secondary transition-all duration-300" href="/">Home</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="/#about">About</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="/#projects">Projects</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="/#resume">Resume</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="/#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden p-2 bg-secondary rounded-lg text-white transition-transform hover:scale-105">
                {toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* Mobile Navigation */}
            <nav className={`fixed top-0 right-0 w-3/4 h-full bg-primary text-white shadow-lg transform ${toggleMenu ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
                <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold">
                    <li><a className="hover:text-secondary transition-all duration-300" href="#" onClick={() => setToggleMenu(false)}>Home</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="#projects" onClick={() => setToggleMenu(false)}>Projects</a></li>
                    <li><a className="hover:text-secondary transition-all duration-300" href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
