import React from "react";

export default function Home() {
    
    return (
        <div className="w-screen h-screen flex flex-col
         p-[30px] bg-[#212121] text-orange-400 overflow-hidden">
            <h1 className="text-[36px] font-light">Hello...</h1>
            <div className="mt-8 relative flex flex-col items-center">
                <div className="bg-[url(https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=600)]
                w-[500px] h-[500px] rounded-full bg-cover bg-center"></div>
                <div className="border-orange-400 border-[6px] rounded-full
                w-[530px] h-[530px] absolute -top-[15px] "></div>
            </div>
            
        </div>
    )
}