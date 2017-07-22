import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

/**
 * <Entity
                geometry={{primitive: 'box', width: 50 , height: 50}}
                material={{color: "red", roughness: 0.5, src: img}}
                scale={{x: 2, y: 2, z: 2}}
                position={{x: 0, y: 0, z: -5}}/>

 */

var  img = "http://www.roadtovr.com/wp-content/uploads/2014/09/Venice.Still001.jpeg";
var  img2 = "http://www.paris-360.com/pictures/louvre_pyramide_ficheok.jpg";
let App = ({ dispatch, selectedImg,data }) => {
    let handleClick = (url) => {
        dispatch(addTodo(url));
    }
    return (
        <div>
           <Scene>
              <Entity primitive='a-sky' src={selectedImg}/>
              <Entity events={{
                     click: handleClick
                    }}  text={{value: 'Hello, WebVR!'}}/>
          </Scene>
            <div className="galleryContainer">
                {data.map( (elem,i) => {
              return(
                   <div key={i} className="gallery">
                       <div className="img-div">
                          <img onClick={ () => { handleClick(elem.pano)} }  src={elem.pano} alt={elem.name} />
                          <div>{elem.name}</div>
                        </div>
                    </div>
                   )
                 })}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { selectedImg: state.selected,data:state.data }
}

export default connect(mapStateToProps)(App)