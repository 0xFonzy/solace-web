import { Filter, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AdvocateSearchFilter } from "../types/advocate";
import { motion } from "framer-motion";
import { debounce } from "lodash";
import { Select, SelectItem } from "@heroui/react";

type SearchBarProps = {
  specialties: string[];
  cities: string[];
  onSearch: (searchTerm: string, filters: AdvocateSearchFilter) => void;
};

export default function SearchBar({
  specialties,
  cities,
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<AdvocateSearchFilter>({
    city: "",
    specialty: "",
  });

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string, filters: AdvocateSearchFilter) => {
        onSearch(term, filters);
      }, 500),
    [onSearch]
  );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
    debouncedSearch(value, filters);
  };

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => {
      const newFilters = { ...prev, [name]: value };
      debouncedSearch(query, newFilters);
      return newFilters;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative glass rounded-lg overflow-hidden">
        <div className="flex items-center px-4">
          <Search size={20} className="text-neutral-500" />
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search for health advocates by name, specialty, or city..."
            className="w-full py-4 px-3 bg-transparent border-none outline-none"
            aria-label="Search for health advocates"
          />
          <button
            type="button"
            className="p-2 rounded-md hover:bg-white/50 dark:hover:bg-neutral-700/50"
            aria-label="Toggle filters"
            aria-expanded={showFilters}
            onClick={handleToggleFilters}
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
            className="px-4 py-4 border-t border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="w-full sm:w-[calc(50%-0.5rem)]">
                <Select
                  id="specialty"
                  name="specialty"
                  label="Specialty"
                  placeholder="Select a specialty"
                  size="sm"
                  value={filters.specialty}
                  onChange={handleFilterChange}
                  className="input-field"
                >
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty}>{specialty}</SelectItem>
                  ))}
                </Select>
              </div>
              <div className="w-full sm:w-[calc(50%-0.5rem)]">
                <Select
                  id="city"
                  name="city"
                  label="City"
                  placeholder="Select a city"
                  size="sm"
                  value={filters.city}
                  onChange={handleFilterChange}
                  className="input-field"
                >
                  {cities.map((city) => (
                    <SelectItem key={city}>{city}</SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
