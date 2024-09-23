import { ThemeProvider } from "@/app/providers/theme-provider"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { DM_Sans } from "next/font/google"
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
        <html lang="en">
            <body className={`${font.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
