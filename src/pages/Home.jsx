export default function Home() {
  const eventsEncoursed = [
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
  ];

  const eventsOpen = [
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
    {
      id: 2,
      name: "The Marketing Show Brasil",
      image:
        "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
      location: "Centro de Convenções, Brasília",
      time: "08:00",
      organizer: "RD Station",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">
            Ingressos de Encontros, Shows e Eventos
          </h1>
        </div>
        <div className="col-12 text-center">
          <img
            className="img-fluid"
            src="/eventos.jpg"
            alt="Banner de Eventos"
          />
        </div>
        <div className="col-12">
          <h1 className="text-center">Ingressos de Eventos Em Andamento</h1>
        </div>
        <div className="col-12">
          <div className="row">
            {eventsOpen.map((event) => (
              <div key={event.id} className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={event.image}
                    alt={event.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">
                      <strong>Local:</strong> {event.location}
                    </p>
                    <p className="card-text">
                      <strong>Horário:</strong> {event.time}
                    </p>
                    <p className="card-text">
                      <strong>Organizador:</strong> {event.organizer}
                    </p>
                    <a href="/" className="btn btn-danger">
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <h1 className="text-center">Ingressos de Eventos Encerrados</h1>
        </div>
        <div className="col-12">
          <div className="row">
            {eventsEncoursed.map((event) => (
              <div key={event.id} className="col-12 col-md-6 col-lg-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={event.image}
                    alt={event.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <p className="card-text">
                      <strong>Local:</strong> {event.location}
                    </p>
                    <p className="card-text">
                      <strong>Horário:</strong> {event.time}
                    </p>
                    <p className="card-text">
                      <strong>Organizador:</strong> {event.organizer}
                    </p>
                    <a href="/" className="btn btn-danger">
                      Detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
