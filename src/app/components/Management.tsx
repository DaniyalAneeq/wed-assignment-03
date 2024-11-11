import Image from "next/image";
import work_img from "./../../../public/Work Together Image.jpg";

const Management = () => {
  return (
    <>
      <div className="w-[1920px] h-[1588px] top-[921px] px-[220px] py-[140px] font-Inter flex flex-col">
        <div className="flex justify-between w-[1480px] h-[547px]">
          <div className="w-[672px] h-[411px] flex flex-row items-center">
            <div className="w-[672px] h-[288px]">
              <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] mb-6">
                Project <br /> Management
              </h2>
              <p className="font-[400] text-lg leading-[30px] tracking-[-0.02em] text-[#212529] mb-10">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them <br /> to a note.
              </p>
              <br />
              <button className="bg-[#4F9CF9] px-10 py-5 font-medium text-lg tracking-[-0.02em] rounded-md">
                Get Started{" "}
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-8 text-[#212529] inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>
        <div className="w-[1480px] h-[661px] flex items-center justify-between mt-[140px]">
          <div className="w-[710px] h-[661px]">
            <Image src={work_img} alt="work-img" />
          </div>
          <div className="w-[670px] h-[294px]">
            <div className="w-[670px] h-[171px]">
              <h2 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#212529]">
                Work together
              </h2>
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
              <br />
              <button className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg leading-[23px] tracking-[-0.02em] rounded-md  text-[#ffffff]">
                Try it now <span><svg
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
        </div>
      </div>
    </>
  );
};

export default Management;
