import Link from "next/link";

interface pageProps {
    children: React.ReactNode;
}

export default function Home({ children }: pageProps) {
    return (
        <div className="flex m-4">
            <div className="flex flex-col p-4 border rounded-xl w-[32rem] h-[32rem] divide-y relative">
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
                <div>
                    <span className="text-xl font-bold text-blue-600">My Core Values</span>
                </div>
            </div>

            {children}
        </div>
    );
}
