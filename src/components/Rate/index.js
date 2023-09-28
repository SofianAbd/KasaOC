import '../../styles/components/rate.css';
import fullStar from "../../assets/imgs/fullStar.png";
import emptyStar from "../../assets/imgs/emptyStar.png";

function Rate(props) {
    const rate = props.Rate;
    
    const stars = [];
    for (let i = 0; i < rate; i++) {
        stars.push(<img key={i} src={fullStar} alt="star"/>);

    }
    for (let i = rate; i < 5; i++) {
        stars.push(<img key={i} src={emptyStar} alt="star"/>);
    }

    return (
      <div className="rate">
        {stars}
      </div>
    );
}

export default Rate;
