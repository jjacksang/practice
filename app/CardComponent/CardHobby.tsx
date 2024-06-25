import { CardLayout } from "../component/CardLayout";
import { ListComponent } from "../component/ListComponent";

export const CardHobby = () => {
    return (
        <CardLayout>
            <ListComponent>
                <li>프로그래머스 코딩테스트 풀이</li>
                <li>낚시</li>
                <li>당구</li>
            </ListComponent>
        </CardLayout>
    );
};
