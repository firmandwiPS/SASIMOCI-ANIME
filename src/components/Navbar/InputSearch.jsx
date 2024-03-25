"use client"

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    
    const hendleSearch = () => {
        event.preventDefault()
        const keyword = searchRef.current.value
        if(!keyword) return

        router.push(`/search/${keyword}`)
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            hendleSearch(event)
        }
    }

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="relative">
            <input
                placeholder="cari anime...."
                className="p-2 rounded w-full"
                ref={searchRef}
                onKeyPress={handleKeyPress}
            />
            <button className="absolute top-2 end-2" onClick={hendleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch