import Project_card from "../project_card/Project_card";
import first from "./imgs/Rectangle22.png";
import second from "./imgs/Rectangle222.png";
import third from "./imgs/Rectangle2222.png";

const Projects = () => {
  // date
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
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div
            data-aos="fade-down"
            className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2"
          >
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="/projects">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
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
    </>
  );
};

export default Projects;
