export type FilterItem = {
  value: string;
  label: string;
};

export type FilterResponse = {
  cities: FilterItem[];
  specialties: FilterItem[];
};
