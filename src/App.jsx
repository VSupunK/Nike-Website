import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
  Footer,
  SpecialOffer,
  Subscribes,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribes />
    </section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
