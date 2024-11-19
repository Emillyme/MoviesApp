import SearchBar from "./SearchBar"
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
        <body className='bg-slate-800 font-poppins'>
            <header className="w-full p-5 flex justify-between">
                <div className="flex justify-between items-center rel">
                    <ul>
                        <li>
                            <SearchBar/>
                            <IoNotificationsOutline/>
                        </li>
                    </ul>
                </div>
            </header>  
        </body>
    )
}

export default Navbar