import buildClient from "../api/build-client";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);

  const { data } = await client.get("/api/users/currentuser");

  const pageProps = await appContext.Component.getInitialProps?.(
    appContext.ctx
  );
  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
