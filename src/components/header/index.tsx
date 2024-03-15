import "./header.css";

export default function Header() {
    return (
        <header className='flex-col  h-full w-full flex justify-center items-center'>
            <h1 className="text-[200px] ">
                <span className="re font-extrabold">Re</span>
                <span className="font-extralight text-white drop-shadow-lg">active</span>
            </h1>
            <div className="flex justify-center items-center flex-col gap-10">
                <h3 className="text-5xl d font-semibold text-gray-200 ">Bring UI to Life</h3>
                <a href="#" className="px-2 w-24 text-center text-white py-2 bg-black rounded-md">Try Now</a>
            </div>
        </header>
    )
}
