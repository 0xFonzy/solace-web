import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Advocate } from "../types/advocate";

export default function AdvocateCard({ advocate }: { advocate: Advocate }) {
  return (
    <Card className="overflow-hidden glass">
      <CardHeader>
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Image
            src={advocate.imageUrl}
            alt={advocate.firstName}
            className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-lg font-bold">
          {advocate.firstName} {advocate.lastName}
        </p>
        <p className="text-sm text-gray-500">{advocate.city}</p>
      </CardBody>
    </Card>
  );
}
