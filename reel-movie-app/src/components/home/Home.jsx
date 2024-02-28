import HomeCarousel from "./HomeCarousel";
import TopRatedScroller from "./TopRatedScroller"
import HeroCards from "../HeroCards/HeroCards";
import "./home.css"


export default function Home({data}) {

  return(
    <>
      <section className="hero">
        <h1 className="header">Movie reviewer</h1>
        <HeroCards/>
      </section>
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />
      <TopRatedScroller data={data} />

    </>
  )
}