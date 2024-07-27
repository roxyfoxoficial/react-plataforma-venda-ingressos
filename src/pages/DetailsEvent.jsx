import { Layout } from "@app/Layout";

export default function DetailsEvent() {
  const event = {
    id: 2,
    name: "The Marketing Show Brasil",
    image:
      "https://agenciargdigital.com.br/wp-content/uploads/2024/01/eventos-de-marketing-rd-summit.jpeg",
    location: "Centro de Convenções, Brasília",
    time: "08:00",
    organizer: "RD Station",
    ticketsSold: 100,
    tickets: 1000,
    pricing: 100,
  };

  const handlePurchase = () => {
    console.log("Compra realizada para o evento:", event.name);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          <img
            src={event.image}
            alt="Event"
            className="w-96 h-48 object-cover"
          />
          <h1 className="text-2xl font-bold mt-4">{event.name}</h1>
          <p className="text-lg mt-2">Localidade: {event.location}</p>
          <p className="text-lg mt-2">Horário: {event.time}</p>
          <p className="text-lg mt-2">Organização: {event.organizer}</p>
          <p className="text-lg mt-2">
            Ingressos vendidos: {event.ticketsSold}/{event.tickets}
          </p>
          <p className="text-lg mt-2">Preço: R${event.pricing}</p>
          <button
            className="mt-4 bg-blue-500 text-white btn-danger px-4 py-2 rounded"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Comprar ingresso
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={"-1"}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Deseja realmente comprar um ingresso para o evento{" "}
                {event.name} por R${event.pricing}?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancelar Compra
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handlePurchase}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
