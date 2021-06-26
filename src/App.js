import './App.css';
import Pokemom from './components/Pokemom';
// import PokeAPI from './components/PokeAPI';
import { useState, useEffect } from 'react';
import Pokedex from './components/Pokedex';

export default function App() {

  const [hidePokedex, setHidePokedex] = useState(false)
  const [next, setNext] = useState("")

  //CAIXAS DE POKE NA POKEDEX
  const [box1, setBox1] = useState([])
  const [box2, setBox2] = useState([])
  const [box3, setBox3] = useState([])
  const [box4, setBox4] = useState([])
  const [box5, setBox5] = useState([])
  const [box6, setBox6] = useState([])
  const [box7, setBox7] = useState([])
  const [box8, setBox8] = useState([])
  const [box9, setBox9] = useState([])
  const [box10, setBox10] = useState([])
  const [box11, setBox11] = useState([])
  const [box12, setBox12] = useState([])
  const [box13, setBox13] = useState([])
  const [box14, setBox14] = useState([])
  const [box15, setBox15] = useState([])
  const [box16, setBox16] = useState([])
  const [box17, setBox17] = useState([])
  const [box18, setBox18] = useState([])
  const [box19, setBox19] = useState([])
  const [box20, setBox20] = useState([])

  // DADOS DO POKEMOM
  const [pokeData, setPokeData] = useState("")
  const [id, setId] = useState("#001")
  const [imagem, setImagem] = useState("")
  const [efeito, setEfeito] = useState("")
  const [nome, setNome] = useState("")
  const [gif, setGif] = useState("")
  const [tipo1, setTipo1] = useState("")
  const [corTipo1, setCorTipo1] = useState("")
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [tipo2, setTipo2] = useState("")
  const [cor, setCor] = useState("")
  const [hp, setHp] = useState("")
  const [atk, setAtk] = useState("")
  const [def, setDef] = useState("")
  const [spd, setSpd] = useState("")

  // PEGANDO TODOS OS DADOS DA API


  const basePokemonURL = 'https://pokeapi.co/api/v2/pokemon/';

  const getPokemonData = async (endpoint) => {
    let res = await fetch(`${basePokemonURL}${endpoint}`);
    let data = await res.json()
    return data;
  }

  const gettingPokemom = async (id) => {

    //POKEMOM DATA
    let charData = await getPokemonData(id);
    setPokeData(charData);
    let idvar = charData.id.toString();
    if (idvar.length === 1) {
      let idvar = "#00" + charData.id.toString();
      setId(idvar);
    }
    else if (idvar.length === 2) {
      let idvar = "#0" + charData.id.toString();
      setId(idvar);
    }
    else if (idvar.length === 3) {
      let idvar = "#" + charData.id.toString();
      setId(idvar);
    }

    let imgVar = await charData.sprites.other.["official-artwork"].front_default;
    setImagem(imgVar);
    let nomeVar = await charData.name;
    let nomeUpper = nomeVar.charAt(0).toUpperCase() + nomeVar.slice(1);
    setNome(nomeUpper);
    let gifVar = await charData.sprites.versions.["generation-v"].["black-white"].animated.front_default;
    setGif(gifVar);
    let tipo1var = await charData.types[0].type.name;
    setTipo1(tipo1var);

    //PESO
    let pesovar = await charData.weight;
    let kilosvar = pesovar.toString();
    if (kilosvar.length === 2) {
      let kilosvar2 = kilosvar.charAt(0) + "." + kilosvar.charAt(1)
      setPeso(kilosvar2);
    }
    else if (kilosvar.length === 3) {
      let kilosvar2 = kilosvar.charAt(0) + kilosvar.charAt(1) + "." + kilosvar.charAt(2)
      setPeso(kilosvar2);
    }
    else if (kilosvar.length === 4) {
      let kilosvar2 = kilosvar.charAt(0) + kilosvar.charAt(1) + kilosvar.charAt(2) + "." + kilosvar.charAt(2)
      setPeso(kilosvar2);
    }

    //ALTURA
    let alturavar = await charData.height;
    let metrosvar = alturavar.toString();
    if (metrosvar.length === 1) {
      let metrosvar2 = "0." + metrosvar.charAt(0)
      setAltura(metrosvar2);
    }
    else {
      let metrosvar2 = metrosvar.charAt(0) + "." + metrosvar.charAt(1)
      setAltura(metrosvar2);
    }


    let hpvar = charData.stats[0].base_stat;
    setHp(hpvar);
    let atkvar = charData.stats[1].base_stat;
    setAtk(atkvar);
    let defVar = charData.stats[2].base_stat;
    setDef(defVar);
    let spdvar = charData.stats[3].base_stat;
    setSpd(spdvar);



    if (tipo1var === "grass") {
      setCor("linear-gradient(to top, rgb(28, 105, 30),  rgb(57, 255, 67)");
      setCorTipo1("linear-gradient(to top, rgb(28, 105, 30),  rgb(57, 255, 67)");
      setEfeito("leaves.png");
    }
    else if (tipo1var === "fire") {
      setCor("linear-gradient(to top, rgb(209, 77, 0),  rgb(255, 163, 57))");
      setCorTipo1("linear-gradient(to top, rgb(209, 77, 0),  rgb(255, 163, 57))");
      setEfeito("flames.png");

    }
    else if (tipo1var === "water") {
      setCor("linear-gradient(to top, rgba(34, 69, 209, 1),  rgba(34, 186, 209, 1)");
      setCorTipo1("linear-gradient(to top, rgba(34, 69, 209, 1),  rgba(34, 186, 209, 1)");
      setEfeito("bubbles.png");

    }

    if (charData.types.length > 1) {
      let tipo2var = await charData.types[1].type.name;
      setTipo2(tipo2var);
    }
    else if(charData.types.length === 1){
     document.getElementById("type2Id").classList.add("hide");
    }
  }

  const ChosenPoke = () => {
    let valorDigitado = document.getElementById("buscaBotaoId").value;
    console.log("valorDigitado: " + valorDigitado);
    gettingPokemom(valorDigitado);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }

  const Box1Chosed = () => {
    gettingPokemom(1);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box2Chosed = () => {
    gettingPokemom(2);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box3Chosed = () => {
    gettingPokemom(3);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box4Chosed = () => {
    gettingPokemom(4);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box5Chosed = () => {
    gettingPokemom(5);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box6Chosed = () => {
    gettingPokemom(6);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box7Chosed = () => {
    gettingPokemom(7);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box8Chosed = () => {
    gettingPokemom(8);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box9Chosed = () => {
    gettingPokemom(9);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box10Chosed = () => {
    gettingPokemom(10);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box11Chosed = () => {
    gettingPokemom(11);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box12Chosed = () => {
    gettingPokemom(12);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box13Chosed = () => {
    gettingPokemom(13);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box14Chosed = () => {
    gettingPokemom(14);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box15Chosed = () => {
    gettingPokemom(15);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box16Chosed = () => {
    gettingPokemom(16);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box17Chosed = () => {
    gettingPokemom(17);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box18Chosed = () => {
    gettingPokemom(18);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box19Chosed = () => {
    gettingPokemom(19);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box20Chosed = () => {
    gettingPokemom(20);    
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }

  //PEGANDO 20 POkES
  useEffect(() => {
    const getting20Pokemom = async () => {
      //POKEMOM DATA
      let array20pokes = await getPokemonData("");
      let results = array20pokes.results;
      let box1var = results[0].name
      setBox1(box1var);
      let box2var = results[1].name
      setBox2(box2var);
      let box3var = results[2].name
      setBox3(box3var);
      let box4var = results[3].name
      setBox4(box4var);
      let box5var = results[4].name
      setBox5(box5var);
      let box6var = results[5].name
      setBox6(box6var);
      let box7var = results[6].name
      setBox7(box7var);
      let box8var = results[7].name
      setBox8(box8var);
      let box9var = results[8].name
      setBox9(box9var);
      let box10var = results[9].name
      setBox10(box10var);
      let box11var = results[10].name
      setBox11(box11var);
      let box12var = results[11].name
      setBox12(box12var);
      let box13var = results[12].name
      setBox13(box13var);
      let box14var = results[13].name
      setBox14(box14var);
      let box15var = results[14].name
      setBox15(box15var);
      let box16var = results[15].name
      setBox16(box16var);
      let box17var = results[16].name
      setBox17(box17var);
      let box18var = results[17].name
      setBox18(box18var);
      let box19var = results[18].name
      setBox19(box19var);
      let box20var = results[19].name
      setBox20(box20var);

      console.log(results);

      setNext(array20pokes.next);
    }
    getting20Pokemom();
  }, [])

  const Next = () => {
    const getPokemonDataNext = async () => {
      let res = await fetch(next);
      // let data = await res.json()


      let resultsnext = res.results;
      let box1var = resultsnext[0].name
      setBox1(box1var);
      let box2var = resultsnext[1].name
      setBox2(box2var);
      let box3var = resultsnext[2].name
      setBox3(box3var);
      let box4var = resultsnext[3].name
      setBox4(box4var);
      let box5var = resultsnext[4].name
      setBox5(box5var);
      let box6var = resultsnext[5].name
      setBox6(box6var);
      let box7var = resultsnext[6].name
      setBox7(box7var);
      let box8var = resultsnext[7].name
      setBox8(box8var);
      let box9var = resultsnext[8].name
      setBox9(box9var);
      let box10var = resultsnext[9].name
      setBox10(box10var);
      let box11var = resultsnext[10].name
      setBox11(box11var);
      let box12var = resultsnext[11].name
      setBox12(box12var);
      let box13var = resultsnext[12].name
      setBox13(box13var);
      let box14var = resultsnext[13].name
      setBox14(box14var);
      let box15var = resultsnext[14].name
      setBox15(box15var);
      let box16var = resultsnext[15].name
      setBox16(box16var);
      let box17var = resultsnext[16].name
      setBox17(box17var);
      let box18var = resultsnext[17].name
      setBox18(box18var);
      let box19var = resultsnext[18].name
      setBox19(box19var);
      let box20var = resultsnext[19].name
      setBox20(box20var);
     

      setNext(res.next);
      

    }
    getPokemonDataNext();


  }



  return (
    <div className="containerApp">

      {/* <Pokedex ChosenPoke={ChosenPoke} /> */}

      <div className="containerPokedex">
        <div className="buscarContainer">
          <input id="buscaBotaoId" className="buscaInput"></input>
          <button type="type" className="buscaButton" onClick={ChosenPoke}>buscar</button>
        </div>
        <div className="grid-container">
          <button type="button" className="grid-item" onClick={Box1Chosed}>
            <p>{box1}</p>
          </button> 
          <button type="button" className="grid-item" onClick={Box2Chosed}>
            <p>{box2}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box3Chosed}>
            <p>{box3}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box4Chosed}>
            <p>{box4}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box5Chosed}>
            <p>{box5}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box6Chosed}>
            <p>{box6}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box7Chosed}>
            <p>{box7}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box8Chosed}>
            <p>{box8}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box9Chosed}>
            <p>{box9}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box10Chosed}>
            <p>{box10}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box11Chosed}>
            <p>{box11}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box12Chosed}>
            <p>{box12}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box13Chosed}>
            <p>{box13}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box14Chosed}>
            <p>{box14}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box15Chosed}>
            <p>{box15}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box16Chosed}>
            <p>{box16}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box17Chosed}>
            <p>{box17}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box18Chosed}>
            <p>{box18}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box19Chosed}>
            <p>{box19}</p>
          </button>
          <button type="button" className="grid-item" onClick={Box20Chosed}>
            <p>{box20}</p>
          </button>

        </div>

        <div className="nextContainer">
          <button type="type" className="prevButton" >Prev</button>
          <button type="type" className="NextButton" onClick={Next}>Next</button>
        </div>
      </div>

      <Pokemom
        hide={setHidePokedex}
        id={id}
        cor={cor}
        efeito={efeito}
        img={imagem}
        nome={nome}
        gif={gif}
        tipo1={tipo1}
        cortipo1={corTipo1}
        peso={peso}
        altura={altura}
        tipo2={tipo2}
        hp={hp}
        atk={atk}
        def={def}
        spd={spd}
      />
    </div>
  );
}

