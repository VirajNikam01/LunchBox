const Contact = ()=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return(
        <div className="min-h-screen">
                    <div className="min-h-screen relative">
            <img
            className="img2 "
            src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg" alt="" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <form className="border border-black p-5 rounded-xl">
            <div className="my-2 flex flex-col">
                <label
                className="text-slate-700"
                htmlFor="name">Name :</label>
                <input
                className="rounded-md outline-none px-3 py-1"
                type="text" id="name" />
            </div>
            <div className="my-2 flex flex-col">
                <label
                className="text-slate-700"
                htmlFor="email">Email :</label>
                <input
                className="rounded-md outline-none px-3 py-1"
                type="email" id="email" />
            </div>
            <div className="my-2 flex flex-col">
                <label
                className="text-slate-700"
                htmlFor="message">Message :</label>
                <input
                className="rounded-md outline-none px-3 py-1"
                type="text" id="message" />
            </div>
            <div>
                <button
                className="bg-teal-700 text-white px-3 py-1 rounded-lg mt-2 hover:bg-teal-950"
                >Submit</button>
            </div>
           </form>
        </div>
        </div>
        </div>
    )
}

export default Contact;