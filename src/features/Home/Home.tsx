import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WorkFlow from "./Components/WorkFlow";
import Review from "./Components/Review";
import Features from "./Components/Features";

const Home: React.FC = () => {
  return (
    <main>
      {/* Header */}
      <section className="mb-19">
        <Header />
      </section>

      {/* Body */}
      <section>
        <Features />
      </section>

      <section className="bg-[#f5f5f7]">
        <WorkFlow />
        <Review />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
