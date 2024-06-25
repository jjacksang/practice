interface CardLayoutProps {
    children: React.ReactNode;
}

export const CardLayout = ({ children }: CardLayoutProps) => {
    return (
        <div className="flex flex-col p-4 border rounded-xl w-[32rem] h-[38rem] divide-y relative">
            {children}
        </div>
    );
};
