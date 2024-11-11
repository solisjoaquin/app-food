import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'FoodPlanner',
  description: 'Plan your meals and manage your family recipes',
}

const Logo = () => (
  <svg width="68" height="41" viewBox="0 0 68 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M55.2235 38.1145C68.5139 42.8225 70.0385 24.2177 64.041 17.4445C65.0886 14.4845 63.9144 10.0522 60.7891 6.23205C56.7463 1.35586 51.0315 -0.586281 48.0276 1.88823C44.9769 4.39394 45.8146 10.3782 49.8175 15.2474C52.8145 18.889 56.7532 20.8831 59.8144 20.6542C61.0336 21.3305 61.828 21.9721 63.434 23.8519C73.0684 36.5296 58.139 38.0538 32.4547 20.5207C2.66004 0.133353 -2.09386 13.6851 2.46926 23.8623C5.26333 26.6055 3.06588 31.728 5.85475 34.2736C9.11362 37.2926 13.7114 40.9688 18.2607 40.5179C14.4485 38.2307 11.2417 35.3764 7.77989 32.1667C7.64114 32.0644 7.54575 31.9308 7.49546 31.7661C7.407 31.5962 7.32549 31.3846 7.31855 31.1869L7.29947 31.0673C7.24744 30.9025 7.27346 30.75 7.30468 30.5592C7.30121 30.3633 7.36885 30.1777 7.47118 30.039L10.5271 24.2403L10.5341 24.2021C10.5531 24.0877 10.6485 23.9854 10.7006 23.916C10.7908 23.8501 10.9174 23.7946 11.0075 23.7322C11.1272 23.7131 11.2798 23.7374 11.4255 23.8033C11.5782 23.8293 11.71 23.9698 11.9198 24.1224L11.9146 24.1605L24.8461 35.9036C25.0178 36.051 25.2328 36.1637 25.4219 36.1966C25.5069 32.4459 17.4022 25.5928 13.9976 22.5097L11.8192 20.5346C9.26625 18.4589 7.04626 22.7906 4.20016 20.3508C-1.8285 15.6116 6.10276 11.8487 19.5025 16.144C36.1784 21.4589 43.8599 34.0846 55.2235 38.1145ZM10.6641 29.4754C10.3901 29.2344 10.0138 29.1303 9.69637 29.1563C9.34082 29.1737 8.99742 29.3523 8.71472 29.6193C8.47191 29.8951 8.33316 30.2627 8.3505 30.6182C8.33836 30.9303 8.47017 31.3049 8.7442 31.5459C24.6189 43.2751 24.9362 43.4849 10.6641 29.4754ZM12.4991 26.0212C12.2337 25.742 11.8955 25.6466 11.54 25.6639C11.1845 25.683 10.8463 25.8217 10.5982 26.1339C10.3173 26.3992 10.2149 26.7738 10.1959 27.124C10.2132 27.4795 10.352 27.8159 10.626 28.0587C28.8923 43.289 27.0019 41.0087 12.4991 26.0212Z" fill="#24C690"/>
  </svg>
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex space-x-7">
                <div className="flex justify-center items-center">
                  <Link href="/" className="py-4 px-2">
                    <Logo />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto mt-8 px-4">
          {children}
        </div>

        <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1E1E1E] text-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-center">
              <div className="flex justify-around gap-8">
                <Link href="/" className="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                </Link>
                <Link href="/family-members" className="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                </Link>
                <Link href="/generate-food" className="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils-crossed"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>                </Link>
                <Link href="/history" className="py-4 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-history"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
