import { routes } from "../constants/routes";
import { Layout } from "../Layout";

export default function Home() {
  const eventsEncoursed = [
      {
        id: 1,
        name: "Tech Innovations Summit",
        image:
          "https://thenewscrypto.com/wp-content/uploads/2023/06/GTIS-1920x1080-2.jpg",
        location: "Centro de Convenções, Brasília",
        time: "09:00",
        organizer: "Innovate Tech",
      },
      {
        id: 2,
        name: "Health and Wellness Expo",
        image:
          "https://www.eamo.my/images/upload/events/2022/20221111-tastefully-health-expo-2022.jpg",
        location: "Centro de Convenções, Brasília",
        time: "10:00",
        organizer: "Wellness Co",
      },
      {
        id: 3,
        name: "AI Future Conference",
        image:
          "https://citl.illinois.edu/images/default-source/default-album/untitled-(1500-400-px)-(1200-400-px)-(1200-600-px).png?sfvrsn=0",
        location: "Centro de Convenções, Brasília",
        time: "11:00",
        organizer: "AI World",
      },
      {
        id: 4,
        name: "Sustainability Forum",
        image:
          "https://i.ytimg.com/vi/nUjb1iF0o38/maxresdefault.jpg",
        location: "Centro de Convenções, Brasília",
        time: "13:00",
        organizer: "Eco Friendly",
      },
      {
        id: 5,
        name: "Startup Pitch Day",
        image:
          "https://i.ytimg.com/vi/NLo7v4wRiMQ/maxresdefault.jpg",
        location: "Centro de Convenções, Brasília",
        time: "14:00",
        organizer: "Startup Hub",
      },
      {
        id: 6,
        name: "Creative Minds Workshop",
        image:
          "https://i.ytimg.com/vi/lra7ziiXNno/maxresdefault.jpg",
        location: "Centro de Convenções, Brasília",
        time: "15:00",
        organizer: "Creative Agency",
      },
    ];
    
    const eventsOpen = [
      {
        id: 7,
        name: "Digital Marketing Conference",
        image:
          "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
        location: "Centro de Convenções, Brasília",
        time: "16:00",
        organizer: "Marketing Pro",
      },
      {
        id: 8,
        name: "Blockchain Expo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeLl6PAWqAf2fOO3lRT9Vg7PEY1kNGikv5g&s",
        location: "Centro de Convenções, Brasília",
        time: "17:00",
        organizer: "Crypto World",
      },
      {
        id: 9,
        name: "E-commerce Summit",
        image:
          "https://saudi.meretailecommercesummit.com/wp-content/uploads/2024/01/2ndindo.jpg",
        location: "Centro de Convenções, Brasília",
        time: "18:00",
        organizer: "E-commerce Experts",
      },
    ];
   

  return (
    <Layout>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1 className="text-center mt-3 mb-2">
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
            <h1 className="text-center mt-5 mb-5">Ingressos de Eventos Em Andamento</h1>
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
                      style={{ width: "348px", height: "200px", objectFit: "cover" }}
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
                      <a
                        href={`${routes.detailsEvent}/${event.id}`}
                        className="btn btn-danger"
                      >
                        Detalhes
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <h1 className="text-center mt-5 mb-5">Ingressos de Eventos Encerrados</h1>
          </div>
          <div className="col-12">
            <div className="row">
              {eventsEncoursed.map((event) => (
                <div key={event.id} className="col-12 col-md-6 col-lg-4">
                  <div className="card mt-4 mb-2" style={{ width: "350px", height: "436px" }}>
                    <img
                      className="card-img-top"
                      src={event.image}
                      alt={event.name}
                      style={{ width: "348px", height: "200px", objectFit: "cover" }}
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
                      <a href="/closed" className="btn btn-danger">
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
    </Layout>
  );
}
