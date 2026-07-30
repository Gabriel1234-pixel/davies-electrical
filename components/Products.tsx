const products = [
  {
    name:"LED Lighting",
    price:"KSh 500"
  },
  {
    name:"Electrical Cables",
    price:"KSh 2,000"
  },
  {
    name:"Solar Inverter",
    price:"KSh 25,000"
  },
  {
    name:"Circuit Breakers",
    price:"KSh 1,500"
  }
];


export default function Products(){

return (

<section 
id="shop"
className="py-20 px-10"
>

<h2 className="text-4xl font-bold text-center mb-12">
Featured Products
</h2>


<div className="grid md:grid-cols-4 gap-8">


{products.map((product,index)=>(

<div 
key={index}
className="border rounded-lg p-6 shadow"
>

<div className="h-40 bg-gray-200 mb-5 rounded">
</div>


<h3 className="text-xl font-bold">
{product.name}
</h3>


<p className="text-yellow-600 font-bold mt-3">
{product.price}
</p>


<button className="mt-5 bg-yellow-500 text-white px-5 py-2 rounded">
Add To Cart
</button>


</div>

))}


</div>

</section>

);

}