interface ListProps {
    children: React.ReactNode;
}

export const ListComponent = ({ children }: ListProps) => {
    return <ul className="flex flex-col px-4 my-2 list-disc gap-2">{children}</ul>;
};
