import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <section>
        <Header />
      </section>
      <section>
        <Footer />  
      </section>
    </main>
  );
};

export default Home;
