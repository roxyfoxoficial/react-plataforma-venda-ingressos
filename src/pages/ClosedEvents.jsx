import { Layout } from "../Layout";

const notFoundStyles = {
  container: {
      position: 'relative',
      height: '100vh'
  },
  notfound: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '410px',
      width: '100%',
      textAlign: 'center'
  },
  notfound404: {
      height: '280px',
      position: 'relative',
      zIndex: -1
  },
  notfound404Text: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '230px',
      margin: '0',
      fontWeight: 900,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'url(../img/bg.jpg) no-repeat',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
  },
  heading: {
      fontFamily: 'Montserrat, sans-serif',
      color: '#000',
      fontSize: '24px',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginTop: '0'
  },
  paragraph: {
      fontFamily: 'Montserrat, sans-serif',
      color: '#000',
      fontSize: '14px',
      fontWeight: 400,
      marginBottom: '20px',
      marginTop: '0'
  },
  link: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '14px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      background: '#0046d5',
      display: 'inline-block',
      padding: '15px 30px',
      borderRadius: '40px',
      color: '#fff',
      fontWeight: 700,
      boxShadow: '0 4px 15px -5px #0046d5'
  }
};

export default function ClosedEvents(){
return(
   <Layout>
    <div style={notFoundStyles.container}>
      <div style={notFoundStyles.notfound}>
        <div style={notFoundStyles.notfound404}>
          <h1>Oops.... algo inesperado aconteceu!</h1>
        </div>
        <h2 style={notFoundStyles.heading}>A data desse evento ja passou.</h2>
        <p style={notFoundStyles.paragraph}>Mas ainda voce pode voltar para pagina inicial e buscar eventos parecidos com esse </p>
        <a href="/"style={notFoundStyles.link}>Voltar para pagina de eventos</a>
      </div>
    </div>
   </Layout>
      );
}