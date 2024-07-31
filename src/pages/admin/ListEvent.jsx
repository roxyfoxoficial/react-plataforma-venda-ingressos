import { Layout } from "../../Layout";

export default function ListEvent() {
  const events = [
  
      { id: 2, name: 'Fashion Week 2024', ticketsSold: 123, tickets: 150 },
      { id: 2, name: 'Food Expo 2024', ticketsSold: 89, tickets: 170 },
      { id: 2, name: 'Tech Conference 2024', ticketsSold: 276, tickets: 1400 },
      { id: 2, name: 'Film Festival 2024', ticketsSold: 31, tickets: 160 },
      { id: 2, name: 'Gaming Convention 2024', ticketsSold: 452, tickets: 1300 },
      { id: 2, name: 'Music Fest 2024', ticketsSold: 245, tickets: 800 }
    ,
  ];

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5 mb-5">
              Meus Eventos
            </h1>
          </div>
          <div className="col-12">
            <div className="row">
              {events.map((event) => (
                <div className="col-12 col-md-6 col-lg-4" key={event.id}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <h5 className="card-title">{event.name}</h5>
                      <p className="card-text">
                        {event.ticketsSold} de {event.tickets} ingressos vendidos
                      </p>
                      <a href={`/admin/events/edit/${event.id}`} className="btn btn-danger">
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
