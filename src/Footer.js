import './Footer.css'
function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div className='footerbox'>
                        <h2>Fale Comigo</h2>
                        <form> 
                        <fieldset>
                            <legend>Mensagem</legend>
                            
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome" required/>
                                <br />
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" required/>
                                <br />
                                <label for="mensagem">Mensagem</label>
                                <textarea id="mensagem" name="mensagem" required></textarea>
                                <button type="submit" >Enviar</button>
                        </fieldset>
                        </form>
                    </div>
                    <div className='footerbox'>
                        <h2>Links</h2>
                        <a className='menu' href=''>Inicio</a>
                        <a className='menu' href=''>Portifolío</a>
                        <a className='menu' href=''>Contato</a>
                    </div>
                    <div className='footerbox'>
                        <h2>Me sigam nas redes sociais</h2>
                        <a href='https://github.com/LeoRodrigues1036' target="_blank"><img src="https://img.icons8.com/ios-filled/32/448CCC/github.png" /></a>
                        <a href='https://www.linkedin.com/in/leonardo-rodrigues-desenvolvedor-web/' target="_blank"><img src="https://img.icons8.com/ios/32/448CCC/linkedin.png" /></a>
                        <a href='https://www.instagram.com/leozera96/?next=%2F' target="_blank"><img src="https://img.icons8.com/fluency-systems-regular/32/448CCC/instagram-new--v1.png" /></a>
                        <a href="https://wa.me/5587991949448" target="_blank"><img src="https://img.icons8.com/windows/32/448CCC/whatsapp--v1.png" /></a>
                    </div>
                </div>
            </div>
            <p>Todos os direitos reservados 2023 - Leonardo Rodrigues</p>
        </footer>

    );
}
export default Footer;