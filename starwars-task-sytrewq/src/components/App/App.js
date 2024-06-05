// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import app from './app.css'

// function App() {

//     // const [person, setPerson] = useState('');
//     // const [image, setImage] = useState('');
//     // const [characterId, setCharacterId] = useState(1);

//     // const [planet, setPlanet] = useState(null);
//     // const [planetImage, setPlanetImage] = useState(null);
//     // const [planetId, setPlanetId] = useState(1);

//     // const [starship, setStarship] = useState(null);
//     // const [starshipImage, setStarshipImage] = useState(null);
//     // const [starshipId, setStarshipId] = useState(1);

//     const [category, setCategory] = useState('people');
//     const [categoryId, setCategoryId] = useState(1);
//     const [data, setData] = useState(null);
//     const [image, setImage] = useState(null);

//     // useEffect(() => {
//     //     axios.get(`https://swapi.dev/api/people/${characterId}`)
//     //       .then(response => {
//     //         setPerson(response.data);
//     //         fetchImage();
//     //       });
//     //   }, [characterId]);


//     //   useEffect(() => {
//     //     axios.get(`https://swapi.dev/api/planets/${planetId}`)
//     //       .then(response => {
//     //         setPlanet(response.data);
//     //         fetchPlanetImage();
//     //       });
//     //   }, [planetId]);

//     //   useEffect(() => {
//     //     axios.get(`https://swapi.dev/api/starships/${starshipId}`)
//     //       .then(response => {
//     //         setStarship(response.data);
//     //         fetchStarshipImage();
//     //       });
//     //   }, [starshipId]);


//     //   const fetchImage = () => {
//     //     axios.get(`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`)
//     //     .then(response => {
//     //         setImage(response.config.url);
//     //     });
//     // }
//     // const fetchPlanetImage = () => {
//     //     axios.get(`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`)
//     //       .then(response => {
//     //         setPlanetImage(response.config.url);
//     //       });
//     //   };
//     //   const fetchStarshipImage = () => {
//     //     axios.get(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`)
//     //       .then(response => {
//     //         setStarshipImage(response.config.url);
//     //       });
//     //   };
//     // const handleClick = () => {
//     //     setCharacterId(characterId + 1);
//     //   };
//     //   const handlePlanetClick = () => {
//     //     setPlanetId(planetId + 1);
//     //   };
//     //   const handleStarshipClick = () => {
//     //     setStarshipId(starshipId + 1);
//     //   };    

//     useEffect(() => {
//         axios.get(`https://swapi.dev/api/${category}/${categoryId}`)
//         .then(response => {
//             setData(response.data);
//             fetchImage();
//         });
//     }, [category, categoryId]);

//     const fetchImage = () => {
//         axios.get(`https://starwars-visualguide.com/assets/img/${category}/${categoryId}.jpg`)
//         .then(response => {
//             setImage(response.config.url);
//       });
//     };
//     const handleNextClick = () => {
//         setCategoryId(categoryId + 1);
//     }
// };

//       return (
//         <div>
//             <button>People</button>
//             <button>Planets</button>
//             <button>Starships</button>
//             <br/>
//             <br/>
//             <button onClick={handleClick}>Next</button>
//           {person && (
//             <div>
//        {image && <img className='photo' src={image} />}
//               <h3>{person.name}</h3>
//               <ul>
//                 <li><strong>Gender:</strong> {person.gender}</li>
//                 <li><strong>Birth Year:</strong> {person.birth_year}</li>
//                 <li><strong>Eye Color:</strong> {person.eye_color}</li>
//               </ul>
             
//             </div>
//           )}
//         </div>
//       );
  
// }

// export default App

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [person, setPerson] = useState(null);
//   const [image, setImage] = useState(null);
//   const [characterId, setCharacterId] = useState(1);

//   const [planet, setPlanet] = useState(null);
//   const [planetImage, setPlanetImage] = useState(null);
//   const [planetId, setPlanetId] = useState(2);

//   const [starship, setStarship] = useState(null);
//   const [starshipImage, setStarshipImage] = useState(null);
//   const [starshipId, setStarshipId] = useState(2);

//   useEffect(() => {
//     axios.get(`https://swapi.dev/api/people/${characterId}`)
//       .then(response => {
//         setPerson(response.data);
//         fetchImage();
//       });
//   }, [characterId]);

//   useEffect(() => {
//     axios.get(`https://swapi.dev/api/planets/${planetId}`)
//       .then(response => {
//         setPlanet(response.data);
//         fetchPlanetImage();
//       });
//   }, [planetId]);

//   useEffect(() => {
//     axios.get(`https://swapi.dev/api/starships/${starshipId}`)
//       .then(response => {
//         setStarship(response.data);
//         fetchStarshipImage();
//       });
//   }, [starshipId]);

//   const fetchImage = () => {
//     axios.get(`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`)
//       .then(response => {
//         setImage(response.config.url);
//       });
//   };

//   const fetchPlanetImage = () => {
//     axios.get(`https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`)
//       .then(response => {
//         setPlanetImage(response.config.url);
//       });
//   };

//   const fetchStarshipImage = () => {
//     axios.get(`https://starwars-visualguide.com/assets/img/starships/${starshipId}.jpg`)
//       .then(response => {
//         setStarshipImage(response.config.url);
//       });
//   };

//   const handleClick = () => {
//     setCharacterId(characterId + 1);
//   };

//   const handlePlanetClick = () => {
//     setPlanetId(planetId + 1);
//   };

//   const handleStarshipClick = () => {
//     setStarshipId(starshipId + 1);
//   };

