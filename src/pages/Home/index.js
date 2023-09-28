import '../../styles/pages/home.css';
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import locations from "../../logements.json"
import homeBanner from "../../assets/imgs/home.jpeg";

function Home() {
  return (
    <div className="Home" >
        <Banner Img={homeBanner} Title="Chez vous, partout et ailleurs" Alt="Paysage côtier"/>
        <div className="locations-container" >
            {locations.map((location) => (
              <Card key={location.id} Location={location}/>
            ))}
        </div>        
    </div>
  );
}

export default Home;
