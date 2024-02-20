type ButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
}

export const Button = ({ text, onClick, className }: ButtonProps) => {
    return (
        <button className={`focus:outline-none ${className}`} onClick={onClick}>{text}</button>
    );
};