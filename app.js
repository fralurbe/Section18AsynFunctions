async function getPlanets() {
    const res = await axios.get('https://swapi.dev/api/planets/');
    console.log(res.data)
}



// async function greet() {
//     return 'Hello!!';
// }

// greet().then( (val) =>{ console.log('Promise resolved with', val )});

// //Version usando async
// async function add (x,y) {
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         throw('¡ERROR! not a number');
//     }
//     return x + y;
// }

// //Version usando promesas estadard
// function add(x,y) {
//     return new Promise((resolve, reject) =>{        
//         if(typeof x !== 'number' || typeof y !== 'number') reject('¡ERROR! not a number');
//         else resolve(x+y);
//     })
// }



// const fetchMyNextPlanets = (url = 'https://swapi.dev/api/planets/') => axios.get(url);

// const printMyPlanets = ({data}) => {    
//     console.log(data);    
//     for (myPlanetName of data.results)
//         console.log(myPlanetName.name);    
//     return Promise.resolve(data.next);
// };

// fetchMyNextPlanets()
// .then(printMyPlanets);

 