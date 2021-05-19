import {Link} from 'react-router-dom';

function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

  return (
    <div>
      <div class = "h1_div">
        <h1>CityList</h1>
      </div>
      <ul class="city_ul">
        {cities.map((item, index) => {
          return <li class="city_li" key={index}>
           <Link to="/about" class="city_link">{item}</Link></li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
