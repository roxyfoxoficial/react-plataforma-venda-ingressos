import { Layout } from "../Layout";

export default function Profile() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2022/08/Milly-Alcock-Publicity-H-2022-House-of-the-Dragon-HBOMax-Ollie-Upton-HBO.jpg?w=1296&h=730&crop=1" className="rounded-circle img-fluid" alt="Profile Picture" />
        </div>
        <div className="col-md-8">
          <h3 className="mt-4">Rhaenyra Targaryen</h3>
          <p className="lead">rainha</p>
          <p>Gioania, CA</p>
          <p> Rhaenyra Targaryen@example.com</p>
          <p> (123) 456-7890</p>
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
          <h4>Privacidade</h4>
          <div className="container mt-5">
          <p> <a href="#" className="btn btn-light">Termos e politicas</a> </p> 
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


