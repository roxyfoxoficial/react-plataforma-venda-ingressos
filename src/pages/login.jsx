export default function Login() {
  function redirectToSignup() {}

  function handleLogin() {}

  return (
    <section className="text-center">
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Entrar na Conta</h2>
            <form>
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
                onClick={redirectToSignup}
              >
                Cadastrar-se
              </button>
              <button
                type="button"
                className="btn btn-danger btn-block mb-4"
                onClick={handleLogin}
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
