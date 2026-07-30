"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";


const testimonials = [
  {
    name: "John Kamau",
    role: "Home Owner",
    message:
      "Davies Electrical provided excellent wiring services for my new home. Their work was safe and professional."
  },

  {
    name: "Mary Wanjiku",
    role: "Business Owner",
    message:
      "The solar installation was completed on time and works perfectly. Great customer service."
  },

  {
    name: "Peter Mwangi",
    role: "Property Developer",
    message:
      "Reliable electrical experts with quality workmanship. I highly recommend their services."
  }
];


export default function Testimonials(){

return (

<section className="py-24 px-8 bg-white">


<div className="max-w-7xl mx-auto">


<div className="text-center mb-14">


<p className="text-yellow-500 font-semibold">
CUSTOMER REVIEWS
</p>


<h2 className="text-4xl md:text-5xl font-bold mt-3">
What Our Clients Say
</h2>


</div>



<div className="grid md:grid-cols-3 gap-8">


{
testimonials.map((item,index)=>(


<motion.div

key={index}

whileHover={{
y:-10
}}

className="
rounded-3xl
p-8
shadow-xl
border
bg-gray-50
"


>


<div className="flex gap-1 mb-5">

{[1,2,3,4,5].map((star)=>(

<Star
key={star}
size={20}
className="fill-yellow-400 text-yellow-400"
/>

))}

</div>



<p className="text-gray-600 leading-relaxed mb-6">

"{item.message}"

</p>



<h3 className="font-bold text-lg">

{item.name}

</h3>


<p className="text-yellow-500">

{item.role}

</p>


</motion.div>


))

}


</div>


</div>


</section>

);

}