import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Largecard from '../components/Largecard';
import Mediumcard from '../components/Mediumcard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, liveData }) {
  return (
    <div>
      <header>
        <title>Airbnb by Wout</title>
        <link rel="icon" href=""></link>
      </header>
      {/* <body> */}
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5 ">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard
                key={item.image}
                image={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveData?.map(({ img, title }) => (
              <Mediumcard key={img} image={img} title={title} />
            ))}
          </div>
        </section>
        <Largecard
        image='https://links.papareact.com/4cj'
        title='The greatest outdoors'
        description='Wishlist curated by Airbnb'
        buttonText='Get inspired'
        />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* </body> */}
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  const liveData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      liveData,
    },
  };
}
