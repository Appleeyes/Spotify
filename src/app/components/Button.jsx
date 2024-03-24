import '../assets/css/Button.css';

export const Button = ({ children, style, link }) => {
    return (
        <a href={link}>
            <button className={style}>{children}</button>
        </a>
    );
};