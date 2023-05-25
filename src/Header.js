import './Header.css'
function Header(){
    return(
        <header>
            <h1>LEONARDO</h1>
            <nav>
                <a className='menu' href=''>Inicio</a>
                <a className='menu' href=''>Portifolío</a>
                <a className='menu' href=''>Contato</a>
            </nav>
            <div className="sociais">
                <a href='https://github.com/LeoRodrigues1036' target="_blank"><img id='img' src="https://img.icons8.com/ios-filled/32/ffffff/github.png"/></a> 
                <a href='https://www.linkedin.com/in/leonardo-rodrigues-desenvolvedor-web/' target="_blank"><img id='img' src="https://img.icons8.com/ios/32/ffffff/linkedin.png"/></a>
                <a href='https://www.instagram.com/leozera96/?next=%2F' target="_blank"><img id='img' src="https://img.icons8.com/fluency-systems-regular/32/ffffff/instagram-new--v1.png"/></a>                
                <a href="https://wa.me/5587991949448" target="_blank"><img id='img' src="https://img.icons8.com/windows/32/ffffff/whatsapp--v1.png"/></a>
            </div>
        </header>
    );  
}
export default Header;