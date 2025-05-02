"use client";

// External dependencies
import { useMemo } from "react";
import useSWR from "swr";
import { addToast, SelectItem, Select } from "@heroui/react";
import axiosInstance from "./lib/axios";

// Internal types
import { Advocate, AdvocateSearchFilter } from "./types/advocate";

// Internal components
import AdvocateCard from "./components/AdvocateCard";
import SearchBar from "./components/SearchBar";
import SkeletonCard from "./components/SkeletonCard";

// Internal utilities
import { formatQueryString } from "./lib/query";
import { FilterResponse } from "./types/filter";

const SKELETON_CARDS_COUNT = 8;

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default function Home() {
  const {
    data: advocates,
    isLoading: advocatesLoading,
    mutate,
  } = useSWR<Advocate[]>("/advocates", fetcher);
  const { data: filters } = useSWR<FilterResponse>("/filters", fetcher);

  const skeletonCards = useMemo(
    () =>
      Array.from({ length: SKELETON_CARDS_COUNT }, (_, i) => (
        <SkeletonCard key={`skeleton-${i}`} />
      )),
    []
  );

  const handleSearch = async (filters: AdvocateSearchFilter) => {
    mutate(
      async () => {
        try {
          const queryString = formatQueryString(filters);
          const { data: advocatesData } = await axiosInstance.get<Advocate[]>(
            `/advocates${queryString}`
          );
          return advocatesData;
        } catch (error) {
          addToast({
            title: "Search Error",
            description: "Failed to fetch advocates",
            color: "warning",
          });
          throw error;
        }
      },
      {
        optimisticData: [],
        rollbackOnError: true,
        populateCache: true,
        revalidate: false,
      }
    );
  };

  return (
    <div className="relative pb-8">
      {/* Background blur effects */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px] -bottom-40 -right-40" />
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="min-h-[40vh] flex flex-col justify-end py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-merriweather text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Find Your <span className="text-primary">Health Advocate</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Connect with experienced health advocates who can guide you
              through complex healthcare systems, manage billing issues, and
              ensure you receive the care you deserve.
            </p>
          </div>
        </div>

        <SearchBar
          specialties={filters?.specialties || []}
          cities={filters?.cities || []}
          onSearch={handleSearch}
        />
        <div className="mt-16 flex justify-between text-neutral-400">
          <p>Showing {advocates?.length} advocates</p>
          <div className="flex items-center gap-2 w-full max-w-xs">
            <p className="w-24">Sort by:</p>
            <Select placeholder="Highest Rated" disabled>
              <SelectItem>Highest Rated</SelectItem>
            </Select>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advocatesLoading
              ? skeletonCards
              : advocates?.map((advocate) => (
                  <AdvocateCard key={advocate.id} advocate={advocate} />
                ))}
          </div>
        </div>
        {!advocatesLoading && advocates?.length === 0 && (
          <div className="mt-8 text-center text-neutral-400 p-4">
            No advocates found, try another search.
          </div>
        )}
      </div>
    </div>
  );
}
