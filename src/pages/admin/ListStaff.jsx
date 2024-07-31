
import { Layout } from "../../Layout";

export default function ListStaff() {
  const events = [
    {
      id: 2,
      name: "The Marketing Show Brasil",
      ticketsSold: 100,
      tickets: 1000,
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      ticketsSold: 100,
      tickets: 1000,
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      ticketsSold: 100,
      tickets: 1000,
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      ticketsSold: 100,
      tickets: 1000,
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      ticketsSold: 100,
      tickets: 1000,
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
    },
  ];
  const contacts = [
    {
      id: 1,
      name: "João Silva",
      telefone: "(11) 98765-4321",
      cargo: "Coordenador de Eventos",
      email: "joao.silva@eventos.com"
    },
    {
      id: 2,
      name: "Marcos Oliveira",
      telefone: "(21) 91234-5678",
      cargo: "Assistente de Produção",
      email: "Marcos.oliveira@eventos.com"
    },
    {
      id: 3,
      name: "Carlos Pereira",
      telefone: "(31) 99876-5432",
      cargo: "Técnico de Som",
      email: "carlos.pereira@eventos.com"
    },
    {
      id: 4,
      name: "João Paulo",
      telefone: "(41) 98765-4321",
      cargo: "Designer de Cenário",
      email: "Joao.Paulo@eventos.com"
    },
    {
      id: 5,
      name: "Pedro Santos",
      telefone: "(51) 91234-5678",
      cargo: "Gerente de Logística",
      email: "pedro.santos@eventos.com"
    },
    {
      id: 6,
      name: "Gustavo Costa",
      telefone: "(61) 99876-5432",
      cargo: "Coordenador de Catering",
      email: "Gustavo.costa@eventos.com"
    }
  ];
 
  
  return (
    <Layout>
      <div className="container ">
        <div className="row ">
          <div className="col-12 mt-4 mb-3">
            <h1 className="text-center ">
              Staff Completa
            </h1>
          </div>
          <div className="col-12">
            <div className="row">
              {contacts.map((contact) => (
                <div className="col-12 col-md-6 col-lg-4 mb-3" key={contact.id}>
                  <div className="card">
                      <div className="text-center mt-4">
                      <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2454057-perfil-sem-rosto-gratis-vetor.jpg" width="100" className="rounded-circle" alt="Profile" />
                      </div>
                    <div className="card-body ">
                      <h5 className="card-title text-center mb-0">{contact.name}</h5>
                      <div className="text-center mb-3">
                      <span>{contact.cargo}</span>
                      </div>
                      <p className="card-text mb-0">
                        Telefone: {contact.telefone}
                      </p>
                      <p className="card-text">
                        Email: {contact.email}
                      </p>
                      <div className="d-flex justify-content-center">
                      <a href={`/admin/events/edit/${contact.id}`} className="btn btn-info">
                        Editar
                      </a>
                      <a href={`/admin/events/edit/${contact.id}`} className="btn btn-danger ml-3">
                        Deletar
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}