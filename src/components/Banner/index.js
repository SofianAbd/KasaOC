import '../../styles/components/banner.scss';

function Banner(props) {
  const img = props.Img
  const title = props.Title
  const alt = props.Alt

    return (
      <div className="banner">
        <img className="banner-img" src={img} alt={alt} />
        <span className="banner-text" >{title}</span>
      </div>
    );
}

export default Banner;