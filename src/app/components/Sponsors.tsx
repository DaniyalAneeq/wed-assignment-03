import Image from "next/image"
import apple from "../../../public/Apple.jpg"
import microsoft from "../../../public/microsoft 1.jpg"
import slack from "../../../public/Group.jpg"
import google from "../../../public/Google.jpg"

const Sponsors = () => {
  return (
    <>
    <div className="w-[1922px] h-[538px] top-[4654px] py-[140px] px-[220px] flex flex-col justify-between items-center">
       <div className="w-[1482px] h-[87px]">
            <h1 className="font-Inter font-bold text-7xl leading-[87.14px] text-center tracking-[-0.02em] text-[#212529]">
                Our sponsors
            </h1>
        </div> 
        <div className="w-[1482px] h-[71px] flex justify-between"> 
            <div className="w-[55.47px] h-[68px]">
                <Image src={apple} alt="apple"/>
            </div> 
            <div className="w-[287px] h-[62px]">
                <Image src={microsoft} alt="microsoft"/>
            </div>
            <div className="w-[280px] h-[71px]">
            <Image src={slack} alt="slack"/>
            </div>
            <div className="w-[211px] h-[69.81px]">
                <Image src={google} alt="google"/>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Sponsors