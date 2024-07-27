import { Layout } from "@app/Layout";

export default function Events() {
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

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Meus Eventos
            </h1>
          </div>
          <div className="col-12">
            <div className="row">
              {events.map((event) => (
                <div className="col-12 col-md-6 col-lg-4" key={event.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <p className="card-text">
                        {event.ticketsSold} de {event.tickets} ingressos vendidos
                      </p>
                      <a href={`/admin/edit-event/${event.id}`} className="btn btn-danger">
                        Editar
                      </a>
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
