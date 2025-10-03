"use client";

import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
  showBack?: boolean;
  backHref?: string;
};

function maskPAN(pan: string) {
  if (!pan || pan.length < 10) return "XXXXXXXXXX";
  return `${pan.slice(0, 1)}XXXX${pan.slice(5, 9)}X`;
}

export default function AccountInfoCard({
  showBack,
  backHref = "/profile",
}: Props) {
  const { phone } = useAuth();

  const userName = "Ananya Sharma";
  const userId = "ADH-10293";
  const pan = "ABCDE1234F";
  const masked = maskPAN(pan);
  const email = "ananya@example.com";
  const contact = phone || "+91 90000 00000";

  return (
    <Card
      title="Account Info"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="grid gap-1 text-sm">
        <div className="font-medium">{userName}</div>
        <div className="text-foreground/70">PAN: {masked}</div>
        <div className="text-foreground/70">Arthdhara ID: {userId}</div>
        <div className="text-foreground/70">
          {email} • {contact}
        </div>
      </div>
    </Card>
  );
}
