import { user } from "./constants/user";
import { routes } from "./constants/routes";

// eslint-disable-next-line react/prop-types
export function Layout({ children }) {
  const groupUser = user.group;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href={routes.home}>
                Eventos
              </a>
            </li>
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href={routes.createEvent}>
                  Criar Evento
                </a>
              </li>
            )}
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href={routes.listEvents}>
                  Meus Eventos
                </a>
              </li>
            )}
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href={routes.createStaff}>
                  Criar Staff
                </a>
              </li>
            )}
            {groupUser === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href={routes.listStaffs}>
                  Staff
                </a>
              </li>
            )}
            {groupUser === null && (
              <li className="nav-item">
                <a className="nav-link" href={routes.login}>
                  Entrar
                </a>
              </li>
            )}
            {groupUser === null && (
              <li className="nav-item">
                <a className="nav-link" href={routes.register}>
                  Cadastro
                </a>
              </li>
            )}
            {groupUser !== null && (
              <li className="nav-item">
                <a className="nav-link" href={routes.profile}>
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
