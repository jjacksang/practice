import Link from "next/link";
import { Profile } from "../component/Profile";
import { Project } from "../component/Project";

export default function Home() {
    return (
        <div className="flex gap-4 m-4">
            <Profile />
            <Project />
        </div>
    );
}
