import Image from "next/image";
import Footer from "../components/Footer";

interface LayoutProps {
    title: string,
    children: React.ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <main className="min-h-screen bg-white">
            <div className="py-6 flex flex-col justify-center items-center px-4 text-secondary-gray">
                <Image 
                    src="/images/Logo.png"
                    width={123}
                    height={36}
                    alt="logo-woovi"
                />
                <p className="font-extrabold mt-4 text-2xl text-center mb-3">{title}</p>
                    {children}
                <Footer />
            </div>
        </main>
    )
}

export default Layout;