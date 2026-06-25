import Link from "next/dist/client/link";


export default function Hero() {


    return (
        <div className="min-h-screen flex flex-col justify-center">
            <h1 className="text-3xl font-logo italic text-white md:text-4xl lg:text-5xl font-bold mb-4 text-center">Plot Pixel</h1>
            <div className="mx-auto px-4 md:px-8 lg:px-24 xl:px-48">
                <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-4 text-center">Turning Moments Into Masterpieces</h1>
                <p className="text-sm text-zinc-500 md:text-md lg:text-lg italic text-center">Professional event photography and cinematic videography for weddings, engagements, birthdays, and special occasions. Preserving your memories, one pixel at a time.</p>
                <Link
                    href="https://wa.me/916238859386?text=Hi%20PlotPixel!%20I%20would%20like%20to%20know%20more%20about%20your%20photography%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl w-48 mt-4 block mx-auto text-center"
                    >
                    Chat on WhatsApp
                </Link>
            </div>
        </div>
    );
}