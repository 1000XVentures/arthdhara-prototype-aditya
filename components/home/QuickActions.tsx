import Link from "next/link";
import Image from "next/image";

export default function QuickActions() {
  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold text-[#0B1215]">Quick Actions</h3>
      <div className="bg-white rounded-xl p-4 border border-gray-100">
        <section className="flex items-center">
          <Link
            href="/hub"
            className="group flex flex-col items-center text-center gap-2 p-4 hover:bg-gray-50 transition-colors rounded-lg flex-1"
          >
            <div className="grid place-items-center">
              <Image
                src="/images/icons/Article.png"
                alt="Read Articles"
                width={40}
                height={40}
                className="size-10"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-800">
              Read Articles
            </h3>
          </Link>
          <div className="h-16 w-px bg-gray-100"></div>
          <Link
            href="/profile/support"
            className="group flex flex-col items-center text-center gap-2 p-4 hover:bg-gray-50 transition-colors rounded-lg flex-1"
          >
            <div className="grid place-items-center">
              <Image
                src="/images/icons/faq.png"
                alt="Check FAQs"
                width={40}
                height={40}
                className="size-10"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-800">Check FAQs</h3>
          </Link>
          <div className="h-16 w-px bg-gray-100"></div>
          <Link
            href="/hub"
            className="group flex flex-col items-center text-center gap-2 p-4 hover:bg-gray-50 transition-colors rounded-lg flex-1"
          >
            <div className="grid place-items-center">
              <Image
                src="/images/icons/video.png"
                alt="Watch Videos"
                width={40}
                height={40}
                className="size-10"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-800">
              Watch Videos
            </h3>
          </Link>
        </section>
      </div>
    </section>
  );
}
