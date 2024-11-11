import Image from "next/image"
import Logo from "../../../public/Logo.png"


const Nabar = () => {
  return (
    <>
    <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between font-Inter">
        <div className="w-[191px] h-[34px]">
            <Image src={Logo} alt="Logo"/>
        </div>
        <div className="w-[737.5px] h-[60] flex justify-between items-center">
            <div className="w-[549px] h-[23px]">
                <ul className="flex flex-row text-[#ffffff] justify-between">
                    <li>Products</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>   
            </div>
            <div className="w-[126px] h-[60px]">
                <button className="py-4 px-10 bg-[#FFE492] text-[#043873] rounded-lg">
                    Login
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Nabar