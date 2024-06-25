import Link from "next/link";
import { CardLayout } from "../component/CardLayout";

export const Profile = () => {
    return (
        <CardLayout>
            <div className="flex flex-col text-lg font-bold gap-1">
                <span>진상우</span>
                <span>Front-end</span>
                <span>1995-04-03</span>
                <span>010-5500-8958</span>
                <span>tkddnrj321@naver.com</span>
            </div>
            <img
                className="absolute right-2 rounded-xl mr-2 w-32 h-40 fill-white"
                src="/메일.jpg"
            />
            <div className="mt-4">
                <span className="text-xl font-bold text-blue-600">About Me</span>
                <ol className="flex flex-col px-4 my-2 list-disc gap-2">
                    <p className="mt-2 text-xl text-black w-fit border rounded-xl bg-white py-1 px-2 ">
                        나의 프로젝트 리스트
                    </p>
                    <li>
                        <Link href="">Yogiyo Admin Clone Coding</Link>
                    </li>
                    <li>
                        <Link href="">한입 리액트 나만의 감정 일기장</Link>
                    </li>
                    <li>
                        <Link href="">Learn Next.Js NomardCoder Clone Coding</Link>
                    </li>
                </ol>
            </div>
            <div className="flex flex-col mt-4">
                <span className="text-xl font-bold text-blue-600">My Core Values</span>
                <span className="flex flex-col pl-2">
                    <span className="font-bold ">Keyword: </span>용기, 꾸준함, 목표의식, 리더쉽,
                    평정심
                    <span className="font-bold ">Skills: </span>React, Javascript, CSS3, Typescript,
                    NextJS, Tailwindcss
                </span>
            </div>
        </CardLayout>
    );
};
