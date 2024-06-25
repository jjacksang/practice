import Link from "next/link";
import { CardLayout } from "../component/CardLayout";
import { ListComponent } from "../component/ListComponent";

export const CardProject = () => {
    return (
        <CardLayout>
            <span className="flex justify-center text-xl py-2 font-bold">Project List</span>
            <div className="px-4 py-2">
                <ListComponent>
                    <div>
                        <li className="py-1 font-bold text-lg">Yogiyo-clone Project</li>
                        <ol className="font-sm">프로젝트 소개 : Yogiyo-Admin Clone Coding</ol>
                        <ol className="font-sm">소요기간 : 2024-01-20 ~ 2024-06-07</ol>
                        <ol className="font-sm">프로젝트 인원 : Front-end 2명 Back-end 2명</ol>
                        <ol className="font-sm">
                            내가 맡은 영역 : Log-in, 옵션, 메뉴, 대표 메뉴 등 입점관련 제외 모두
                        </ol>
                        <ol className="font-sm">
                            사용한 주요 기술 : NextJS 14, React, typescript, Recoil, tailwindcss,
                            vercel, REST API
                        </ol>
                        <ol className="font-sm">
                            사용한 라이브러리 : Swiper, Axios, react-datepicker,
                            react-beautiful-dnd, tailwind-scrollbar-hide
                        </ol>
                        <Link href="https://yogiyo-admin.vercel.app/" className="text-blue-600">
                            해당 프로젝트 보기
                        </Link>
                    </div>
                    <li className="py-1 font-bold text-lg">나만의 감정 일기장</li>
                    <ol className="font-sm">
                        프로젝트 소개 : 한입 리액트 수강 및 리액트 동작 학습
                    </ol>
                    <ol className="font-sm">소요기간 : 2024-05-10 ~ 2024-06-03</ol>
                    <ol className="font-sm">프로젝트 인원 : 본인 외 0명</ol>
                    <ol className="font-sm">사용한 기술 : React, openGraph</ol>
                    <Link
                        href="https://emotion-diary-sable-theta.vercel.app/"
                        className="text-blue-600"
                    >
                        해당 프로젝트 보기
                    </Link>
                </ListComponent>
            </div>
        </CardLayout>
    );
};
