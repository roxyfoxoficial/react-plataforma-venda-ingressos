import { Layout } from "../Layout";

export default function Profile() {
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h3 className="mt-4">Rhaenyra Targaryen</h3>
            <p className="lead">usuário</p>
            <p>Gioania, CA</p>
            <p>usuario@example.com</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h4>Minha Conta</h4>
            <div className="container mt-5">
              <p> <a href="/change-password" className="btn btn-light">Alterar Senha</a> </p>
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
    </Layout>
  );
}


