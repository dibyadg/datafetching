import Image from "next/image";
import Link from "next/link";

async function getDogs(){
  const response=await fetch('https://dog.ceo/api/breeds/image/random',{
  cache: 'no-store' ,
})
  const data=await response.json()

  return data
}

export default async function Home() {
  const dog=await getDogs()
  console.log(dog)
  return (
   <div className="text-center mt-4">
    <h3 className="text-4xl ">Dog</h3>
    <div className="flex justify-center mt-10">
    <Image src={dog.message} alt="dog img" height={400} width={400}></Image>
    </div>
    <Link href={'./users'} className="bg-amber-900 mt-10 p-2 text-white rounded ">Users</Link>
   </div>
  );
}
