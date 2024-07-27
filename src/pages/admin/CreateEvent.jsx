import {Layout} from "@app/Layout";

export default function CreateEvent() {
  return (
    <Layout>
      <section className="text-center">
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Criar Evento</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        Nome do Evento
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Endereço
                      </label>
                    </div>
                  </div>
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    disabled
                    value={"Fogos Azul Ltda"}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Organizador
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="number"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        Preço do Ingresso
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="number"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Limite de Ingressos
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="date"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        Data
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="time"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Horário
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-danger btn-block mb-4"
                >
                  Criar Evento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
