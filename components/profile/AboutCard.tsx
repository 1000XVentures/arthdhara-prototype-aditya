"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";

export default function AboutCard({
  showBack = false,
  backHref = "/profile",
}: {
  showBack?: boolean;
  backHref?: string;
}) {
  return (
    <Card
      title="About Us"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <Image
          src="/images/arthdhara logo.png"
          alt="Arthdhara Logo"
          width={72}
          height={72}
          className="size-18 object-contain"
        />
        <p className="text-sm text-foreground/80 leading-relaxed">
          Arthdhara is on a mission to make responsible credit and wealth access
          simple, transparent, and inclusive for every Indian. We combine
          intuitive design with strong compliance practices to help you borrow
          smarter and grow your money with confidence.
        </p>
        <p className="text-xs text-foreground/60 leading-relaxed">
          This app is an early prototype for demonstration and testing. Product
          features, terms, and policies may evolve. For any questions, please
          reach out from the Support section.
        </p>
      </div>
    </Card>
  );
}
