import React, { CSSProperties, ReactElement } from "react";

import tile101 from "../../img/tile101.png";
import tile102 from "../../img/tile102.png";
import tile103 from "../../img/tile103.png";
import tile104 from "../../img/tile104.png";
import tile105 from "../../img/tile105.png";
import tile106 from "../../img/tile106.png";
import tile107 from "../../img/tile107.png";
import tile108 from "../../img/tile108.png";
import tile109 from "../../img/tile109.png";
import tile110 from "../../img/tile110.png";
import tile111 from "../../img/tile111.png";
import tile112 from "../../img/tile112.png";
import tile113 from "../../img/tile113.png";
import tile114 from "../../img/tile114.png";
import tile115 from "../../img/tile115.png";
import tile116 from "../../img/tile116.png";
import tile117 from "../../img/tile117.png";
import tile118 from "../../img/tile118.png";
import tile119 from "../../img/tile119.png";
import tile120 from "../../img/tile120.png";
import tile121 from "../../img/tile121.png";
import tile122 from "../../img/tile122.png";
import tile123 from "../../img/tile123.png";
import tile124 from "../../img/tile124.png";
import tile125 from "../../img/tile125.png";
import tile126 from "../../img/tile126.png";
import tile127 from "../../img/tile127.png";
import tile128 from "../../img/tile128.png";
import tile129 from "../../img/tile129.png";
import tile130 from "../../img/tile130.png";
import tile131 from "../../img/tile131.png";
import tile132 from "../../img/tile132.png";
import tile133 from "../../img/tile133.png";
import tile134 from "../../img/tile134.png";
import tile135 from "../../img/tile135.png";
import tile136 from "../../img/tile136.png";
import tile137 from "../../img/tile137.png";
import tile138 from "../../img/tile138.png";
import tile139 from "../../img/tile139.png";
import tile140 from "../../img/tile140.png";
import tile141 from "../../img/tile141.png";
import tile142 from "../../img/tile142.png";

const PlayerBoard = ({ state }: any) => {
  const tileWidth: number = 72;
  const tileHeight: number = 88;
  const tileShadowWidth: number = 11;
  const tileShadowHeight: number = 11;

  const xAdjust: number = 10;
  const yAdjust: number = 36;

  //Cada ficha es un elemento react que se pintar?? como un elemento del virtual DOM de este componente React
  const tiles: ReactElement[] = [];

  let xOffset: number = 0;
  let yOffset: number = 0;

  //Recorremos cada una de las capas del tablero. El tablero tiene varios niveles con fichas. La primera dimensi??n hace referencia a cada nivel. La segunda ser??a cada fila de fichas en un determinado nivel, y la tercera una columna de fichas
  for (let l: number = 0; l < state.layout.length; l++) {
    xOffset = xOffset + tileShadowWidth;
    yOffset = yOffset - tileShadowHeight;

    //En layer guardamos el nivel de fichas
    const layer: number[][] = state.layout[l];

    for (let r: number = 0; r < layer.length; r++) {

      //En row guardamos cada fila de fichas
      const row: number[] = layer[r];

      for (let c: number = row.length; c >= 0; c--) {

        //En tileVal guardamos cada columna de fichas. Aqui estamos apuntando ya a una ficha concreta, la del layer, row y columna
        let tileVal: number = row[c];

        //Solo se pintan las fichas que tienen un valor positivo. 0 Es que no hay ficha, y negativo que se ha ocultado
        if (tileVal > 0) {
          const xLoc: number = ((c * tileWidth) - (c * tileShadowWidth)) + xOffset + xAdjust;

          const yLoc: number = ((r * tileHeight) - (r * tileShadowHeight)) + yOffset + yAdjust;

          //Cada ficha ser?? un elemento react. Cada elemento tiene como propiedades la imagen - src -, el estilo - esto tiene que ser un valor de tipo CSSProperties -, la clase, y un event handler que asociamos al manejador incluido en el estado

          //El estilo lleva la posici??n de cada ficha
          const style: CSSProperties = {
            position: "absolute",
            left: `${xLoc}px`,
            top: `${yLoc}px`
          };

          //La clase. Tenemos dos clases, blanco y highlightTile
          let className: string = "";
          if (tileVal > 1000) {
            className = "highlightTile";
            tileVal = tileVal - 1000;
          }

          //En funci??n del valor de cada ficha, pintamos uno u otro elemento. Lo que cambia es la imagen que usamos. Cada elemento generado lo guardamos en el Array tiles
          switch (tileVal) {
            case 101: tiles.push(<img style={style} src={tile101} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 102: tiles.push(<img style={style} src={tile102} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 103: tiles.push(<img style={style} src={tile103} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 104: tiles.push(<img style={style} src={tile104} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 105: tiles.push(<img style={style} src={tile105} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 106: tiles.push(<img style={style} src={tile106} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 107: tiles.push(<img style={style} src={tile107} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 108: tiles.push(<img style={style} src={tile108} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 109: tiles.push(<img style={style} src={tile109} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 110: tiles.push(<img style={style} src={tile110} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 111: tiles.push(<img style={style} src={tile111} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 112: tiles.push(<img style={style} src={tile112} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 113: tiles.push(<img style={style} src={tile113} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 114: tiles.push(<img style={style} src={tile114} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 115: tiles.push(<img style={style} src={tile115} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 116: tiles.push(<img style={style} src={tile116} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 117: tiles.push(<img style={style} src={tile117} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 118: tiles.push(<img style={style} src={tile118} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 119: tiles.push(<img style={style} src={tile119} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 120: tiles.push(<img style={style} src={tile120} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 121: tiles.push(<img style={style} src={tile121} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 122: tiles.push(<img style={style} src={tile122} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 123: tiles.push(<img style={style} src={tile123} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 124: tiles.push(<img style={style} src={tile124} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 125: tiles.push(<img style={style} src={tile125} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 126: tiles.push(<img style={style} src={tile126} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 127: tiles.push(<img style={style} src={tile127} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 128: tiles.push(<img style={style} src={tile128} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 129: tiles.push(<img style={style} src={tile129} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 130: tiles.push(<img style={style} src={tile130} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 131: tiles.push(<img style={style} src={tile131} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 132: tiles.push(<img style={style} src={tile132} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 133: tiles.push(<img style={style} src={tile133} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 134: tiles.push(<img style={style} src={tile134} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 135: tiles.push(<img style={style} src={tile135} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 136: tiles.push(<img style={style} src={tile136} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 137: tiles.push(<img style={style} src={tile137} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 138: tiles.push(<img style={style} src={tile138} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 139: tiles.push(<img style={style} src={tile139} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 140: tiles.push(<img style={style} src={tile140} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 141: tiles.push(<img style={style} src={tile141} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
            case 142: tiles.push(<img style={style} src={tile142} className={className} onClick={() => state.tileClick(l, r, c)} alt="" />); break;
          }
        }
      }
    }
  }

  //Visualizamos todos los elementos contenido en el Array tiles
  return (<React.Fragment>{tiles}</React.Fragment>);

};

export default PlayerBoard;

