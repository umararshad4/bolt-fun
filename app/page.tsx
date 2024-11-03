import SearchBar from "@/components/search/SearchBar";
import ParallaxCards from "@/components/ParallaxCards";

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <SearchBar />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Discover Amazing Places
        </h1>
        <ParallaxCards />
      </div>
    </main>
  );
}