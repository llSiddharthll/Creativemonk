import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-[url('/bg.jpg')] bg-center bg-cover">
      <div className="flex flex-col gap-10 items-center justify-center bg-white/20 backdrop-blur-xs p-10 rounded-2xl">
        <div className="flex flex-col gap-4">
          {" "}
          <div className="leading-16 text-5xl flex items-center flex-col justify-center ">
            <h2>Helping Businesses</h2><h2>
                Grow Digitally With Our</h2>  
            <h2 className=" text-5xl text-orange-500">
              <ReactTyped
                strings={[
                  "Graphic Designing",
                  "Web Designing",
                  "Video Animations",
                  "Digital Marketing",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h2>
            <h2>Services</h2>
            
          </div>
        </div>
        <div>
          <button className="text-md bg-orange-500 text-white py-2 px-4 rounded font-semibold">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
}
