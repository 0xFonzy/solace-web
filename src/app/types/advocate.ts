export type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: Specialty[];
  yearsOfExperience: number;
  phoneNumber: string;
  imageUrl: string;
  gender: string;
};

export type Specialty = {
  value: string;
  label: string;
};

export type AdvocateSearchFilter = {
  name: string;
  city: string;
  specialty: string;
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
