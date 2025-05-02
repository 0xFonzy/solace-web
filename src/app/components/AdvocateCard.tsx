import {
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
        <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-100">
          <Image
            src={advocate.imageUrl}
            alt={advocate.firstName}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105 rounded-none"
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardBody className="p-4 gap-2">
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
              <Chip key={specialty.value} size="sm" variant="flat">
                {specialty.label}
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
