import React, { Component } from "react";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class ListPlanets extends Component{

    constructor(props) {
        super(props);
        this.state = { visible: false };
      }

    show() {
        this.setState({ visible: true });
      }
    
    hide() {
        this.setState({ visible: false });
    }

    render(){
        const planets = this.props.planets;
        return(
            <div>
                {planets.map((planet, keys) => {
                    return (
                        <div id="list-planets" key={keys}>
                            <ul>
                                <li>
                                    <div className="card">
                                        <h5 className="card-title" onClick={this.show.bind(this)}>{planet.name}</h5>
                                        <Rodal visible={this.state.visible} animation="flip" width="600" height="400" showMask="false" onClose={this.hide.bind(this)}>
                                            <div>Content</div>
                                        </Rodal>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ListPlanets;