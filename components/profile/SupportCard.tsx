"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";

type Props = {
  showBack?: boolean;
  backHref?: string;
};

const FAQS = [
  {
    q: "How do I view my loan details?",
    a: "Go to the Loan History card and expand an item to see details.",
  },
  {
    q: "How can I change my contact number?",
    a: "Use Edit Profile under Settings or contact support to update.",
  },
  {
    q: "What happens if I miss a payment?",
    a: "Your status shows Overdue and you may incur late fees.",
  },
];

export default function SupportCard({
  showBack,
  backHref = "/profile",
}: Props) {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return FAQS;
    return FAQS.filter(
      (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Ticket submitted. We'll get back to you shortly.");
    setName("");
    setEmail("");
    setMessage("");
    setFileName(null);
  }

  return (
    <Card
      title="Support"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="grid gap-3">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Search FAQs</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a question..."
            className="h-10 rounded-lg px-3 bg-surface border border-border"
          />
          <div className="grid gap-2">
            {results.map((f, idx) => (
              <div key={idx} className="rounded-md border border-border p-3">
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="text-sm text-foreground/80">{f.a}</div>
              </div>
            ))}
            {results.length === 0 && (
              <div className="text-sm text-foreground/60">
                No results found.
              </div>
            )}
          </div>
        </div>

        <form className="grid gap-2" onSubmit={onSubmit}>
          <label className="text-sm font-medium">Raise a Ticket</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="h-10 rounded-lg px-3 bg-surface border border-border"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="h-10 rounded-lg px-3 bg-surface border border-border"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="min-h-24 rounded-lg px-3 py-2 bg-surface border border-border"
          />
          <div className="flex items-center gap-2 text-xs">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="file"
                onChange={(e) =>
                  setFileName(
                    e.target.files && e.target.files[0]
                      ? e.target.files[0].name
                      : null
                  )
                }
              />
              <span className="text-foreground/70">
                {fileName ? `Attached: ${fileName}` : "Attachment (Optional)"}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="h-10 rounded-lg bg-primary text-white font-semibold"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </Card>
  );
}
