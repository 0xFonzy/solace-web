"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types/advocate";
import AdvocateCard from "./components/AdvocateCard";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const filteredAdvocates = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm) ||
        advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  return (
    <main className="min-h-screen w-full relative">
      {/* Background blur effects */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary/20 blur-[120px] -top-40 -left-40" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/20 blur-[100px] -bottom-40 -right-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-merriweather text-4xl font-bold mb-8">
          Solace Advocates
        </h1>
        <div className="space-y-4">
          <div>
            <input
              className="border border-gray-300 rounded-md px-4 py-2 mt-2"
              onChange={onChange}
            />
            <button className="ml-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
              Search Advocates
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredAdvocates.map((advocate) => (
            <AdvocateCard key={advocate.id} advocate={advocate} />
          ))}
        </div>
      </div>
    </main>
  );
}
