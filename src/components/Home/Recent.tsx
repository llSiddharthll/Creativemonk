import { useState } from "react";
import { projects } from "../../data/RecentData";

// Only category-specific filters
const filters = [
  "Social Media Marketing",

  "Web Development",

  "Packaging Design",

  "UI/UX Design",

  "Logo Design",
];



const Recent = () => {
  const [showCard, setShowCard] = useState(filters[0]); // First category selected by default

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="text-center mb-[60px] max-w-[510px] mx-auto">
          <span className="text-primary mb-2 block text-lg font-semibold">
            Our Recent
          </span>
          <h2 className="text-dark dark:text-white mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
            Our Recent Projects
          </h2>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="w-full flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center space-x-1">
            {filters.map((category) => (
              <li key={category} className="mb-1">
                <button
                  onClick={() => setShowCard(category)}
                  className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                    showCard === category
                      ? "bg-orange-500 text-white"
                      : "text-body-color hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap -mx-4">
          {projects
            .filter((project) => project.category === showCard)
            .map((project, index) => (
              <RecentCard key={index} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;

type RecentCardProps = {
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
};

const RecentCard = ({
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: RecentCardProps) => (
  <div className="w-full px-4 md:w-1/2 xl:w-1/3">
    <div className="relative mb-12">
      <div className="overflow-hidden rounded-[10px]">
        <img src={ImageHref} alt="Recent" className="w-full h-96 bg-gray-200 object-cover" />
      </div>
      <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-Recent dark:shadow-box-dark">
        <span className="text-primary mb-2 block text-sm font-medium">
          {category}
        </span>
        <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
          {title}
        </h3>
        <a
          href={buttonHref}
          className="text-body-color hover:border-primary hover:bg-orange-500 inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
        >
          {button}
        </a>
      </div>
    </div>
  </div>
);
