export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
  imageUrl: string;
};

export type AdvocateSearch = {
  name: string;
  city: string;
  degree: string;
  specialties: string[];
};

export type AdvocateSearchRequest = {
  name: string;
  city: string;
  degree: string;
  specialties: string[];
};

export type AdvocateSearchResponse = {
  advocates: Advocate[];
};
