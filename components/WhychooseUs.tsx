"use client";

import {
  ShieldCheck,
  Clock,
  Award,
  Users
} from "lucide-react";

import { motion } from "framer-motion";


const reasons = [
  {
    title: "Qualified Electricians",
    description:
      "Our team provides safe and professional electrical solutions.",
    icon: ShieldCheck
  },
  {
    title: "Fast Response",
    description:
      "Quick assistance for installations, repairs and maintenance.",
    icon: Clock
  },
  {
    title: "Quality Work",
    description:
      "We use reliable materials and follow safety standards.",
    icon: Award
  },
  {
    title: "Customer Satisfaction",
    description:
      "Trusted by homeowners and businesses.",
    icon: Users
  }
];


export default function WhyChooseUs(){

return (

<section className="py-24 px-8 bg-white">

<div className="max-w-7xl mx-auto">


<div className="text-center mb-14">

<p className="text-yellow-500 font-semibold">
WHY CHOOSE US
</p>

<h2 className="text-4xl font-bold mt-3">
Reliable Electrical Experts
</h2>

</div>


<div className="grid md:grid-cols-4 gap-8">


{reasons.map((item,index)=>{

const Icon=item.icon;


return (

<motion.div
key={index}
whileHover={{scale:1.05}}
className="p-8 rounded-3xl shadow-lg border"
>


<div className="bg-yellow-400 w-14 h-14 rounded-2xl flex items-center justify-center mb-5">

<Icon size={30}/>

</div>


<h3 className="font-bold text-xl mb-3">
{item.title}
</h3>


<p className="text-gray-600">
{item.description}
</p>


</motion.div>

)

})}


</div>

</div>

</section>

);

}