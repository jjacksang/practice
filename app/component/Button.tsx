interface ButtonProps {
    text: string;
    onChange?: () => void;
}

const Button = ({ text }: ButtonProps) => {
    return <button>{text}</button>;
};

export default Button;
