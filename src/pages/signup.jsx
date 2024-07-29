import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup() {
    navigate("/");
  }

  function redirectToLogin() {
    navigate("/signin");
  }

  return (
    <section className="text-center">
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Cadastro</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Nome Completo
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example2">
                      Cidade
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Endereço de Email
                </label>
              </div>
              <div className="form-outline mb-4">
                <select
                  className="js-example-basic-single js-states form-control"
                  id="id_label_single"
                >
                  <option value="user">Cliente</option>
                  <option value="admin">Organizador de Eventos</option>
                </select>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Senha de Acesso
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-block mb-4"
                onClick={handleSignup}
              >
                Cadastrar-se
              </button>
              <button
                type="button"
                className="btn btn-danger btn-block mb-4"
                onClick={redirectToLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
