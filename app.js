import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelected } from './actions';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

let App = ({ dispatch, selectedImg,data }) => {
    let handleClick = (url) => {
        dispatch(setSelected(url));
    }
    return (
        <div>
            <Scene>
               <Entity primitive='a-sky' src={selectedImg}/>
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