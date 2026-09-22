import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkFlow from "./Components/WorkFlow";
import Review from "./Components/Review";
import Features from "./Components/Features";
// import Hero from "./Components/Hero";

const Home: React.FC = () => {
  return (
    <main>
      <section className="mb-19">
        <Header />
      </section>

      {/* Hero */}
      {/* <section>
        <Hero />
      </section> */}

      <section>
        <Features />
      </section>

      <section className="bg-[#f5f5f7]">
        <WorkFlow />
        <Review />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
