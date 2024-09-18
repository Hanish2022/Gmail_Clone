import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-10"
            src="https://brandlogos.net/wp-content/uploads/2020/10/gmail-logo.png"
            alt="gmail logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"}className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full w15 bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              src="https://tse1.mm.bing.net/th/id/OIP.zP1mlHnV1bpgODW8gvQSFQHaIP?rs=1&pid=ImgDetMain"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar