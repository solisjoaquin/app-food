import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Que como?",
  description: "App para gestionar alimentos en la heladera",
};

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-chef-hat"
  >
    <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
    <path d="M6 17h12" />
  </svg>
);

const UserLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-user-round"
  >
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="">
              <div className="flex items-center justify-between">
                <Link href="/" className="py-4 px-2">
                  <Logo />
                </Link>

                <Link href="/family-members" className="py-4 px-2">
                  <div className="p-2 border rounded-full border-4">
                    <UserLogo />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto mt-8 px-4">{children}</div>

        <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1E1E1E] text-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex justify-around gap-8">
                <Link href="/" className="py-4 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-house"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                </Link>
                {/* <Link href="/family-members" className="py-4 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-user-round"
                  >
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 0 0-16 0" />
                  </svg>
                </Link> */}
                <Link href="/generate-food" className="py-4 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-utensils-crossed"
                  >
                    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                    <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                    <path d="m2.1 21.8 6.4-6.3" />
                    <path d="m19 5-7 7" />
                  </svg>{" "}
                </Link>
                <Link href="/history" className="py-4 px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-history"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
