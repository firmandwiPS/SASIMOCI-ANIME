
import AnimeList from "../../../components/AnimeList";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Utilities/HeaderMenu";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
    const { keyword } = params
    
    const decodedKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("anime" , `q=${decodedKeyword}`)


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
