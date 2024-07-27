export default function ChangePassword() {
  return (
    <div className="full-window center">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Alterar a senha</h2>
            <form>
              <div className="form-group">
                <label htmlFor="currentPassword">Senha atual</label>
                <input
                  type="password"
                  className="form-control"
                  id="currentPassword"
                  placeholder="Entrar Senha atual"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">Nova senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  placeholder="Entrar Senha atual"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmNewPassword">Confirmar nova senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmNewPassword"
                  placeholder="Confirmar Senha atual"
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger btn-block">
                Alterar senha
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
