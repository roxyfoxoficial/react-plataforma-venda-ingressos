import { Layout } from "../Layout";

export default function Profile() {
  return (
    <Layout>
    <div className="container mt-5">
      {/* Profile Section */}
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://www.hollywoodreporter.com/wp-content/uploads/2022/08/Milly-Alcock-Publicity-H-2022-House-of-the-Dragon-HBOMax-Ollie-Upton-HBO.jpg?w=1296&h=730&crop=1"
            width="250"
            height="250"
            className="rounded-circle"
            alt="Profile Picture"
          />
        </div>
        <div className="col-lg-6 px-xl-10">
          <div className="bg-dark d-lg-inline-block py-2 px-3 mb-4 rounded">
            <h3 className="h2 text-white mb-0">Ana julia</h3>
          </div>
          <ul className="list-unstyled mb-4">
            <li className="mb-2 display-28">
              <span className="display-26 text-secondary me-2 font-weight-600">Perfil:  </span>
              Organizador
            </li>
            <li className="mb-2 display-28">
              <span className="display-26 text-secondary me-2 font-weight-600">Cidade:  </span>
              Goiânia
            </li>
            <li className="mb-2 display-28">
              <span className="display-26 text-secondary me-2 font-weight-600">Email:  </span>
              edith@mail.com
            </li>
            <li className="display-28">
              <span className="display-26 text-secondary me-2 font-weight-600">Telefone:  </span>
              88847-4848
            </li>
          </ul>
        </div>
      </div>

      {/* Account Section */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h4>Minha Conta</h4>
          <div className="container mt-3">
            <p>
              <a href="#" className="btn btn-light">Alterar Senha</a>
            </p>
            <p>
              <a href="#" className="btn btn-light">Editar Perfil</a>
            </p>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="row mt-3">
        <div className="col-md-12">
          <h4>Eventos</h4>
          <div className="container mt-3">
            <p>
              <a href="#" className="btn btn-light ml-2 text-info">Rock in Rio</a>
              <a href="#" className="btn btn-light ml-2 text-info">AI experience</a>
              <a href="#" className="btn btn-light ml-2 text-info">Open health</a>
              <a href="#" className="btn btn-light ml-2 text-info">World cup Brazil</a>
            </p>
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <div className="container mt-3">
            <p>
              <a href="/" className="btn btn-danger">Sair da Conta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
