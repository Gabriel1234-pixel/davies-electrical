"use client";

import { 
  Zap,
  Wrench,
  Sun,
  Building2,
  Video,
  Volume2
} from "lucide-react";

import Image from "next/image";
import { motion } from "framer-motion";


const services = [ 

  {
    title: "Electrical Installation",
    description:
      "Professional house wiring, lighting installation, sockets, switches and complete electrical systems.",
    icon: Zap
  },

  {
    title: "Electrical Repairs",
    description:
      "Fast fault finding, maintenance and repair solutions for homes and businesses.",
    icon: Wrench
  },

  {
    title: "Solar Solutions",
    description:
      "Solar panels, inverters and backup power systems for reliable energy.",
    icon: Sun
  },

  {
    title: "Commercial Services",
    description:
      "Electrical solutions for offices, shops and commercial buildings.",
    icon: Building2
  } 
,
  {
    title: "CCTV Installation",
    description:
      "Professional installation of CCTV surveillance systems for homes, businesses, offices, and institutions to improve security and provide 24/7 monitoring.",
    icon: Video,
  }
  ,
  {
  title: "Sound System Installation",
  description:
    "Professional installation of home, office, church and commercial sound systems. We supply and install amplifiers, speakers, mixers, microphones and complete public address (PA) systems for clear, high-quality audio.",
  icon: Volume2,
  image: "/images/services/sound-system.jpg",
}
];


export default function Services(){

return (

<section 
id="services"
className="py-24 px-8 bg-gray-950 text-white"
>


<div className="max-w-7xl mx-auto">


{/* Heading */}

<div className="text-center mb-16">


<p className="text-yellow-400 font-semibold">
OUR SERVICES
</p>


<h2 className="text-4xl md:text-5xl font-bold mt-3">
Electrical Solutions
<br/>
You Can Trust
</h2>


<p className="text-gray-400 mt-5 max-w-2xl mx-auto">
From home installations to commercial work,
Davies Electrical delivers safe, reliable and
modern electrical solutions.
</p>


</div>



{/* Cards */}

<div className="grid md:grid-cols-4 gap-8">


{
services.map((service,index)=>{


const Icon = service.icon;


return (

<motion.div

key={index}

whileHover={{
y:-10
}}

transition={{
duration:0.3
}}

className="
bg-gray-900
border
border-gray-800
rounded-3xl
p-8
hover:border-yellow-400
transition
"


>



<div className="
w-14
h-14
rounded-2xl
bg-yellow-400
text-black
flex
items-center
justify-center
mb-6
">

<Icon size={30}/>

</div>



<h3 className="
text-xl
font-bold
mb-4
">

{service.title}

</h3>



<p className="
text-gray-400
leading-relaxed
">

{service.description}

</p>



<button className="
mt-6
text-yellow-400
font-semibold
">



</button>


</motion.div>

)


})

}



</div>


</div>


</section>

);

}