import { Filter, Search, X } from "lucide-react";
import { useState } from "react";
import { AdvocateSearchFilter } from "../types/advocate";
import { motion } from "framer-motion";

type SearchBarProps = {
  specialties: string[];
  cities: string[];
  onSearch: (searchTerm: string) => void;
};

export default function SearchBar({
  specialties,
  cities,
  onSearch,
}: SearchBarProps) {
  console.log(specialties, cities);
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<AdvocateSearchFilter>({
    name: "",
    city: "",
    degree: "",
    specialty: "",
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchTerm = formData.get("search") as string;
    onSearch(searchTerm);
  };

  const clearFilters = () => {
    setFilters({
      name: "",
      city: "",
      degree: "",
      specialty: "",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative glass rounded-lg overflow-hidden">
          <div className="flex items-center px-4">
            <Search size={20} className="text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for health advocates by name, specialty, or location..."
              className="w-full py-4 px-3 bg-transparent border-none outline-none"
              aria-label="Search for health advocates"
            />
            <button
              type="button"
              className="p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-700/50"
              aria-label="Toggle filters"
              aria-expanded={showFilters}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter
                size={20}
                className="text-neutral-600 dark:text-neutral-300"
              />
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4 pt-2 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="w-full sm:w-[calc(50%-0.5rem)]">
                  <label
                    htmlFor="specialty"
                    className="block text-sm font-medium mb-1"
                  >
                    Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    className="input-field"
                    value={filters.specialty}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        specialty: e.target.value,
                      })
                    }
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full sm:w-[calc(50%-0.5rem)]">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium mb-1"
                  >
                    Location
                  </label>
                  <select
                    id="location"
                    value={filters.city}
                    onChange={(e) =>
                      setFilters({ ...filters, city: e.target.value })
                    }
                    className="input-field"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    <X size={16} className="mr-1" />
                    Clear filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
}
