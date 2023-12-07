const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Contato</h3>
                        <p>Email: contato@meusite.com</p>
                        <p>Telefone: (00) 1234-5678</p>
                    </div>
                    <div className="col-md-6">
                        <h3>Redes Sociais</h3>
                        <ul>
                            <li><a href="https://www.facebook.com/meusite" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com/meusite" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/meusite" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
