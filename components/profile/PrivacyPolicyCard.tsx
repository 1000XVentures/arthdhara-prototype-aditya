"use client";

import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";

export default function PrivacyPolicyCard({
  showBack = false,
  backHref = "/profile",
}: {
  showBack?: boolean;
  backHref?: string;
}) {
  return (
    <Card
      title="Privacy Policy"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="space-y-4 text-sm text-foreground/80">
        <p>
          We respect your privacy. This Privacy Policy explains how we collect,
          use, and safeguard your information when you use our app.
        </p>
        <div>
          <h4 className="font-semibold text-foreground">
            Information We Collect
          </h4>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              Account data you provide (name, contact details, KYC identifiers).
            </li>
            <li>
              Usage data (device information, app interactions, diagnostics).
            </li>
            <li>
              Optional data with consent (communications, support queries).
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">
            How We Use Information
          </h4>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>
              To provide features, personalize experience, and improve
              reliability.
            </li>
            <li>
              To meet legal and regulatory obligations and prevent misuse.
            </li>
            <li>To communicate updates, support, and important notices.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Data Sharing</h4>
          <p>
            We do not sell your data. We may share with service providers and
            partners under strict agreements, or when required by law.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Security</h4>
          <p>
            We apply reasonable technical and organizational measures to protect
            data. However, no system is perfectly secure; use the app
            responsibly.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Your Choices</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Access or update your account information.</li>
            <li>Contact support to request data deletion subject to law.</li>
            <li>Control permissions from your device settings.</li>
          </ul>
        </div>
        <p className="text-xs text-foreground/60">
          This is a general template and may be updated. For specific terms,
          please refer to the latest in-app documents or contact Support.
        </p>
      </div>
    </Card>
  );
}
