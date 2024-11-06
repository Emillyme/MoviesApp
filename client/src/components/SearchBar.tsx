import React, { useState } from 'react'
import { Input } from './ui/input'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    const [search, setSearch] = useState('')
    
    return (
        <>
            <div className="relative w-full">
            <form action="">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 cursor-pointer text-lg">
                    <CiSearch />
                </span>
                <Input
                    type="text" 
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full pl-9 py-2 rounded-md bg-slate-700 text-sm text-gray-300 placeholder-gray-400'
                />    
            </form> 
            </div>
        </>
    )
}

export default SearchBar