import Search from "@/components/Search";
import AnimeList from "@/components/Animelist";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    const { keyword } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_url}/anime?q=${keyword}`)
    const searchAnime = await response.json()


    return (
        <>
            {/* Anime Terpopuler */}
            <section>
                <Header title={`Pencarian Untuk ${keyword}`} />
                <AnimeList api={searchAnime} />
            </section>
            {/* Anime Terpopuler Selesai */}
        </>
    )
}

export default Page
