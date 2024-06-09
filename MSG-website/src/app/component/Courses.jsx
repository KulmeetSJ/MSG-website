import Image from "next/image";

function Card({ title, img }) {
  return (
    <div className="flex flex-col items-center relative cursor-pointer group">
      <div className="flex items-center justify-center bg-gradient-to-b from-[#2B02B8] to-[#D4C2FF] transform -rotate-45 absolute -top-12 rounded-lg ">
        <div className="flex items-center p-2 sm:p-4 transform rotate-45">
          <Image src={img} alt="drawing" width={30} height={30} />
        </div>
      </div>
      <div className="flex items-center justify-center bg-primary-lightPurple rounded-ss-3xl rounded-b-none rounded-e-none transition-all duration-300 group-hover:rounded-br-3xl group-hover:pb-32 ">
        <p className="text-black text-base sm:text-xl p-2 mx-3 sm:mx-6 my-2 sm:my-4 font-mono">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <div
      className="flex flex-col items-center justify-start gap-16 md:gap-20 bg-center w-full bg-cover pt-4 sm:pt-10 pb-20 sm:pb-32 "
      style={{ backgroundImage: "url('/assets/exhibition-bg.svg')" }}
    >
      <h1 className="hidden sm:block text-4xl text-white tracking-widest text-center z-10 px-4">
        {" "}
        We are <span className="text-primary-purple">Dedicated</span> to <br />
        Serve you all the time
      </h1>
      <h1 className="sm:hidden text-2xl text-white tracking-widest text-center z-10 px-4">
        {" "}
        We are <span className="text-primary-purple">Dedicated</span> to Serve
        you all the time
      </h1>

      <div className="flex flex-row flex-wrap items-start justify-center gap-16 sm:gap-6 font-bold sm:h-40 ">
        <Card title="Drawing Courses" img="/assets/drawing.svg" />
        <Card title="Painting Courses" img="/assets/paint.svg" />
        <Card title="Mentorship" img="/assets/mentor.svg" />
        <Card title="Customized Arts" img="/assets/custom-arts.svg" />
        <Card title="Art Materials" img="/assets/architecture.svg" />
      </div>
    </div>
  );
}