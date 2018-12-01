import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }, {
          backgroundColor: 'yellow',
          width: '180px',
          height: '200px'
        }
      ]
    };

    setTimeout(() => {
        var randBox = Math.floor(Math.random() * this.state.boxes.length);
        var colorIndex = Math.floor(Math.random() * App.defaultProps.allColors.length);
        var colors = App.defaultProps.allColors[colorIndex];

        const boxes = this.state.boxes.map((boxes, index) => {
          if (index ===randBox) {
            let {backColor} = [...boxes.backgroundColor];
            backColor = colors;
            return {
              ...boxes,
              backColor
            }
          }
          return boxes;
        });

        this.setState({boxes});
      // const boxes = this.state.boxes.map((boxes, index) => {
      //   if (index ===randBox) {
      //     let backColor = [...boxes.backgroundColor];
      //     backColor = colorIndex;
      //     return {
      //       ...boxes,
      //       backColor
      //     }
      //   }
      //   return boxes;
      // });
      // this.setState({boxes})
    }, 300);
  }

  render() {
    const boxes = this.state.boxes.map((boxes, index) => (
      <Box key={index} style={{backgroundColor: {this.props.allColors[0]}}} />
    ));

    console.log(App.defaultProps.allColors[0]);
    return (
      <div className="App" style={{display: 'flex', flexWrap: 'wrap'}}>
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};


const Box = (props) => {
  return (
    <div style={props.style}></div>
  );
}


export default App;
