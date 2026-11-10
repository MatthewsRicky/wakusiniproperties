import { notFound } from "next/navigation";

import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getServiceBySlug } from "@/data/services";

export default function VillaManagementPage() {
  const service = getServiceBySlug("villa-management");

  if (!service) notFound();

  return <ServiceDetailLayout service={service} />;
}
