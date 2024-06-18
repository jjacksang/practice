const Navigation = () => {
    return (
        <div className="flex">
            <div className="flex justify-center items-center gap-4 w-full text-xl">
                <button>Home</button>
                <button>Blog</button>
                <button>Github</button>
            </div>
            <div className="border rounded-2xl px-4 py-2 bg-white text-black mr-2 cursor-pointer">
                <span>LogIn</span>
            </div>
        </div>
    );
};

export default Navigation;
