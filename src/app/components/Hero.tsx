const Hero = () => {
  return (
    <>
       <div className="px-[220px] py-[140px] top-[92px] bg-[#043873] text-[#ffffff] flex items-center font-Inter">
        <div className="w-[656px] h-[361px]">
          <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with whitepace
            </h2>
            <p className="font-[400] text-lg leading-[30px] tracking-[-0.02em] mb-10">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <br />
            <button className="bg-[#4F9CF9] p-5 font-medium text-lg tracking-[-0.02em] rounded-lg">
              Try Whitepace free <span> <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-8 text-[#ffffff] inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg></span>
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>
    </>
  );
};

export default Hero;
