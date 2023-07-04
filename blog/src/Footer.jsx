import './styles/globals.css';
import {GrFacebook, GrTwitter, GrInstagram, GrPinterest} from 'react-icons/gr';

export default function Footer(){
    return (
        <footer id="footer" style={{justifyContent:'center', padding:'40px 12px', gap:'80px'}}>
                <button className="buttonFooter"><GrFacebook /> </button>
                <button className="buttonFooter"><GrTwitter /> </button>
                <button className="buttonFooter"><GrInstagram /> </button>
                <button className="buttonFooter"><GrPinterest /> </button>
        </footer>
    )
}