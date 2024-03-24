import Logowhite from '../assets/images/logo.svg';
import LogoBlack from '../assets/images/logo-black.svg';

export function Logo(props){
    if (props.useWhite){
        return (
            <a href="/dashboard">
                <img src={Logowhite} alt="Logo Icon" />
            </a>
        )
    }else{
        return (
            <a href="/dashboard">
                <img src={LogoBlack} alt="Logo Icon" />
            </a>
        )
    }
    
}