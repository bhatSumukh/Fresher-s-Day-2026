import HeroImg from "../assets/hero.png";
import HeroImgM from "../assets/herom.png";

function Hero() {
  return (
    <>
      <section
        className="hidden lg:flex relative min-h-screen bg-cover bg-right bg-no-repeat items-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div className="ml-20 z-10 max-w-xl flex flex-col items-start">
          <h1 className="text-6xl font-bold">
            Freshers' Day <br />
            <span className="text-(--primary) border-b-2 border-(--primary)">
              2026
            </span>
          </h1>

          <p className="mt-4 text-base text-(--text-light)">
            Welcome to the beginning of your college journey. Participate, have
            fun, meet new friends and unlock the Escape Room Challenge!
          </p>

          <div className="flex justify-between items-center gap-10">
          <a
            href="#registration"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-(--background) rounded-lg font-semibold transition"
          >
            Register Now
          </a>

          </div>


        </div>
      </section>

      <section
        className="flex lg:hidden relative min-h-screen bg-cover bg-center bg-no-repeat items-center"
        style={{ backgroundImage: `url(${HeroImgM})` }}
      >
        <div className="absolute top-10 px-6 z-10">
          <h1 className="text-4xl font-bold">
            Freshers' Day <br />
            <span className="text-(--primary)  border-b-2 border-(--primary)">
              2026
            </span>
          </h1>

          <p className="mt-4 text-base text-(--text-light)">
            Welcome to the beginning of your college journey. Participate, have
            fun, meet new friends and unlock the escape room challange..!
          </p>

                      <a
            href="#registration"
            className="mt-8 inline-flex items-center justify-center px-8 py-4 bg-(--primary) hover:bg-(--primary-hover) text-(--background) rounded-lg font-semibold transition"
          >
            Register Now
          </a>
          
          
        </div>
      </section>
    </>
  );
}

export default Hero;
