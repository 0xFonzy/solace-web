import { advocateData, specialties } from "../../../db/seed/advocates";

export async function GET() {
  const data = advocateData;
  const cities = data.map((advocate) => advocate.city);
  const uniqueCities = Array.from(new Set(cities));
  return Response.json({ specialties, cities: uniqueCities });
}
