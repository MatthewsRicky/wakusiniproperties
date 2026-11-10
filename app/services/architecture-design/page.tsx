import { notFound } from "next/navigation";

import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { getServiceBySlug } from "@/data/services";

export default function ArchitecturalDesignPage() {
  const service = getServiceBySlug("architecture-design");

  if (!service) {
    notFound();
  }

  return <ServiceDetailLayout service={service} />;
}