//   return (
//     <div>
//       <button onClick={() => {}}>People</button>
//       <button onClick={() => {}}>Planets</button>
//       <button onClick={() => {}}>Starships</button>
//       <button onClick={handleClick}>Next</button>
//       {person && (
//         <div>
//           {image && <img src={image} alt={person.name} />}
//           <h3>{person.name}</h3>
//           <ul>
//             <li><strong>Gender:</strong> {person.gender}</li>
//             <li><strong>Birth Year:</strong> {person.birth_year}</li>
//             <li><strong>Eye Color:</strong> {person.eye_color}</li>
//             <li><strong>Height:</strong> {person.height}</li>
//           </ul>
//         </div>
//       )}
//       {planet && (
//         <div>
//           {planetImage && <img src={planetImage} alt={planet.name} />}
//           <h3>{planet.name}</h3>
//           <ul>
//             <li><strong>Population:</strong> {planet.population}</li>
//             <li><strong>Orbital Period:</strong> {planet.orbital_period}</li>
//             <li><strong>Diameter:</strong> {planet.diameter}</li>
//           </ul>
//         </div>
//       )}
//       {starship && (
//         <div>
//           {starshipImage && <img src={starshipImage} alt={starship.name} />}
//           <h3>{starship.name}</h3>
//           <ul>
//             <li><strong>Model:</strong> {starship.model}</li>
//             <li><strong>Class:</strong> {starship.class}</li>
//             <li><strong>Crew:</strong> {starship.crew}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Header({ setSelectedChlen }) {
    return (
      <div>
        <button onClick={() => setSelectedChlen('people')}>People</button>
        <button onClick={() => setSelectedChlen('planets')}>Planets</button>
        <button onClick={() => setSelectedChlen('starships')}>Starships</button>
      </div>
    );
  }

  function People({ characterAidi, setCharacterAidi }) {
    const [person, setPerson] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${characterAidi}`)
          .then(response => {
            setPerson(response.data);
            fetchImage();
          });
      }, [characterAidi]);

      const fetchImage = () => {
        axios.get(`https://starwars-visualguide.com/assets/img/characters/${characterAidi}.jpg`)
        .then(response => {
            setImage(response.config.url);
        });
    }

    const handleClick = () => {
        setCharacterAidi(characterAidi + 1);
      };


      return (
        <div>
          <button onClick={handleClick}>Next</button>
          {person && (
            <div>
            {image && <img src={image} />}
            <h3>{person.name}</h3>
            <ul>
            <li><strong>Gender:</strong> {person.gender}</li>
            <li><strong>Birth Year:</strong> {person.birth_year}</li>
            <li><strong>Eye Color:</strong> {person.eye_color}</li>
            <li><strong>Height:</strong> {person.height}</li>
          </ul>
        </div>
        )}
          </div>
      );
    
  }

  function Planets({ planetAidi, setPlanetAidi }) {
    const [planet, setPlanet] = useState(null);
    const [planetimage, setPlanetImage] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planetAidi}`)
          .then(response => {
            setPlanet(response.data);
            fetchPlanetImage();
          });
      }, [planetAidi]);

      const fetchPlanetImage = () => {
        axios.get(`https://starwars-visualguide.com/assets/img/planets/${planetAidi}.jpg`)
        .then(response => {
            setPlanetImage(response.config.url);
        });
    }

    const handleClick = () => {
        setPlanetAidi(planetAidi + 1);
      };


      return (
        <div>
          <button onClick={handleClick}>Next</button>
          {planet && (
            <div>
            {planetimage && <img src={planetimage} />}
            <h3>{planet.name}</h3>
            <ul>
            <li><strong>Population:</strong> {planet.population}</li>
            <li><strong>Orbital Period:</strong> {planet.orbital_period}</li>
            <li><strong>Diameter:</strong> {planet.diameter}</li>
          </ul>
        </div>
        )}
          </div>
      );
    
  }

  function Starships({ starshipAidi, setStarshipAidi }) {
    const [starship, setStarship] = useState(null);
    const [starshipimage, setStarshipImage] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${starshipAidi}`)
          .then(response => {
            setStarship(response.data);
            fetchStarshipImage();
          });
      }, [starshipAidi]);

      const fetchStarshipImage = () => {
        axios.get(`https://starwars-visualguide.com/assets/img/starships/${starshipAidi}.jpg`)
        .then(response => {
            setStarshipImage(response.config.url);
        });
    }

    const handleClick = () => {
        setStarshipAidi(starshipAidi + 1);
      };


      return (
        <div>
          <button onClick={handleClick}>Next</button>
          {starship && (
            <div>
            {starshipimage && <img src={starshipimage} />}
            <h3>{starship.name}</h3>
            <ul>
            <li><strong>Model:</strong> {starship.model}</li>
            <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
            <li><strong>Cost in Credits:</strong> {starship.cost_in_credits}</li>
          </ul>
        </div>
        )}
          </div>
      );
    
  }


  

function App() {
    const [selectedMenu, setSelectedMenu] = useState('people');
    const [characterId, setCharacterId] = useState(1);
    const [planetId, setPlanetId] = useState(2);
    const [starshipId, setStarshipId] = useState(5);
  
    return (
      <div>
        <Header setSelectedChlen={setSelectedMenu} /> 
        {selectedMenu === 'people' && <People characterAidi={characterId} setCharacterAidi={setCharacterId} />} 
         {selectedMenu === 'planets' && <Planets planetAidi={planetId} setPlanetAidi={setPlanetId} />}
        {selectedMenu === 'starships' && <Starships starshipAidi={starshipId} setStarshipAidi={setStarshipId} />}  
      </div>
    );
  }
  
  export default App;