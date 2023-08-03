import Link from "next/link";

const Header = () => {
    return (
        <header className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between w-full items-center">

            <h3 className="text-2xl uppercase font-medium">Subjective <span className="bg-red-500 p-1 text-white ">rooms</span> </h3>
           <nav>
                <ul className="flex items-center space-x-4 uppercase ">
                    <li className="hover:text-red-500 duration-200">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-red-500 duration-200">
                        <Link href="/allSubject">All Subjects</Link>
                    </li>

                </ul>
           </nav>
        </header>
    );
};

export default Header;