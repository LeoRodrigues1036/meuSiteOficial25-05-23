import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Leonardo Rodrigues</h1>

        <nav>
          <a href="">Inicio</a>
          <a href="">Sobre</a>
          <a href="">Portifolío</a>
          <a href="">Contato</a>
        </nav>

        <div class="sociais">
          <a href='https://github.com/LeoRodrigues1036'><img src="https://img.icons8.com/3d-fluency/94/null/github.png" /></a> 
          <a href=""><img src="https://img.icons8.com/3d-fluency/94/null/linkedin.png" /></a>
          <a href=""><img src="https://img.icons8.com/3d-fluency/94/null/instagram-new.png" /></a>
          <a href=""><img src="https://img.icons8.com/3d-fluency/94/null/whatsapp.png" /></a>
        </div>

      </header>

      <main>

        <section>

          <img class="eu" src="https://sat02pap005files.storage.live.com/y4m8VvHsidA-y0ajYfUf08-VqGXfBDlpb1xrtgqvr-Yy9BEqEMDXtILIRYmZk2ZHLp1VuFLnRo1QTyErKgI8Lw1DpqSOxHvgeqEzqffA1WfnVDaDyw0a0WsXsqwHuyTFK7HazRkJpPisto-3aTA3783-XaVEfAtCCWiclPiy61zR9gKq-qZ_jouxeq1Be3VeIk6?width=433&height=576&cropmode=none" alt="oi"></img>

          <div class="conteudo">
            <div class="box">
              <h2>Desenvolvedor Front-end</h2>
              <p>Olá, eu sou Leonardo desenvolvedor front-end apaixonado pela criação de interfaces de usuário
                atraentes e funcionais que oferecem uma experiência de usuário de alta qualidade. Minha
                especialidade é transformar ideias em realidade, criando sites responsivos e acessíveis que
                atendam às necessidades dos usuários e atinjam os objetivos do negócio.</p>
            </div>
          </div>

        </section>

        <section class="box2">
          <img class="logo-main" src="https://img.icons8.com/nolan/64/html-5.png"/>
          <img class="logo-main" src="https://img.icons8.com/nolan/64/css-filetype.png"/>
          <img class="logo-main" src="https://img.icons8.com/nolan/64/javascript.png"/>
          <img class="logo-main" src="https://img.icons8.com/nolan/64/wordpress.png"/>
        </section>

      </main>

      <footer>
        <p>&copy; 2023 Leonardo Rodrigues</p>
      </footer>
    </div>
  );
}

export default App;
