

export default function Profile() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2022/08/Milly-Alcock-Publicity-H-2022-House-of-the-Dragon-HBOMax-Ollie-Upton-HBO.jpg?w=1296&h=730&crop=1" className="rounded-circle img-fluid" alt="Profile Picture" />
        </div>
  
                            <div className="col-lg-6 px-xl-10">
                                <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                    <h3 className="h2 text-white mb-0">Rainha</h3>
                      
                                </div>
                                <ul className="list-unstyled mb-1-9">
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Perfil:</span> Cliente</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">cidade:</span> goiania</li>
                                    <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> edith@mail.com</li>
                                    <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Telefone:</span> 88847-4848</li>
                                </ul>
                            </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <h4>Minha Conta</h4>
          <div className="container mt-5">
        <p> <a href="#" className="btn btn-light">Alterar Senha</a> </p> 
        <p> <a href="#" className="btn btn-light">Editar Perfil</a> </p>
         </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h4>Eventos</h4>
          <div className="container mt-5">
          <p> <a href="#" className="btn btn-light">Rock in Rio</a> </p> 
          </div>
         </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          
          <div className="container mt-5 text-center">
         <p>
          <a href="#" className="btn btn-danger">Sair da Conta</a>
          </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}


