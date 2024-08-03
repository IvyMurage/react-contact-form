import { nanoid } from "nanoid"
import NavList from "../content.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { NavLink } from "react-router-dom"
import { useState } from "react"

function Nav() {
    const [visible, setVisible] = useState(false)
    const { nav_info: { Title, links } } = NavList

    const styles = {
        borderBottom: '1px solid #6372ff',
    }

    const navList = links.map((link: string) =>
        <NavLink
            to='link'
            style={({ isActive }) => isActive ? styles : {}}
            key={nanoid()}
            className='py-2 px-1 sm:px-4  text-basex tracking-wide'
        >
            {link.toUpperCase()}
        </NavLink>)


    return (
        <header className="p-4 sm:px-10 z-10 bg-white w-full fixed top-0 h-20 sm:flex sm:justify-between sm:items-center text-font-color">
            <div className="flex p-4 justify-between">
                <h1 className="font-bold text-2xl">{Title.toUpperCase()}</h1>
                <FontAwesomeIcon
                    onClick={() => setVisible(prevVisible => !prevVisible)} className="border-2 sm:hidden p-2 rounded-lg"
                    icon={faBars}
                />
            </div>
            <nav className={`flex  px-4  sm:items-center flex-col ${visible ? 'sm:hidden' : 'sm:block'}`}>
                {navList}
            </nav>

        </header>
    )
}

export default Nav