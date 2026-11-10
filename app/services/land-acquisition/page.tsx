import { notFound } from "next/navigation";

import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getServiceBySlug } from "@/data/services";

export default function LandAcquisitionPage() {
  const service = getServiceBySlug("land-acquisition");

  if (!service) notFound();

  return <ServiceDetailLayout service={service} />;
}
