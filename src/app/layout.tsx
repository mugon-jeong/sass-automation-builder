import { ThemeProvider } from "@/app/providers/theme-provider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { DM_Sans } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})
const font = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Fuzzie",
    description: "Automate Your With Fuzzie",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} afterSignOutUrl={"/"}>
            <html lang="en">
                <body className={`${font.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}
