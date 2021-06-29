import './App.css';
import Pokemom from './components/Pokemom';
// import PokeAPI from './components/PokeAPI';
import { useState, useEffect } from 'react';
import Pokedex from './components/Pokedex';

export default function App() {

  const [hidePokedex, setHidePokedex] = useState(false)
  const [next, setNext] = useState("")
  const [prev, setPrev] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [loading, setLoading] = useState(true)
  const [porcentagem, setPorcentagem] = useState(0)

  //CAIXAS DE POKE NA POKEDEX
  const [idbox1, setIdBox1] = useState("")
  const [idbox2, setIdBox2] = useState("")
  const [idbox3, setIdBox3] = useState("")
  const [idbox4, setIdBox4] = useState("")
  const [idbox5, setIdBox5] = useState("")
  const [idbox6, setIdBox6] = useState("")
  const [idbox7, setIdBox7] = useState("")
  const [idbox8, setIdBox8] = useState("")
  const [idbox9, setIdBox9] = useState("")
  const [idbox10, setIdBox10] = useState("")
  const [idbox11, setIdBox11] = useState("")
  const [idbox12, setIdBox12] = useState("")
  const [idbox13, setIdBox13] = useState("")
  const [idbox14, setIdBox14] = useState("")
  const [idbox15, setIdBox15] = useState("")
  const [idbox16, setIdBox16] = useState("")
  const [idbox17, setIdBox17] = useState("")
  const [idbox18, setIdBox18] = useState("")
  const [idbox19, setIdBox19] = useState("")
  const [idbox20, setIdBox20] = useState("")

  const [namebox1, setNameBox1] = useState("")
  const [imgbox1, setImgBox1] = useState("")
  const [namebox2, setNameBox2] = useState("")
  const [imgbox2, setImgBox2] = useState("")
  const [namebox3, setNameBox3] = useState("")
  const [imgbox3, setImgBox3] = useState("")
  const [namebox4, setNameBox4] = useState("")
  const [imgbox4, setImgBox4] = useState("")
  const [namebox5, setNameBox5] = useState("")
  const [imgbox5, setImgBox5] = useState("")
  const [namebox6, setNameBox6] = useState("")
  const [imgbox6, setImgBox6] = useState("")
  const [namebox7, setNameBox7] = useState("")
  const [imgbox7, setImgBox7] = useState("")
  const [namebox8, setNameBox8] = useState("")
  const [imgbox8, setImgBox8] = useState("")
  const [namebox9, setNameBox9] = useState("")
  const [imgbox9, setImgBox9] = useState("")
  const [namebox10, setNameBox10] = useState("")
  const [imgbox10, setImgBox10] = useState("")
  const [namebox11, setNameBox11] = useState("")
  const [imgbox11, setImgBox11] = useState("")
  const [namebox12, setNameBox12] = useState("")
  const [imgbox12, setImgBox12] = useState("")
  const [namebox13, setNameBox13] = useState("")
  const [imgbox13, setImgBox13] = useState("")
  const [namebox14, setNameBox14] = useState("")
  const [imgbox14, setImgBox14] = useState("")
  const [namebox15, setNameBox15] = useState("")
  const [imgbox15, setImgBox15] = useState("")
  const [namebox16, setNameBox16] = useState("")
  const [imgbox16, setImgBox16] = useState("")
  const [namebox17, setNameBox17] = useState("")
  const [imgbox17, setImgBox17] = useState("")
  const [namebox18, setNameBox18] = useState("")
  const [imgbox18, setImgBox18] = useState("")
  const [namebox19, setNameBox19] = useState("")
  const [imgbox19, setImgBox19] = useState("")
  const [namebox20, setNameBox20] = useState("")
  const [imgbox20, setImgBox20] = useState("")


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

    // let idvar = charData.id
    // setId(idvar);

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
      setCor("linear-gradient(to top, rgb(209, 77, 0),  rgba(255, 178, 56, 1))");
      setCorTipo1("linear-gradient(to top, rgb(209, 77, 0),  rgba(255, 178, 56, 1))");
      setEfeito("flames.png");
    }
    else if (tipo1var === "water") {
      setCor("linear-gradient(to top, rgba(34, 69, 209, 1),  rgba(33, 160, 209, 1)");
      setCorTipo1("linear-gradient(to top, rgba(34, 69, 209, 1),  rgba(33, 160, 209, 1)");
      setEfeito("bubbles.png");
    }
    else if (tipo1var === "normal") {
      setCor("linear-gradient(to top, rgba(255, 194, 52, 1),  rgba(255, 230, 94, 1)");
      setCorTipo1("linear-gradient(to top, rgba(255, 194, 52, 1),  rgba(255, 230, 94, 1)");
      setEfeito("");
    }
    else if (tipo1var === "bug") {
      setCor("linear-gradient(to top, rgba(106, 144, 0, 1),  rgba(160, 217, 0, 1)");
      setCorTipo1("linear-gradient(to top, rgba(106, 144, 0, 1),  rgba(160, 217, 0, 1)");
      setEfeito("bug.png");
    }
    else if (tipo1var === "electric") {
      setCor("linear-gradient(to top, rgba(255, 179, 0, 1),  rgba(255, 236, 0, 1))");
      setCorTipo1("linear-gradient(to top, rgba(255, 179, 0, 1),  rgba(255, 236, 0, 1))");
      setEfeito("thunder2.png");
    }

    //REFINAMENTO TIPO 2
    if (charData.types.length > 1) {
      let tipo2var = await charData.types[1].type.name;
      document.getElementById("type2Id").classList.remove("hide");

      setTipo2(tipo2var);
    }
    else {
      document.getElementById("type2Id").classList.add("hide");
    }

    // console.log(charData.types.length);

  }

  const ChosenPoke = () => {
    let valorDigitado = document.getElementById("buscaBotaoId").value;
    console.log("valorDigitado: " + valorDigitado);
    gettingPokemom(valorDigitado);
    document.getElementById("pokomomId").classList.add("mostrarPoke");
  }

  const Box1Chosed = () => {
    gettingPokemom(idbox1);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box2Chosed = () => {
    gettingPokemom(idbox2);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box3Chosed = () => {
    gettingPokemom(idbox3);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box4Chosed = () => {
    gettingPokemom(idbox4);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box5Chosed = () => {
    gettingPokemom(idbox5);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box6Chosed = () => {
    gettingPokemom(idbox6);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box7Chosed = () => {
    gettingPokemom(idbox7);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box8Chosed = () => {
    gettingPokemom(idbox8);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box9Chosed = () => {
    gettingPokemom(idbox9);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box10Chosed = () => {
    gettingPokemom(idbox10);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box11Chosed = () => {
    gettingPokemom(idbox11);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box12Chosed = () => {
    gettingPokemom(idbox12);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box13Chosed = () => {
    gettingPokemom(idbox13);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box14Chosed = () => {
    gettingPokemom(idbox14);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box15Chosed = () => {
    gettingPokemom(idbox15);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box16Chosed = () => {
    gettingPokemom(idbox16);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box17Chosed = () => {
    gettingPokemom(idbox17);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box18Chosed = () => {
    gettingPokemom(idbox18);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box19Chosed = () => {
    gettingPokemom(idbox19);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }
  const Box20Chosed = () => {
    gettingPokemom(idbox20);
    document.getElementById("pokomomId").classList.toggle("mostrarPoke");
  }

  //PEGANDO 20 POkES
  useEffect(() => {
    const getting20Pokemom = async () => {
      //POKEMOM DATA
      let array20pokes = await getPokemonData("");
      let next = array20pokes.next
      setNext(next);
      let results = array20pokes.results;

      let pokemomURL = [];
      for (let i = 0; i < results.length; i++) {
        pokemomURL[i] = results[i].url;

        const getPokeBox = async () => {
          let res = await fetch(pokemomURL[i]);
          let data = await res.json()
          let nome = data.name;
          let nomeUpper = nome.charAt(0).toUpperCase() + nome.slice(1);
          // let img = data.sprites.other.["official-artwork"].front_default;
          let id = data.id;
          let img = data.sprites.versions.["generation-v"].["black-white"].animated.front_default;

          // console.log("URL " + [i] + " :" + pokemomURL[i]);
          // console.log("Nome " + [i] + " :" + nome);
          // console.log("Img " + [i] + " :" + img);

          if (i === 0) {
            setNameBox1(nomeUpper);
            setImgBox1(img);
            setIdBox1(id);
          } else if (i === 1) {
            setNameBox2(nomeUpper);
            setImgBox2(img);
            setIdBox2(id);
          } else if (i === 2) {
            setNameBox3(nomeUpper);
            setImgBox3(img);
            setIdBox3(id);
          } else if (i === 3) {
            setNameBox4(nomeUpper);
            setImgBox4(img);
            setIdBox4(id);
          } else if (i === 4) {
            setNameBox5(nomeUpper);
            setImgBox5(img);
            setIdBox5(id);
          } else if (i === 5) {
            setNameBox6(nomeUpper);
            setImgBox6(img);
            setIdBox6(id);
          } else if (i === 6) {
            setNameBox7(nomeUpper);
            setImgBox7(img);
            setIdBox7(id);
          } else if (i === 7) {
            setNameBox8(nomeUpper);
            setImgBox8(img);
            setIdBox8(id);
          } else if (i === 8) {
            setNameBox9(nomeUpper);
            setImgBox9(img);
            setIdBox9(id);
          } else if (i === 9) {
            setNameBox10(nomeUpper);
            setImgBox10(img);
            setIdBox10(id);
          } else if (i === 10) {
            setNameBox11(nomeUpper);
            setImgBox11(img);
            setIdBox12(id);
          } else if (i === 11) {
            setNameBox12(nomeUpper);
            setImgBox12(img);
            setIdBox12(id);
          } else if (i === 12) {
            setNameBox13(nomeUpper);
            setImgBox13(img);
            setIdBox13(id);
          } else if (i === 13) {
            setNameBox14(nomeUpper);
            setImgBox14(img);
            setIdBox14(id);
          } else if (i === 14) {
            setNameBox15(nomeUpper);
            setImgBox15(img);
            setIdBox15(id);
          } else if (i === 15) {
            setNameBox16(nomeUpper);
            setImgBox16(img);
            setIdBox16(id);
          } else if (i === 16) {
            setNameBox17(nomeUpper);
            setImgBox17(img);
            setIdBox17(id);
          } else if (i === 17) {
            setNameBox18(nomeUpper);
            setImgBox18(img);
            setIdBox18(id);
          } else if (i === 18) {
            setNameBox19(nomeUpper);
            setImgBox19(img);
            setIdBox19(id);
          } else if (i === 19) {
            setNameBox20(nomeUpper);
            setImgBox20(img);
            setIdBox20(id);
          }
        }

        getPokeBox();
      }

    }

    getting20Pokemom();




    setTimeout(() => {
      const FinishLoading = () => {
        setLoading(false);
      }
      FinishLoading();
    }, 3000);




    // const increasePerc1 = () => {
    //   setPorcentagem(porcentagem + 1);
    // }
    // increasePerc1();


  }, [])



  const Next = async () => {
    const getPokemonDataNext = async () => {
      let res = await fetch(next);
      let data = await res.json()
      return data;
    }

    let next20var = await getPokemonDataNext();

    let results = next20var.results;

    let pokemomURL = [];
    for (let i = 0; i < results.length; i++) {
      pokemomURL[i] = results[i].url;

      const getPokeBox = async () => {
        let res = await fetch(pokemomURL[i]);
        let data = await res.json()
        let nome = data.name;
        let nomeUpper = nome.charAt(0).toUpperCase() + nome.slice(1);
        // let img = data.sprites.other.["official-artwork"].front_default;
        let id = data.id;
        let img = data.sprites.versions.["generation-v"].["black-white"].animated.front_default;

        // console.log("URL " + [i] + " :" + pokemomURL[i]);
        // console.log("Nome " + [i] + " :" + nome);
        // console.log("Img " + [i] + " :" + img);

        if (i === 0) {
          setNameBox1(nomeUpper);
          setImgBox1(img);
          setIdBox1(id);
        } else if (i === 1) {
          setNameBox2(nomeUpper);
          setImgBox2(img);
          setIdBox2(id);
        } else if (i === 2) {
          setNameBox3(nomeUpper);
          setImgBox3(img);
          setIdBox3(id);
        } else if (i === 3) {
          setNameBox4(nomeUpper);
          setImgBox4(img);
          setIdBox4(id);
        } else if (i === 4) {
          setNameBox5(nomeUpper);
          setImgBox5(img);
          setIdBox5(id);
        } else if (i === 5) {
          setNameBox6(nomeUpper);
          setImgBox6(img);
          setIdBox6(id);
        } else if (i === 6) {
          setNameBox7(nomeUpper);
          setImgBox7(img);
          setIdBox7(id);
        } else if (i === 7) {
          setNameBox8(nomeUpper);
          setImgBox8(img);
          setIdBox8(id);
        } else if (i === 8) {
          setNameBox9(nomeUpper);
          setImgBox9(img);
          setIdBox9(id);
        } else if (i === 9) {
          setNameBox10(nomeUpper);
          setImgBox10(img);
          setIdBox10(id);
        } else if (i === 10) {
          setNameBox11(nomeUpper);
          setImgBox11(img);
          setIdBox12(id);
        } else if (i === 11) {
          setNameBox12(nomeUpper);
          setImgBox12(img);
          setIdBox12(id);
        } else if (i === 12) {
          setNameBox13(nomeUpper);
          setImgBox13(img);
          setIdBox13(id);
        } else if (i === 13) {
          setNameBox14(nomeUpper);
          setImgBox14(img);
          setIdBox14(id);
        } else if (i === 14) {
          setNameBox15(nomeUpper);
          setImgBox15(img);
          setIdBox15(id);
        } else if (i === 15) {
          setNameBox16(nomeUpper);
          setImgBox16(img);
          setIdBox16(id);
        } else if (i === 16) {
          setNameBox17(nomeUpper);
          setImgBox17(img);
          setIdBox17(id);
        } else if (i === 17) {
          setNameBox18(nomeUpper);
          setImgBox18(img);
          setIdBox18(id);
        } else if (i === 18) {
          setNameBox19(nomeUpper);
          setImgBox19(img);
          setIdBox19(id);
        } else if (i === 19) {
          setNameBox20(nomeUpper);
          setImgBox20(img);
          setIdBox20(id);
        }
      }

      getPokeBox();
    }

    // console.log(next20var);    
    setNext(next20var.next);
    setPrev(next20var.previous);
    // console.log(next);

  }



  // useEffect(() => {
  //   setTimeout(() => {
  //     let count = 100
  //     for (let i = 0; i <= count; i++) {
  //       let porcvar = i;
  //       setPorcentagem(porcvar);
  //       console.log(porcentagem);
  //       console.log(porcvar);
  //     }
  //   }, 5000);

  // }, [porcentagem])

  const Prev = async () => {
    const getPokemonDataPrev = async () => {
      let res = await fetch(prev);
      let data = await res.json()
      return data;
    }

    let prev20var = await getPokemonDataPrev();

    let results = prev20var.results;

    let pokemomURL = [];
    for (let i = 0; i < results.length; i++) {
      pokemomURL[i] = results[i].url;

      const getPokeBox = async () => {
        let res = await fetch(pokemomURL[i]);
        let data = await res.json()
        let nome = data.name;
        let nomeUpper = nome.charAt(0).toUpperCase() + nome.slice(1);
        // let img = data.sprites.other.["official-artwork"].front_default;
        let id = data.id;
        let img = data.sprites.versions.["generation-v"].["black-white"].animated.front_default;

        // console.log("URL " + [i] + " :" + pokemomURL[i]);
        // console.log("Nome " + [i] + " :" + nome);
        // console.log("Img " + [i] + " :" + img);

        if (i === 0) {
          setNameBox1(nomeUpper);
          setImgBox1(img);
          setIdBox1(id);
        } else if (i === 1) {
          setNameBox2(nomeUpper);
          setImgBox2(img);
          setIdBox2(id);
        } else if (i === 2) {
          setNameBox3(nomeUpper);
          setImgBox3(img);
          setIdBox3(id);
        } else if (i === 3) {
          setNameBox4(nomeUpper);
          setImgBox4(img);
          setIdBox4(id);
        } else if (i === 4) {
          setNameBox5(nomeUpper);
          setImgBox5(img);
          setIdBox5(id);
        } else if (i === 5) {
          setNameBox6(nomeUpper);
          setImgBox6(img);
          setIdBox6(id);
        } else if (i === 6) {
          setNameBox7(nomeUpper);
          setImgBox7(img);
          setIdBox7(id);
        } else if (i === 7) {
          setNameBox8(nomeUpper);
          setImgBox8(img);
          setIdBox8(id);
        } else if (i === 8) {
          setNameBox9(nomeUpper);
          setImgBox9(img);
          setIdBox9(id);
        } else if (i === 9) {
          setNameBox10(nomeUpper);
          setImgBox10(img);
          setIdBox10(id);
        } else if (i === 10) {
          setNameBox11(nomeUpper);
          setImgBox11(img);
          setIdBox12(id);
        } else if (i === 11) {
          setNameBox12(nomeUpper);
          setImgBox12(img);
          setIdBox12(id);
        } else if (i === 12) {
          setNameBox13(nomeUpper);
          setImgBox13(img);
          setIdBox13(id);
        } else if (i === 13) {
          setNameBox14(nomeUpper);
          setImgBox14(img);
          setIdBox14(id);
        } else if (i === 14) {
          setNameBox15(nomeUpper);
          setImgBox15(img);
          setIdBox15(id);
        } else if (i === 15) {
          setNameBox16(nomeUpper);
          setImgBox16(img);
          setIdBox16(id);
        } else if (i === 16) {
          setNameBox17(nomeUpper);
          setImgBox17(img);
          setIdBox17(id);
        } else if (i === 17) {
          setNameBox18(nomeUpper);
          setImgBox18(img);
          setIdBox18(id);
        } else if (i === 18) {
          setNameBox19(nomeUpper);
          setImgBox19(img);
          setIdBox19(id);
        } else if (i === 19) {
          setNameBox20(nomeUpper);
          setImgBox20(img);
          setIdBox20(id);
        }
      }

      getPokeBox();
    }

    // console.log(next20var); 
    setNext(prev20var.next);
    setPrev(prev20var.previous);
    // console.log(next);

  }

  const AddAnimation = () => {
    document.getElementById("top").classList.toggle("pokedexAnimationT");
    document.getElementById("right").classList.toggle("pokedexAnimationR");
  }

  return (
    <div className="containerApp">

      {loading ?
        <div className="loading">
          <img src="Pokédex_logo.png" className="pokeLogo"></img>
          <img src="pokeball.png" className="pokebola"></img>
          <div className="porcentagem" >Loading...</div>
        </div>
        :
        <p></p>
      }

      <div id="top" className="pokedexAnimationTop">
        <div className="bolona">
          <div className="bolazul"></div>
        </div>
        <div className="tresbolas">
          <div className="bola1"></div>
          <div className="bola2"></div>
          <div className="bola3"></div>
        </div>
      </div>
      <div id="right" className="pokedexAnimationRight">
        <img src="play.png" className="open" onClick={AddAnimation}></img>
      </div>



      <div className="containerPokedex">
        <div className="buscarContainer">
          <input id="buscaBotaoId" className="buscaInput" placeholder="Name or ID number..."></input>
          <img src="magnifier.png" className="buscaButton" onClick={ChosenPoke}></img>
        </div>

        <div className="grid-container">
          <div className="grid-item" onClick={Box1Chosed}>
            <p>{namebox1}</p>
            <img className="miniImg" src={imgbox1} alt="" />
          </div>
          <div className="grid-item" onClick={Box2Chosed}>
            <p>{namebox2}</p>
            <img className="miniImg" src={imgbox2} alt="" />
          </div>
          <div className="grid-item" onClick={Box3Chosed}>
            <p>{namebox3}</p>
            <img className="miniImg" src={imgbox3} alt="" />
          </div>
          <div className="grid-item" onClick={Box4Chosed}>
            <p>{namebox4}</p>
            <img className="miniImg" src={imgbox4} alt="" />
          </div>
          <div className="grid-item" onClick={Box5Chosed}>
            <p>{namebox5}</p>
            <img className="miniImg" src={imgbox5} alt="" />
          </div>
          <div className="grid-item" onClick={Box6Chosed}>
            <p>{namebox6}</p>
            <img className="miniImg" src={imgbox6} alt="" />
          </div>
          <div className="grid-item" onClick={Box7Chosed}>
            <p>{namebox7}</p>
            <img className="miniImg" src={imgbox7} alt="" />
          </div>
          <div className="grid-item" onClick={Box8Chosed}>
            <p>{namebox8}</p>
            <img className="miniImg" src={imgbox8} alt="" />
          </div>
          <div className="grid-item" onClick={Box9Chosed}>
            <p>{namebox9}</p>
            <img className="miniImg" src={imgbox9} alt="" />
          </div>
          <div className="grid-item" onClick={Box10Chosed}>
            <p>{namebox10}</p>
            <img className="miniImg" src={imgbox10} alt="" />
          </div>
          <div className="grid-item" onClick={Box11Chosed}>
            <p>{namebox11}</p>
            <img className="miniImg" src={imgbox11} alt="" />
          </div>
          <div className="grid-item" onClick={Box12Chosed}>
            <p>{namebox12}</p>
            <img className="miniImg" src={imgbox12} alt="" />
          </div>
          <div className="grid-item" onClick={Box13Chosed}>
            <p>{namebox13}</p>
            <img className="miniImg" src={imgbox13} alt="" />
          </div>
          <div className="grid-item" onClick={Box14Chosed}>
            <p>{namebox14}</p>
            <img className="miniImg" src={imgbox14} alt="" />
          </div>
          <div className="grid-item" onClick={Box15Chosed}>
            <p>{namebox15}</p>
            <img className="miniImg" src={imgbox15} alt="" />
          </div>
          <div className="grid-item" onClick={Box16Chosed}>
            <p>{namebox16}</p>
            <img className="miniImg" src={imgbox16} alt="" />
          </div>
          <div className="grid-item" onClick={Box17Chosed}>
            <p>{namebox17}</p>
            <img className="miniImg" src={imgbox17} alt="" />
          </div>
          <div className="grid-item" onClick={Box18Chosed}>
            <p>{namebox18}</p>
            <img className="miniImg" src={imgbox18} alt="" />
          </div>
          <div className="grid-item" onClick={Box19Chosed}>
            <p>{namebox19}</p>
            <img className="miniImg" src={imgbox19} alt="" />
          </div>
          <div className="grid-item" onClick={Box20Chosed}>
            <p>{namebox20}</p>
            <img className="miniImg" src={imgbox20} alt="" />
          </div>

        </div>

        <div className="nextContainer">
          <button type="type" className="prevButton" onClick={Prev}>
            <img src="right-arrow2.png" className="prevArrow" onClick={ChosenPoke}></img>
            <p>Prev</p>
          </button>

          <button type="type" className="nextButton" onClick={Next}>
            <p>Next</p>
            <img src="right-arrow.png" className="nextArrow" onClick={ChosenPoke}></img>
          </button>

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

