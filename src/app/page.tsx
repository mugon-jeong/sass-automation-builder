import Navbar from "@/components/global/navbar"

export default function Home() {
    return (
        <main>
            <Navbar />
            <section className="relative flex h-screen w-full flex-col items-center !overflow-visible rounded-md bg-neutral-950 antialiased">
                <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
                <div className="mt-[-100px] flex flex-col md:mt-[-50px]"></div>
            </section>
        </main>
    )
}
