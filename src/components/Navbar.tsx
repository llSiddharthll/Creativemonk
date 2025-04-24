import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <header className="z-20 flex justify-between items-center bg-white/30 fixed w-full top-0 backdrop-blur-xs px-10 py-4 border-b border-gray-200 shadow-md">
            <div>
                <img className="h-12" src="https://creativemonk.in/static/media/cm-logo.5bff98c1a759dbc26685.webp" alt="" />
            </div>
            <nav className="flex gap-6 font-semibold">
                <Link to={"/"} >Home</Link>
                <Link to={"/"} >About Us</Link>
                <Link to={"/"} >Services</Link>
                <Link to={"/"} >Portfolio</Link>
                <Link to={"/"} >Contact Us</Link>
            </nav>
            <div>
                <button className="bg-orange-500 text-white py-2 px-4 rounded font-semibold">Enquire Now</button>
            </div>
        </header>
    )
}