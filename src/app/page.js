import Search from "@/components/Search";
import AnimeList from "@/components/Animelist";
import Image from "next/image";
import Link from "next/link";


const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_url}/top/anime?limit=8`)
  const anime = await response.json()


  return (
    <div>
    <div className="p-4 flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Paling Poluler</h1>
      <Link href="/populer" className="md:text-xl text-ms underline hover:text-indigo-500 transsition-all">Lihat Semua</Link>
    </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map(data => {
            return (
              <div key={data.mal_id} className="shadow-2xl">
               <AnimeList
              title={data.title}
              images={data.images.webp.image_url} 
              id={data.mal_id}  
              /> 
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
