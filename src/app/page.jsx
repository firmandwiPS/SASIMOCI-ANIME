
import AnimeList from "@/components/Animelist";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_url}/top/anime?limit=8`)
  const topAnime = await response.json()


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
