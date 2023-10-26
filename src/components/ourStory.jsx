function OurStory() {
    return (
        <>
            <div className="sticky top-24 -z-10">
                <div className="w-full h-4 bg-black"></div>
                <div className="flex w-full justify-center bg-[#cdaf8c]">
                    <h2 className="text-5xl 2xl:text-6xl bg-white w-[400px] text-center">ABOUT FNS</h2>
                </div>
                <div className="w-full h-4 bg-black"></div>

            </div>

            <div className="w-full h-screen flex items-center flex-col bg-black -z-10 fixed">
                <div className="w-100% h-[500px]"><img className="h-[300px] mt-10" src="/aboutus.jpeg" alt="" /></div>
            </div>
            <div className="w-full z-20">
                <div className="h-[500px]"></div>
                <div className="flex flex-col items-center bg-white">
                    <div className="flex flex-col items-center bg-[#cdaf8c] w-[80%]">
                        <h3 className="text-black text-xl mt-10">The Full Story</h3>
                        <h1 className="text-5xl text-black italic font-bold mb-2">About FNS</h1>
                        <p className="w-1/2 text-black text-center">
                            In 2018, FNS, a Chicago native brand was created by an overworked college student athlete.
                            Spending most days running on $1 coffee and 3 hr
                        </p>
                        <p className="font-bold text-xl">
                            “Fat Napz”.
                        </p>
                        <div className="grid w-full mt-16 h-[500px]">
                            <div className="bg-no-repeat bg-cover bg-[url(/navHolder2.jpeg)]"></div>
                        </div>
                        <h2 className="text-5xl text-black italic font-bold mb-2 mt-10">Mission</h2>
                        <p className="w-1/2 text-black text-center">
                            The FNS company culture derives from the determination and will power to replenish the
                            body by taking a break, but never completely stepping away from the ultimate end goal.
                        </p>
                        <div className="grid w-full mt-16 h-[500px]">
                            <div className="bg-no-repeat bg-center bg-cover bg-[url(/cover1152x540.webp)]"></div>
                        </div>
                        <h2 className="text-5xl text-black italic font-bold mb-2 mt-10">Vision</h2>
                        <p className="w-1/2 text-black  text-center mb-16">
                        Ultimately the goal of FNS is to connect with other people/companies that started out as a dream, but ended as a reality. Whether people 
                        are in the process of obtaining that goal, or working on attaining the goal, don't ever sleep on your dreams! Just take a Fat Nap :).
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurStory