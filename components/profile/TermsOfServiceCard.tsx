"use client";

import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";

export default function TermsOfServiceCard({
  showBack = false,
  backHref = "/profile",
}: {
  showBack?: boolean;
  backHref?: string;
}) {
  return (
    <Card
      title="Terms of Service"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="space-y-4 text-sm text-foreground/80">
        <p>
          By using this app, you agree to these Terms of Service. If you do not
          agree, please discontinue use.
        </p>
        <div>
          <h4 className="font-semibold text-foreground">Use of the App</h4>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Provide accurate information and keep your account secure.</li>
            <li>Do not misuse the app or violate applicable laws.</li>
            <li>We may modify or discontinue features at any time.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">
            Eligibility and Compliance
          </h4>
          <p>
            Certain features may require compliance checks and documentation as
            mandated by law. Access may be limited if requirements are not met.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">
            Limitation of Liability
          </h4>
          <p>
            To the maximum extent permitted by law, we are not liable for
            indirect or consequential damages arising from your use of the app.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Changes</h4>
          <p>
            We may update these Terms from time to time. Continued use implies
            acceptance of the latest version.
          </p>
        </div>
        <p className="text-xs text-foreground/60">
          This is a general template for demonstration. Refer to the in-app
          legal documents for the most current and specific terms.
        </p>
      </div>
    </Card>
  );
}
