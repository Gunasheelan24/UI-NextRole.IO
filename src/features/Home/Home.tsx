import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkFlow from "./Components/WorkFlow";

const Home: React.FC = () => {
  return (
    <main>
      {/* Header */}
      <section>
        <Header />
      </section>

      {/* Body */}
      <section>
        <WorkFlow />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
