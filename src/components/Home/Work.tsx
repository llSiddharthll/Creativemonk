import CountUp from "react-countup";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { FaUsers } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  const counters = [
    { label: "Global Happy Clients", value: 350, icon: <FaUsers /> },
    { label: "Digital Services", value: 10, icon: <MdMiscellaneousServices /> },
    { label: "Projects Completed", value: 500, icon: <FaDiagramProject /> },
    { label: "Team Members", value: 20, icon: <BsMicrosoftTeams /> },
  ];

  return (
    <div
      ref={ref}
      className="h-64 flex items-center justify-evenly w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
    >
      {counters.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center justify-center text-white font-semibold"
        >
          <div className="flex gap-2">
            <span className="text-5xl">{item.icon}</span>
            <span className="text-5xl">
              {startCount && <CountUp end={item.value} />} +
            </span>
          </div>

          <span className="text-2xl">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
