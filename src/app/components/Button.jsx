import '../assets/css/Button.css';

export const Button = ({ children, className, link }) => {
    return (
        <a href={link} className={className}>
            <button className={className}>{children}</button>
        </a>
    );
};