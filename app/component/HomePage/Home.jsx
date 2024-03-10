"use client"
import Image from "next/image";

const HomePage = ({ setUsername, setPassword }) => {

  return (
    <div className="border 2xl:py-[8rem] 2xl:pr-[52rem] 2xl:pl-[3rem] xl:py-[3.8rem] xl:pr-[38rem] xl:pl-[2rem] md:pr-[30rem] md:py-[5rem]
    d bg-white max-w-2xl mx-auto rounded-md p-14 relative">
        
      <div className="flex md:flex-row">
        <div className="flex flex-col gap-12">
          {/* Username Input */}
          <div className="flex items-start justify-start">
            <div className="text-black">
              <h1 className="text-lg text-black font-bold">Username</h1>
              <input
                placeholder="Masukkan Username Anda............"
                type="text"
                id="username"
                className="md:w-[15rem] 2xl:w-[20rem] xl:w-[18rem] w-[18rem] py-4 outline-none border rounded-lg pl-2 mt-2"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="flex items-start justify-start">
            <div className="text-black">
              <h1 className="text-lg text-black font-bold">Password</h1>
              <input
                placeholder="Masukkan Password Anda............"
                type="password"
                id="username"
                className="md:w-[15rem] 2xl:w-[20rem] xl:w-[18rem] w-[18rem] py-4 outline-none border rounded-lg pl-2 mt-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
            <div className="md:flex hidden absolute right-0 2xl:mr-24 xl:mr-16 xl:mt-6 2xl:mt-0">
                <Image src={'/Image/logo-smamx.webp'} width={250} height={250} className="justify-center items-center xl:w-56 2xl:w-64"/>
            </div>
      </div>
    </div>
  )
}

export default HomePage;


