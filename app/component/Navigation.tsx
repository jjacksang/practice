import Button from "./Button";

const Navigation = () => {
    return (
        <div className="flex">
            <div className="flex justify-center items-center gap-4 w-full text-xl">
                <Button text={"Home"} />
                <Button text={"Blog"} />
                <Button text={"Github"} />
            </div>
        </div>
    );
};

export default Navigation;
