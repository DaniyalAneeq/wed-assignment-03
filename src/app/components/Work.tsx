
const Work = () => {
  return (
    <>
    <div className="w-[1921px] h-[574px] py-[140px] px-[220px] top-[4080px] bg-[#043873] flex flex-col justify-between items-center font-Inter">
        <div className="w-[1481px] h-[294px] flex justify-center">
            <div className="w-[1064px] h-[171px]">
                <h1 className="font-Inter font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-[#ffffff] mb-6 text-center">
                    Your work, everywhere you are
                </h1>
                <p className="font-Inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-center text-[#ffffff]">
                Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                </p>
                <br />
            </div>
        </div>
        <button className="bg-[#4F9CF9] py-5 px-10 font-medium text-lg tracking-[-0.02em] rounded-lg font-Inter text-[#ffffff] text-center">
                    Try Taskey <span> <svg
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
    </>
  )
}

export default Work