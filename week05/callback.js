setTimeout(() => {
    console.log("Hello")
}, 100)



//const names = ['sweet', 'sally', 'Peter', 'smart']

//names.forEach((name)=> 
    //console.log(name))

//const myforEach = (arr, cb) => {
    //for(let i = 0; i < arr.length; i++) {
       // const element = arr[i];
   // cb(element)
//}
//}

//myforEach(names,| (name) => {
   // console.log(name); 
//})

const myforEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element);
    }
}

const names  = ["Alice", "SANDRA","Bob", "Charlie"]; // Example array

myforEach(names, (name) => {
    console.log(name);
});

const loadPokemon = (id, cb) => {
    fetch(`https:pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(50, (pokemon) => {
    console.log(pokemon);
})
//window.alert(window.location);
//alert(location)
const myObject = {
    name: "Dave",
    logname: function () {
        console.log(this.name);

    }
};
const myArray = ["eat","sleep","code"];
