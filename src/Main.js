import './Main.css'

function Main() {
    return (

        <main>
            <section className="box1">

                <img id="img-perfil" src="https://sat02pap005files.storage.live.com/y4mihKXXRZl3y0rMP_jsOq_kw19sQNDGiOf7NGA-pl-RvM185vYHFkIuRBbLNLlbwCoCMYZsLtBx_x7gqm3uR8s3wvPDtCkP4lPwAaTD4I4IW7WGpMBcMfh4xYhnDjENOzfOgqoEvgXMfBQW4KQ-JXy_faDrO-2bRM4XR0pDBuaOATtIg1hOF3Di3gk5OznxXTF?width=2048&height=1462&cropmode=none" alt=""/>

                <div class="box">
                    <img className='titulo' src='https://sat02pap005files.storage.live.com/y4m6BWwxroejWOtmecS6W_N1u8KhDxbBU6Qm669-hG_Nj7HkDlCts5lhScy2US0_S8JCXBe-VLAD76Yji9DGuEoKaDj3NyYMa9q3CD4lqUDFUj5mF7uNv6QQvZ6wOUpqX9woHGX1WvkbMOEp9OwAR9hKo5WXspgVXArqt2wdHuLA8mbVz4pLa3J71iAOKCp400e?width=1794&height=1024&cropmode=none'/>
                    <p>Olá, eu sou Leonardo desenvolvedor front-end apaixonado pela criação de interfaces de usuário
                        atraentes e funcionais que oferecem uma experiência de usuário de alta qualidade. Minha
                        especialidade é transformar ideias em realidade, criando sites responsivos e acessíveis que
                        atendam às necessidades dos usuários e atinjam os objetivos do negócio.</p>
                        <div className='entrar'>
                            <a href='https://wa.me/5587991949448'  target="_blank" id='meu-botao'>Entrar em Contato</a> 
                        </div>
                        
                </div>

            </section>

            <section class="box2">

                <div class="box2-1">
                    <img src="https://img.icons8.com/nolan/64/html-5.png" class="imagem"  />
                    <p class="texto">HTML5</p>
                </div>
                <div class="box2-1">
                    <img class="imagem" src="https://img.icons8.com/nolan/64/css-filetype.png" />
                    <p class="texto">CSS3</p>
                </div>
                <div class="box2-1">
                    <img class="imagem" src="https://img.icons8.com/nolan/64/javascript.png" />
                    <p class="texto">JavaScript</p>
                </div>
                <div class="box2-1">
                    <img class="imagem" src="https://img.icons8.com/nolan/64/wordpress.png" />
                    <p class="texto" >Wordpress</p>
                </div>
                    
            </section>

            <section className='box3'>
                <h2>Skill</h2>
                <div className='box3-1'>
            
                    <div className='box3-2'>
                        <h3>HTML</h3>
                        <p>habilidade avançada em criação de marcações semânticas e acessíveis para páginas web.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>CSS</h3>
                        <p>habilidade avançada em criação de estilos e layout de páginas web, utilizando técnicas de design responsivo e organização modular de CSS.</p>  
                    </div>

                    <div className='box3-2'>
                        <h3>JavaScript</h3>
                        <p>habilidade avançada em escrita de código JavaScript limpo, eficiente e organizado, com conhecimento em programação orientada a objetos e manipulação do DOM.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Frameworks e bibliotecas</h3>
                        <p>experiência em utilização de frameworks e bibliotecas de front-end como React, Angular e Vue.js.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Versionamento</h3>
                        <p>habilidade em gerenciamento de projetos com ferramentas de controle de versão como Git e SVN.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Acessibilidade</h3>
                        <p>conhecimento em diretrizes de acessibilidade para garantir que os sites sejam acessíveis a todos os usuários, incluindo aqueles com deficiências visuais, motoras ou cognitivas.</p>
                    </div>
   
                </div>
            </section>

            <section className='box3'>
                <h2>Serviços</h2>
                <div className='box3-1'>
                    

                    <div className='box3-2'>
                        <h3>Desenvolvimento de sites</h3>
                        <p>Sites personalizados do zero ou utilizar plataformas de gerenciamento de conteúdo como WordPress ou Shopify para criar sites para clientes.</p>
                    </div>
                    
                    <div className='box3-2'>
                        <h3>Design responsivo</h3>
                        <p>Sites responsivos que funcionem bem em dispositivos móveis, tablets e desktops.</p> 
                    </div>

                    <div className='box3-2'>
                        <h3>Desenvolvimento de aplicativos web</h3>
                        <p>Aplicativos web para desktop e dispositivos móveis, que podem ser executados diretamente no navegador sem precisar de instalação.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Otimização de desempenho</h3>
                        <p>Otimizar o desempenho do site para que ele carregue rapidamente e seja fácil de usar.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Integração de APIs</h3>
                        <p>Integrar APIs de terceiros para adicionar funcionalidades extras ao site, como integrações com redes sociais, serviços de pagamento e serviços de mapas.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Manutenção e atualização do site</h3>
                        <p>Manter e atualizar o site, garantindo que ele esteja sempre funcionando sem problemas e com a tecnologia mais recente.</p>
                    </div>

                    <div className='box3-2'>
                        <h3>Teste de usabilidade</h3>
                        <p>Testar o site para garantir que ele seja fácil de usar e acessível para todos os usuários.</p> 
                    </div>

                </div>   
            </section>

        </main>
            
    );
}
export default Main;