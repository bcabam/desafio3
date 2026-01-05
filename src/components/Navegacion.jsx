import { Link } from 'react-router-dom';
import Logo from '../assets/emojione--shortcake.png'

export const Navegacion = () => {
    return (
        <nav className="menu"> {}
            {}
            <div className='links'>
                <Link to='/' style={{marginRight: '20px', textDecoration:'none', color:'white'}}>Home</Link>
                <Link to='/contacto' style={{textDecoration:'none', color:'white'}}>Contacto</Link>
            </div>
            
            {}
            <div className='brand'>
                <span style={{color:'white', marginRight:'10px', fontWeight:'bold'}}>Happy Cake</span>
                <img src={Logo} alt="Logo Cake" width={50}/>
            </div>
        </nav>
    )
}