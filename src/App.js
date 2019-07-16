import React, { Fragment } from 'react';
import './styles.css';


export class Info extends React.Component {
  // inicializo un obj state vacio
  state = {
    items: [],
  }

  
  create = (e) => {
    console.log('click!');
    // mediante JSX creo un react element
    const box = <div>Elemento con transicion!</div>;
    // actualizo el state por medio del metodo setState
    this.setState({
      items: this.state.items.concat(box)
    })

  }

  render() {
    const list = this.state.items.map((elem, index) =>{
      return(
          <li key={index} className='show'>{elem}</li>
      )
    })
    return(
      <Fragment>
        <button onClick={e => this.create(e)}>Añade</button>
        <ul>
        {list}
        </ul>
      </Fragment>
    );
  }
}
