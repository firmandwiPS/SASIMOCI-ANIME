
import AnimeList from "@/components/Animelist";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")


  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Terpopuler Selesai */}
    </>
  )
}

export default Page
