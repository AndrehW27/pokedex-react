// import { useState } from 'react';
import '../styles/pokemom.css';

export default function Pokedex({
    id, cor, img, efeito, gif, nome, tipo1, cortipo1, cortipo2, peso, altura, tipo2, hp, atk, def, spd }) {


    const VoltarParaPokedex = () => {
       
        document.getElementById("pokomomId").classList.remove("mostrarPoke");
    }

    return (
        <div id="pokomomId" className="containerPokemom" style={{ background: cor }}>

            <div className="voltarNum">
                <img className="voltar" src="voltar.png" alt="voltar" onClick={VoltarParaPokedex} />
                <h3 className="num">{id}</h3>
            </div>

            <img className="sprite" src={img} alt="Bulbassauro" />
            <img className="efeitos" src={efeito} alt="" />
            {/* <div className="sombra"></div> */}


            <h1 className="nome">{nome}
                {gif !== null ?
                     <img className="gif" src={gif} alt="" />
                    :
                   <p></p>
                }
            </h1>

            <div className="infos">
                <div className="types">
                    <p className="type1" style={{ background: cortipo1 }}>{tipo1}</p>

                    <p id="type2Id" className="type2" style={{ background: cortipo2 }}>{tipo2}</p>

                </div>
                <div className="pesoAltura">
                    <div className="peso">
                        <h3>{peso} Kg</h3>
                        {/* <p>peso</p> */}
                    </div>
                    <div className="altura">
                        <h3>{altura} m</h3>
                        {/* <p>altura</p> */}
                    </div>
                </div>
                <div className="stats">
                    <div className="hpBox">
                        <div className="hp">HP</div>
                        <div className="hpValue">{hp}</div>
                        <div className="hpBar">
                            <div className="hpBarInside" style={{ background: cortipo1, width: hp }}></div>
                        </div>
                    </div>

                    <div className="atkBox">
                        <div className="atk">ATK</div>
                        <div className="atkValue">{atk}</div>
                        <div className="atkBar">
                            <div className="atkBarInside" style={{ background: cortipo1, width: atk }}></div>
                        </div>
                    </div>

                    <div className="defBox">
                        <div className="def">DEF</div>
                        <div className="defValue">{def}</div>
                        <div className="defBar">
                            <div className="defBarInside" style={{ background: cortipo1, width: def }}></div>
                        </div>
                    </div>

                    <div className="spdBox">
                        <div className="spd">SPD</div>
                        <div className="spdValue">{spd}</div>
                        <div className="spdBar">
                            <div className="spdBarInside" style={{ background: cortipo1, width: spd }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}