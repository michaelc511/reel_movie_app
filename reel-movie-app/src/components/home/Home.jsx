import HomeCarousel from "./HomeCarousel";
import TopRatedScroller from "./TopRatedScroller"


export default function Home({data}) {

  return(
    <>
      <section>
        <HomeCarousel data={data} />
      </section>
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />

    </>
  )
}