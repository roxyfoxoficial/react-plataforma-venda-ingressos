// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  const groupUser = "admin";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Titulo"
          />
          Venda de Ingressos Online
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Eventos
              </a>
            </li>
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href="/create-event">
                  Organizar
                </a>
              </li>
            )}
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href="/create-staff">
                  Staff
                </a>
              </li>
            )}
            {(groupUser === null && (
              <li className="nav-item">
                <a className="nav-link" href="/signin">
                  Entrar
                </a>
              </li>
            )) || (
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  Perfil
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
