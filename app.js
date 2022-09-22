changeBodyColor = (color) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        document.body.style.backgroundColor = color;
        resolve();
    }, 1000)
    })
}

async function lightShow(){
    const q = changeBodyColor('red');
    const w = changeBodyColor('blue');
    const e = changeBodyColor('yellow');
    await q;
    await w;
    await e;
}


//esto funciona de manera secuencial, hasta que no termina una llamada no se hace la siguiente 
// async function get3PkemonSecuencial() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');    
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');    
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke2.data.name);
//     console.log(poke1.data.name);
//     console.log(poke3.data.name);
// }
// get3PkemonSecuencial();

//esto funciona de manera pararela
// async function get3PkemonParalelo() {
//     const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/1'); 
//     const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');    
//     const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/3'); 

//     const poke1 = await promise1;
//     const poke2 = await promise2;
//     const poke3 = await promise3;

//     console.log(poke1.data.name);
//     console.log(poke2.data.name);
//     console.log(poke3.data.name);
// }
// get3PkemonParalelo();


// const moveX = (element, amount, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const bodyBoundary = document.body.clientWidth;
// 			const elRight = element.getBoundingClientRect().right;
// 			const currLeft = element.getBoundingClientRect().left;
// 			if (elRight + amount > bodyBoundary) {
// 				reject({ bodyBoundary, elRight, amount });
// 			}
// 			else {
// 				element.style.transform = `translateX(${currLeft + amount}px)`;
// 				resolve();
// 			}
// 		}, delay);
// 	});
// };

// const btn = document.querySelector('button');
// async function animateRight(el){
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
//     await moveX(btn, 100, 500);
// }
// animateRight(btn).catch(()=>{});


// async function getPlanets() {
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data)
// }

// async function getPlanets() {
//     try {
//         const res = await axios.get('https://swapi.dev/api/planets/1111');
//         console.log(res.data)
//     }
//     catch(e){
//         console.log('catch:', e )
//     }
// }



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

 