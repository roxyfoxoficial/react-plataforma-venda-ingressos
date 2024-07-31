import { Layout } from "../../Layout";
import { useNavigate } from "react-router-dom";

export default function CreateStaff() {
  const navigate = useNavigate();

  function redirectToStaff() {
    navigate("/signin");
  }

  return (
    <Layout>
      <section className="text-center">
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Cadastrar Staff</h2>
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
                        Endereço de Email
                      </label>
                    </div>
                  </div>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example1">
                      Senha de Acesso
                    </label>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-danger btn-block mb-4"
                  onClick={redirectToStaff}
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
