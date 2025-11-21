import ScribdLogo from "./svgs/scribdlogo";
import BarnersLogo from "./svgs/barners";
import KoboLogo from "./svgs/kobo";
import GoogleLogo from "./svgs/google";

const HeroBottomLogos = () => {

    

    return (
        <div className="relative bg-secondary">
            <div className="container py-10">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Left side - Text */}
                    <div className="text-white text-3xl md:text-4xl font-childhood">
                        <div>Publish Your Children&apos;s Book</div>
                        <div>Anywhere Without The Hassle</div>
                    </div>

                    {/* Right side - Logos */}
                    <div className="flex items-center gap-6 md:gap-8 flex-wrap">
                        <div className="text-white">
                            <ScribdLogo />
                        </div>
                        <div className="text-white">
                            <BarnersLogo />
                        </div>
                        <div className="text-white">
                            <KoboLogo />
                        </div>
                        <div className="text-white">
                            <GoogleLogo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBottomLogos;