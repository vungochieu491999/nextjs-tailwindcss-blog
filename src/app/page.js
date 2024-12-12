import {allPosts} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center container mx-auto">
      {/* <HomeCoverSection posts={allPosts} /> */}
      <FeaturedPosts posts={allPosts} />
      <RecentPosts posts={allPosts} />
    </main>
  )
}
