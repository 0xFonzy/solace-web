import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@heroui/react";
import { Advocate } from "../types/advocate";
import Carousel from "./Carousel";

export default function AdvocateCard({ advocate }: { advocate: Advocate }) {
  return (
    <Card className="overflow-hidden border-none" radius="sm">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Image
            src={advocate.imageUrl}
            alt={advocate.firstName}
            className="h-full w-full object-cover transition-all duration-300 hover:scale-105 rounded-sm"
          />
        </div>
      </CardHeader>
      <CardBody className="p-4 gap-4">
        <div>
          <p className="text-lg font-bold">
            {advocate.firstName} {advocate.lastName} &nbsp;
          </p>
          <p className="text-sm text-gray-500">
            {advocate.degree}, {advocate.city}
          </p>
        </div>
        <Carousel scrollSpeed={1}>
          <div className="flex items-center gap-2">
            {advocate.specialties.map((specialty) => (
              <Chip key={specialty} size="sm" variant="flat">
                {specialty}
              </Chip>
            ))}
          </div>
        </Carousel>
        <p className="text-sm text-gray-500">
          Available <span className="font-bold">this week</span>
        </p>
      </CardBody>
      <CardFooter>
        <Button className="w-full bg-primary text-white" disableRipple>
          Book Consultation
        </Button>
      </CardFooter>
    </Card>
  );
}
