"use client";

import { useEffect, useState, useMemo } from "react";
import { Advocate } from "./types/advocate";
import AdvocateCard from "./components/AdvocateCard";
import SearchBar from "./components/SearchBar";
import { SearchFilterOptions } from "./types/search";

import useSWR from "swr";
import SkeletonCard from "./components/SkeletonCard";

const SKELETON_CARDS_COUNT = 8;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  const { data: advocates, isLoading: advocatesLoading } = useSWR<{
    data: Advocate[];
  }>("/api/advocates", fetcher);

  const { data: searchFilterOptions } = useSWR<SearchFilterOptions>(
    "/api/filters",
    fetcher
  );

  const skeletonCards = useMemo(
    () =>
      Array.from({ length: SKELETON_CARDS_COUNT }, (_, i) => (
        <SkeletonCard key={`skeleton-${i}`} />
      )),
    []
  );

  useEffect(() => {
    if (advocates) {
      setFilteredAdvocates(advocates.data);
    }
  }, [advocates]);

  const handleSearch = (searchTerm: string) => {
    const filteredAdvocates = advocates?.data.filter((advocate) => {
      return advocate.firstName.includes(searchTerm);
    });
    setFilteredAdvocates(filteredAdvocates || []);
  };

  return (
    <main className="min-h-screen w-full relative flex flex-col items-center">
      {/* Background blur effects */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] -bottom-40 -right-40" />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-merriweather text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Find Your Perfect{" "}
            <span className="text-primary">Health Advocate</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            Connect with experienced health advocates who can guide you through
            complex healthcare systems, manage billing issues, and ensure you
            receive the care you deserve.
          </p>
        </div>
        <SearchBar
          specialties={searchFilterOptions?.specialties || []}
          cities={searchFilterOptions?.cities || []}
          onSearch={handleSearch}
        />
        <div className="space-y-4 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full">
            {advocatesLoading
              ? skeletonCards
              : filteredAdvocates.map((advocate) => (
                  <AdvocateCard key={advocate.id} advocate={advocate} />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}
