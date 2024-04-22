import React, { useState } from 'react';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from './SearchItem';
const img = require('../../../src/Assets/Images/RZO.png')

const List = ({loading}) => {

  const data = [
    {
      id: 1,
      name: "Sata International",
      origin: "New York",
      destination: "Los Angeles",
      departureDate: "2024-05-01",
      returnDate: "2024-05-07",
      departureTime: "10:30 AM",
      arrivalTime: "02:45 PM",
      price: 350,
      stops: 1,
      distance: 2461, // Approximate distance in miles between New York and Los Angeles
      image: img,
    },
    {
      id: 2,
      name: "AeroWorld",
      origin: "Chicago",
      destination: "Miami",
      departureDate: "2024-05-15",
      returnDate: "2024-05-20",
      departureTime: "8:10 AM",
      arrivalTime: "02:45 PM",
      stops: 2,
      price: 280,
      distance: 1197, // Approximate distance in miles between Chicago and Miami
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Global Airways",
      origin: "San Francisco",
      destination: "Seattle",
      departureDate: "2024-06-10",
      returnDate: "2024-06-15",
      departureTime: "11:00 AM",
      arrivalTime: "02:45 PM",
      stops: 2,
      price: 200,
      distance: 679, // Approximate distance in miles between San Francisco and Seattle
      image: "data:image/png;base64,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",
    },
    {
      id: 4,
      name: "TransAtlantic Airlines",
      origin: "Boston",
      destination: "Denver",
      departureDate: "2024-07-01",
      returnDate: "2024-07-07",
      departureTime: "11:30 AM",
      arrivalTime: "02:45 PM",
      price: 400,
      stops: 1 ,
      distance: 1758, // Approximate distance in miles between Boston and Denver
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAA21BMVEX////YHQTWAADYHADwubbUAADXDwDVHAb99PP//fzicGf77u3lf3b65+X88fCwChTrpZ+rAADwta/44N7pj4jsopv21NDHFQvyxMDPGQj++fj21tK2AADplY70zcr329nbOSvlfHTdSTzEAADeUEXxvbjfV0zjcml5AADhYFXmh4DMAADurqrqmpPaMCDZJxHCEw3YMBzdTD/hZ13bQTPcjYizV1OmLyzNcW+0Ix2UAABsAADbb2nJNzGiAACOAATIkI63OTLisq7LRD7MUk7YhYHel5TBLSnNT0g4eryAAAAIj0lEQVR4nO2ai3biOBKGoYTFxUAIGMcBzC1cFkggBLIzO7vdPdNz2/d/olXJNxmSAIFk9sz5v3O6A7YsS79LpaoymQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDfm+LBFvT0CcP4f6JYaLfH09Ga1uXqgaZdou6njOmvpuHWm/5suc6SwrJWzdbha7ZSDj5+ZCH2fFT7tJsFVCpe3fefBGmkUEgSjnvMtS0SYl346BGGFIck6eFz7lUoNNz75uZJSRGKktWo70/NQ8spxKFslj7raY7VzYT48Edht717JxRFRqIw+XzWonLu6I5IXSuHHzhSE+/Dxam067OtXkCmKFoY9U9aYm4f35nH4mTpqBV4ASbKFd5/UN+t3PM/f7i2SL4kS15h0bB7ePM2eMoP2XQ2lxlfsXKohXf/Ic/Brf34r5/+wfy7k5Imr9HryRr0Tuu0QbMcmzpdxtRny4t0cxIVz//Pl87115++ffv2w8/f29+lSJRhs9HqWLLcOLXnudVr8cKi+iXG2aDPcl4hvaYztBZ3dzdXV1+//vJdT9/Oi7zWJR+ajfq4sJyDNr1Ha7XOZEZSmc76EmP1aXSJbo6n0SvPhFKn0+k8RyFdgy0nb2K9z835Vo1DZHbJ3vlD7ZIsnd/L6RSqXSPGr5EpzG1+cfvOHeCJ2BJX7JLPj5Iba/HXiJNmJLUm/N/t7WKxfq/DcGnKf+61Szb8VdEOCb5G30yn3S4Nl5NyO5MJg81Cb67MWW4KZsPK/UYZuzsY9TdRmGl3HT81hEFpu9yWprvpXe+hrP7vDjbb7ax0ilU3rUCWWy3N9v1xwyZIOSu8SqlpjEzHUCLaw/rht3LcoDolGpYmkibTMESaWuzXRZDBqK7sxriszlMlM+fYXaqLW5WxP1MNDOvyhkSr6XSkrhnF+2zFrU/VcVHoDcnSQS5Njt5pbCtSRmmzPSdTkdvg72DHJbe8XJkScVyvuUqL0yfJT7M1UCNv6yN152EpsmL74Pu+oyR/siwVuWfJnlqDudJNkNu0OEDLGkvvXn1f8Yeakk+GAVBVNxMi71vCrxYrvrparo7IoDWzhdblhs2mebj56ziRFw9ccnpx8h6WRD+cFMlYnAFFdrYh0Y6OLlMTd+fcqWyyy+erVffFmvZucZuimjaNgx5lVk6i4/UNXypoEijS4GbT46bkL5QsNze3N3d35cOt32JF4ebf4nWVDE7Dc0vEKaTEUVYUuYGljMVZi3SkzfaYlbqS5hD1+S8HnIk4nGlR8LFNqUB0w6bcj0L9klQnj4r76wulDHM3OznkS+Mlj2PPJav7pMQp8nqIxOlR9MCV/6OUOOZu1dP2GLiSrhd0Jcw2bVKLKfjI4hvRxH2qVMAd0TGh//gulGZxdvluk8yrqqPkuXk2LU5rRxwROYFekrPuilPRiqecRXGVauNn+9EQeOkkO0supVWBTx7hQLyFEuZRraj5keWa12nQqtIIqczYjqV5esdyyBCnwYujHz7KJC7fF0fsFkOK+XSbWLlWuqqkxYlrC/zoyDk4IU/ZzePj492XC1R9H7iQGhEULkzTfUMcXhzKJh52dpAXxUlZ45446bvtiBOrfpw4vbtHplM+qSrxMvZS+uUYf8kuebs73FfEabI3yZJMD5jFMeNsFmenxviaOGrXPlecnNamc9c+0O4oxpQapEM7pvOWOJmptjRBq7HRxeolcdKu4kVxeoO1tVmJ88TJdR4fr66vvxwbD73NJp1q9nSUbIzgTXFUdid1sZpKiRGL94jTmG+JNu0MnSfOc+fq6uq6c6Eio0vb9IGpdslJqPG2OJnKJpCHRrHffMnnHBCnXVLpwZMXxoPvF+f5mrX59SJLKsOll528416vq6Qwf0ActTlsAy8ez3V5sjjK/kQQQJwnzq9am98u4ImDUZLcjaq0S57FXw+Kw/udNNOOk8UpqfwtjCbPEcfuaG2eX21wKjWa7B560DFbHNK9IU41OlztSyOrWJ0oDmd00ZzPEMcL3M3l6vbF/P57R5dSWWE9FYelxCnHs6goQaJ0vihOFEcFnrGTOyxOOmBK+D1YUie8jTqER7Tv2HWUTFHkrcVJHocpjhOnhMp1ZUU2+PiCONk9cQzrKqj9MShYZHj+ByJk+bI49m9amx8v+J5QPUDa9+w6tIufkJdKb3TGEO3TjhUH6GppxNk8i2NWFl4SJ5uIwyU2EW2ZjbQ441SqqS0nVT+McAN38/tbkz0V9bxp/4WxF1RRoofAc50ZVyRm4VB83KVk2LyVm57M5hnurN6sUdZQ7YUIP7PDezPx3NsNFMU/WJqr64u+6WdPKPerR0FSIKO3K2VKcmovqIGGZ5xkUTok4m1vq3xI3uhPF8jSiSe7ISFa8Q2y0U+DdAiaCKl/3RA/Pv2GfZXZpfdnoM0lf11UqAXxyaSeCrV7D+GbQpoEs61q02GvWG2SWOvfGwTvcpUi4eahREuet16IvPRsvTTbS32bByP6sIP61zwwTpuVWnMRqTAjXd1Sn/Rqr+vi2zD0eJWh7mjXSf5xzVwomQpxKMIKqnOaqaQESxeIlR/gYlRpXpbWzJYyaBF0sZRW3/H9AUkzsxxwTLccbEh59e0y7q4fLsJNPzmkl2JPEFfenYG0PCW4kCNHypbdz0fN1ttMcdiPR9U3Mrnul87jf7977cv+YsPNGST3yqUIdlHbyWtFNp7aajfT2tht6L3Mr2UK9/zGgFZTM5Qs5p5YQv0rD7O3cE6ecSgwCttf8w1kWfXiL/naaSNTqKcGaHypG6XKXO/MOugFaHfd1361UVWn9g72XPe0aKzrxr10Xe9SCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwN+U/wENZJLkhwbCggAAAABJRU5ErkJggg==",
    },

    {
      id: 5,
      name: "Air India",
      origin: "Delhi",
      destination: "NYC",
      departureDate: "2024-05-01",
      returnDate: "2024-05-07",
      departureTime: "7:30 AM",
      arrivalTime: "02:45 PM",
      stops: 1,
      price: 350,
      distance: 2461, // Approximate distance in miles between New York and Los Angeles
      image: "data:image/png;base64,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",
    },
  ];
  
  const location = useLocation();
  console.log(location);



  const [dates, setDates] = useState(location.state.departureDate);
  const [destination, setDestination] = useState(location.state.goingTo);
  const [origin, setOrigin] = useState(location.state.leavingFrom);
  const [adult, setAdult] = useState(location.state.numAdults);

  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  


  return (
    <div>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Origin</label>
            <input placeholder={origin} type="text" />
          </div>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span>{dates}</span>
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price
                </span>
                <input
                  type="number"
                  onChange={(e) => setMin(e.target.value)}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price
                </span>
                <input
                  type="number"
                  onChange={(e) => setMax(e.target.value)}
                  className="lsOptionInput"
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={adult}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Class</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <button >Search</button>
        </div>
        <div className="listResult">
          {loading ? (
            "loading"
          ) : (
            <>
              {data.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default List;
