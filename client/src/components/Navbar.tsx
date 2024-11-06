import SearchBar from './searchBar'

const Navbar = () => {
  return (
        <body className='bg-slate-800 font-poppins'>
            <header className="w-full p-5">
                <div className="flex justify-between items-center">
                    <ul>
                        <li>
                            <SearchBar/>
                        </li>
                    </ul>
                </div>
            </header>  
        </body>
    )
}

export default Navbar