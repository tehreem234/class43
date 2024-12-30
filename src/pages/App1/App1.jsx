import React from "react";
import Header1 from "../../components/Header1/Header1";
import AppIcon from "../../components/AppIcon/AppIcon";
import { CiLocationOn } from "react-icons/ci";
import p2 from "../../components/images/p2.jpeg";
import p3 from "../../components/images/p3.jpeg";
import p4 from "../../components/images/p4.jpeg";
import p5 from "../../components/images/p5.jpeg";
import { FaFire } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

import p1 from '../../components/images/p1.webp';
import Button from "../../components/Button/Button";
const App1 = () => {
    const images = [
        {

            src: p2,
            a: "image1",
            cn: "w-5 h-5 rounded-full"

        },
        {

            src: p3,
            a: "image2",
            cn: "w-5 h-5  rounded-full"

        },
        {

            src: p4,
            a: "image3",
            cn: "w-5 h-5 rounded-full"

        },
        {

            src: p5,
            a: "image4",
            cn: "w-5 h-5 rounded-full"


        },
        {

            src: p1,
            a: "image5",
            cn: "w-5 h-5 rounded-full"


        },
    ]

    return (
        <div className="flex flex-col gap-7 ">
            <Header1 />
            <img src={p1} className="w-[390px] h-60 size-full rounded-2xl" />
            <div className="absolute  top-[37%] left-3 ">
                <AppIcon color="bg-blue-500" size="lg" />
                <FaFire className='relative bottom-10 text-white size-5 left-5' />
            </div>

            <div className="ml-7">
                <h1 className=" text-2xl font-semibold">Looking for Backend Devolper for Crypto Dashboard</h1>

                <h2 className="text-gray-500">BlueMoon Studio</h2>
                <div className="flex flex-row justify-between gap-5  relative top-7 w-full rounded-xl ">
                    <div className="flex flex-row" >
                        {images.map((imag, index) => (
                            <div key={index} >
                                <img src={imag.src} alt={imag.a} className={imag.cn} />
                            </div>
                        ))}

                    </div>
                    <div className="flex w-20">
                        <h2 className="font-bold text-[10px]">36+ Applied</h2>

                    </div>

                    <div className="text-[12px] w-44">
                        ✨ 100% of 20k Reviews
                    </div>
                </div>




            </div>

            <hr className=" mt-2 border-gray-200" />

            <div className="flex flex-row relative ml-5 gap-5">

                ☑️
                <p className="text-gray-400 w-56">payment verified</p>
                <CiLocationOn className="ml-10 w-5 h-5" />
                <p className="text-gray-400 text-[12px] mr-2">Kalason,Slemon,DIY</p>

            </div>
            <hr />
            <div>

                <p className="font-bold ml-3">Project Overviews</p>

                <p className="text-gray-400 ml-3">We are the team of Website designs commited to helping your create a affective and impressive wensite designswe have the skills and knowledge needed to turn your vision into a stunning website</p>

            </div>
            <div>
                <p className="text-gray-400 ml-3">We understand that an attractive and institutive website design is key to online success.</p>
            </div>
            <div className="flex  gap-5 p-4">
                <div className="w-10 h-9 rounded-full bg-gray-200">
                <FaRegCopy className="mt-3 ml-2"/>

                </div>
              <Button>Sent a Purposal</Button>
            </div>



        </div>

    );
};

export default App1;