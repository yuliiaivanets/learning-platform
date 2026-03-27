import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        className="object-cover"
        src="https://t3.ftcdn.net/jpg/09/41/09/62/360_F_941096293_0azEV4VhghnAj9m3ZqKrkxYDaE4RxeTQ.jpg"
        fill
        unoptimized
        alt="mountain"
      />

      <div className="absolut inset-0 bg-black/20 z-10" />
      <div className="relative w-full h-full z-20 text-white p-10 text-6xl flex items-center  justify-center">
        <h3>Best way to your Future</h3>
      </div>
    </section>
  );
};
