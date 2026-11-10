import { notFound } from "next/navigation";

import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getServiceBySlug } from "@/data/services";

export default function ConstructionPage() {
  const service = getServiceBySlug("construction");

  if (!service) notFound();

  return <ServiceDetailLayout service={service}  />;
}
