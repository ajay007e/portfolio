import React from "react";
// imgs
import first from "./imgs/Rectangle22.png";
import second from "./imgs/Rectangle222.png";
import third from "./imgs/Rectangle2222.png";
import Project_card from "../project_card/Project_card";

const Complete_apps = () => {
  const projects = [
    {
      img: second,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "Youtube Lite",
      disc: "Simple demo version of Youtube",
      link: "https://youtube-lite-ten.vercel.app/",
    },
    {
      img: first,
      langs: ["html", "css", "javascript", "sass", "vite"],
      title: "Movix",
      disc: "Movies and Series Information ",
      link: "https://movix-lime.vercel.app/",
    },
    {
      img: third,
      langs: ["html", "css", "javascript"],
      title: "Monkeytype",
      disc: "Demo website of Monkeytype ",
      link: "https://ajay007e.github.io/monkeytype/",
    },
  ];
  return (
    <div>
      <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
        {/* top / title */}
        <div className="">
          {/* projects */}
          <div className=" text-white font-bold text-[32px]">
            <span className=" text-[#C778DD]">/</span>
            <span>projects</span>
          </div>
          {/* list */}
          <div className=" text-white mt-[14px]">List of my projects</div>
        </div>
        {/* completed tasks */}
        <div className="">
          {/* title */}
          <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
            <span className=" text-[#C778DD]">#</span>
            <span>complete-apps</span>
          </div>
          {/* projects */}
          <div className="flex flex-wrap justify-start  gap-4 my-12">
            {/* cards */}
            {projects.map(({ img, langs, title, disc, link }) => {
              return (
                <>
                  <Project_card
                    img={img}
                    langs={langs}
                    title={title}
                    disc={disc}
                    link={link}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete_apps;
