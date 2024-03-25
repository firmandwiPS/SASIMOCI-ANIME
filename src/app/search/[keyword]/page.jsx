
import AnimeList from "@/components/Animelist";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    const { keyword } = params
    
    const decodedKeyword = decodeURI(keyword)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const searchAnime = await response.json()


    return (
        <>
            {/* Anime Terpopuler */}
            <section>
                <Header title={`Pencarian Untuk ${decodedKeyword}.....`} />
                <AnimeList api={searchAnime} />
            </section>
            {/* Anime Terpopuler Selesai */}
        </>
    )
}

export default Page
