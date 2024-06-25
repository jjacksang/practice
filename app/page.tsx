import Link from "next/link";
import { Profile } from "./CardComponent/CardProfile";
import { Project } from "./CardComponent/CardProject";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 m-4 lg:max-2xl lg:flex-row">
            <Profile />
            <Project />
        </div>
    );
}
