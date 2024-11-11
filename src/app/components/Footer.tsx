import Image from "next/image"
import Logo from "../../../public/Logo.png"


const Footer = () => {
  return (
    <>
    <div className="w-[1920px] h-[461px] top-[5195px] py-[140px] px-[220px] bg-[#043873]">
        <div className="w-[1480px] h-[289px] flex flex-col">
            <div className="w-[1480px] h-[169px] flex justify-between items-center">
                <div className="w-[295px] h-[169px] flex flex-col justify-between">
                    <div className="w-[191px] h-[34px]">
                        <Image src={Logo} alt="Logo"/>
                    </div>
                    <div className="w-[240px] h-[120px]">
                        <p className="font-Inter font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
                            whitepace was created for the new ways we live and work. We make a better workspace around the world
                        </p>
                    </div>
                </div>
                <div className="w-[295px] h-[127px] flex flex-col justify-between">   
                    <div className="w-[68px] h-[22px]">
                        <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                            Product
                        </p>
                    </div>
                    <div className="w-[70px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#FFE492]">
                            Overview
                        </p>
                    </div>
                    <div className="w-[50px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Pricing
                        </p>
                    </div>
                    <div className="w-[177px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Customer stories
                        </p>
                    </div>
                </div>
                <div className="w-[295px] h-[130px] flex flex-col justify-between">   
                    <div className="w-[91px] h-[22px]">
                        <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                            Resources
                        </p>
                    </div>
                    <div className="w-[33px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Blog
                        </p>
                    </div>
                    <div className="w-[128px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                        Guides & tutorials
                        </p>
                    </div>
                    <div className="w-[130pxpx] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Help center
                        </p>
                    </div>

                </div>
                <div className="w-[295px] h-[130px] flex flex-col justify-between">   
                    <div className="w-[83px] h-[22px]">
                        <p className="font-Inter font-bold text-lg leading-[21.78px] tracking-[-0.02em] text-[#ffffff]">
                            Company
                        </p>
                    </div>
                    <div className="w-[66px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            About us
                        </p>
                    </div>
                    <div className="w-[62px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Careers
                        </p>
                    </div>
                    <div className="w-[99px] h-5">
                        <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                            Media kit
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div className="w-[1480px] h-5 text-center flex items-center justify-center">
                <div className="w-[169px] h-5">
                    <p className="font-Inter font-normal text-base leading-5 tracking-[-0.02em] text-[#ffffff]">
                        ©2021 Whitepace LLC.
                    </p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Footer