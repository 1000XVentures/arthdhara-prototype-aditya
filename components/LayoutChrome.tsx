"use client";

import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { usePathname } from "next/navigation";

type LayoutChromeProps = {
  children: React.ReactNode;
};

// Routes where the global TopBar and BottomNav should be hidden
const HIDE_CHROME_ROUTES = new Set<string>(["/", "/auth", "/landing"]);

// Routes where only BottomNav should be hidden (but TopBar should show with back button)
const HIDE_BOTTOM_NAV_ROUTES = new Set<string>([
  "/hub/articles",
  "/faqs",
  "/contact/call",
  "/contact/email",
  "/contact/form",
  "/profile/about",
  "/profile/privacy",
  "/profile/terms",
  "/profile/support",
  "/profile/loans",
  "/profile/settings",
  "/profile/account",
  "/profile/account-details",
  "/verify-eligibility",
  "/verify-eligibility/dpi",
]);

// Routes that should use full-bleed content (no inner max-width container)
const FULL_BLEED_ROUTES = new Set<string>(["/verify-eligibility/dpi", "/home"]);

export default function LayoutChrome({ children }: LayoutChromeProps) {
  const pathname = usePathname();
  const hideChrome = pathname ? HIDE_CHROME_ROUTES.has(pathname) : false;
  const hideBottomNav = pathname
    ? HIDE_BOTTOM_NAV_ROUTES.has(pathname) ||
    pathname?.startsWith("/hub/articles/") ||
    pathname?.startsWith("/contact/") ||
    pathname?.startsWith("/profile/")
    : false;
  const fullBleed = pathname ? FULL_BLEED_ROUTES.has(pathname) : false;

  // Check if current route is an article page or articles listing page
  const isArticlePage =
    pathname?.startsWith("/hub/articles/") && pathname !== "/hub/articles";
  const isArticlesListingPage = pathname === "/hub/articles";
  const isFaqsPage = pathname === "/faqs";

  // Check if current route is a profile sub-page that needs back button
  const isProfileSubPage =
    pathname === "/profile/account" ||
    pathname === "/profile/settings" ||
    pathname === "/profile/account-details" ||
    pathname?.startsWith("/profile/");

  // Check if current route is a contact page that needs back button
  const isContactPage = pathname?.startsWith("/contact/");

  if (hideChrome) {
    if (pathname === "/landing") {
      return <>{ children } </>;
    }
    return <div className="h-dvh bg-white" > { children } </div>;
  }

  return (
    <div
      className= {`fixed inset-0 grid ${hideBottomNav ? "grid-rows-[auto_1fr]" : "grid-rows-[auto_1fr_auto]"} overflow-hidden`
}
    >
  <TopBar
        showBackButton={
  pathname === "/verify-eligibility/dpi" ||
    pathname === "/verify-eligibility" ||
    isArticlePage ||
    isArticlesListingPage ||
    isFaqsPage ||
    isProfileSubPage ||
    isContactPage
}
title = {
  isArticlePage ||
  isArticlesListingPage ||
  isFaqsPage ||
  isProfileSubPage ||
  isContactPage ||
  pathname === "/verify-eligibility" ||
  pathname === "/verify-eligibility/dpi"
  ? ""
  : "Welcome"
        }
      />
{
  fullBleed ? (
    <main
          className= {`relative ${pathname === "/verify-eligibility" ? "overflow-hidden" : "overflow-auto"} bg-white overflow-x-hidden ${hideBottomNav ? "pb-4" : "pb-20"}`}
        >
  <div
            className={ `w-full ${pathname === "/verify-eligibility/dpi" ? "p-0" : "pt-4"}` }
          >
  { children }
  </div>
  </main>
      ) : (
  <main
          className= {`relative ${pathname === "/verify-eligibility" ? "overflow-hidden" : "overflow-auto"} bg-white overflow-x-hidden`}
        >
  {/* Side borders overlay for desktop */ }
  < div className = "pointer-events-none hidden md:block sticky top-0 h-0" >
    <div className="absolute inset-y-0 left-1/2 w-full max-w-[414px] -translate-x-1/2" >
      <div className="absolute inset-y-0 left-0 w-px bg-gray-200" />
        <div className="absolute inset-y-0 right-0 w-px bg-gray-200" />
          </div>
          </div>
          < div
className = {`mx-auto max-w-[414px] px-4 pt-4 ${hideBottomNav ? "pb-4" : "pb-20"}`}
          >
  { children }
  </div>
  </main>
      )}
{ !hideBottomNav && <BottomNav /> }
</div>
  );
}
