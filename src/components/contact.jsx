function Contact() {
    return (
        <>
            <div>

                <div className="w-full h-4 bg-black"></div>
                <div className="flex w-full justify-center bg-[#cdaf8c]">
                    <h2 className="text-5xl 2xl:text-6xl bg-white w-[400px] text-center">CONTACT</h2>
                </div>
                <div className="w-full h-4 bg-black"></div>
                <div className="flex flex-col items-center mt-10">

                    <div className="w-[80%]">
                        <h3 className="text-4xl">Reach Out To Us!</h3>
                        <p>
                            Have further questions and suggestions? Don't hesitate to reach out. We look forward to hearing from you.
                        </p>
                        <br />
                        <p>
                            We are currently in the search for physical location retailers and influencers. Are you ready to team up?
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-10 min-h-[50vh]">
                <form className="w-[80%] bg-[#cdaf8c] p-5  border-black border-2" action="">
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <div><label htmlFor="">First Name</label></div>
                            <div><input className="border-black border-2 bg-[#cdaf8c] w-full" type="text" /></div>
                        </div>
                        <div>
                            <div><label htmlFor="">Last Name</label></div>
                            <div><input className="border-black border-2 bg-[#cdaf8c] w-full" type="text" /></div>
                        </div>
                        <div>
                            <div><label htmlFor="">Email</label></div>
                            <div><input className="border-black border-2 bg-[#cdaf8c] w-full" type="text" /></div>
                        </div>
                    </div>
                    <label htmlFor="">Message</label>
                    <div><textarea className="border-black border-2 w-full bg-[#cdaf8c]" name="" id="" cols="30" rows="10"></textarea></div>
                    <button className="border-black border-2 p-2 w-32 text-[#cdaf8c] bg-black ease-in-out delay-150 duration-150 hover:bg-[#cdaf8c] hover:text-black">Submit</button>
                </form>

            </div>
        </>
    )
}

export default Contact