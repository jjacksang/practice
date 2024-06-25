import Link from "next/link";
import { CardProfile } from "./CardComponent/CardProfile";
import { CardProject } from "./CardComponent/CardProject";
import { CardHobby } from "./CardComponent/CardHobby";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 m-4 lg:max-2xl lg:flex-row">
            <CardProfile />
            <CardProject />
            <CardHobby />
        </div>
    );
}
