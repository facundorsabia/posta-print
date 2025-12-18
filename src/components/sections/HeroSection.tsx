import GlitchText from "@/components/ui/GlitchText";
import Cubes from "@/components/ui/Cubes";

export default function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section className="w-full text-center pt-24 px-4">
                <GlitchText
                    speed={1}
                    enableShadows={true}
                    enableOnHover={false}
                    className="text-6xl md:text-7xl font-bold mb-4 text-black"
                >
                    POSTA-PRINT
                </GlitchText>
                <h2 className="text-5xl text-black max-w-xl mx-auto mt-6">
                    IMPRESIONES 3D POSTA
                </h2>
            </section>
            <div className="w-full mt-5">
                <Cubes
                    rows={2}
                    cols={100}
                    cubeSize={30}
                    maxAngle={180}
                    radius={4}
                    faceColor="#000000"
                    borderStyle="1px solid #abf600"
                    autoAnimate={true}
                    rippleOnClick={true}
                    rippleColor="#ffffff"
                    cellGap={10}
                />
            </div>
        </>
    );
}
