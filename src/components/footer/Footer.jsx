const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                {/* <span>Elias</span> */}
              </div>
              {/* email */}
              {/* <span className="text-[#ABB2BF]">ajayedathazhe@gmail.com</span> */}
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>
                {/* Web Developer and Cyber Security Enthusiast */}
                {/* based in Ukraine */}
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://twitter.com/ajay007e">
                <img src={require("./imgs/Twitter.png")} alt="figma icon" />
              </a>
              <a href="https://github.com/ajay007e">
                <img src={require("./imgs/Github.png")} alt="github icon" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright {new Date().getFullYear()}. Made by Ajay
        </div>
      </div>
    </>
  );
};

export default Footer;
