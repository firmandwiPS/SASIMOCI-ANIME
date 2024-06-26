import AnimeList from "../components/AnimeList";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8 )

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      {/* Anime Terpopuler Selesai */}

      {/* Anime Rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
      {/* Anime Rekomendasi Selesai */}
    </>
  )
}

export default Page
