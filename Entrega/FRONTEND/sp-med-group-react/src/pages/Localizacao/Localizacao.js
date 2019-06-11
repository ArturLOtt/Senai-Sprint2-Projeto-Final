import React from 'react';
import Firebase from 'firebase';
import config from '../../services/authFirebase';


class Localizacao extends React.Component {
  constructor(props){
    super(props);
// failed to compile =, error in the line 9
    Firebase.initializeApp(config.firebase);

    this.state = {
      localizacoes: []
    }
  }

  writeUserData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }

  componentDidMount() {
    this.getUserData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }


  render() {
    const { localizacoes } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className='col-xl-12'>
            <h1>Firebase Localização</h1>
          </div>
        </div>


        <div className='row'>
          <div className='col-xl-12'>
          { 
            localizacoes
            .map(localizacao => 
              <div key={localizacao.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}>
                <div className="card-body">
                  <h5 className="card-title">{ localizacao.name }</h5>
                  <p className="card-text">{ localizacao.role }</p>
                  <button onClick={ () => this.removeData(localizacao) } className="btn btn-link">Delete</button>
                  <button onClick={ () => this.updateData(localizacao) } className="btn btn-link">Edit</button>
                </div>
              </div>
              )
          } 
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <h1>Add new team member here</h1>
            <form onSubmit={ this.handleSubmit }>
              <div className="form-row">
                <input type='hidden' ref='uid' />
                <div className="form-group col-md-6">
                  <label>Name</label>
                  <input type="text" ref='name' className="form-control" placeholder="Name" />
                </div>
                <div className="form-group col-md-6">
                  <label>Role</label>
                  <input type="text" ref='role' className="form-control" placeholder="Role" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>


        
      </div>
    )
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let role = this.refs.role.value;
    let uid = this.refs.uid.value;
  
    if (uid && name && role){
      const { localizacoes } = this.state;
      const locIndex = localizacoes.findIndex(data => {
        return data.uid === uid 
      });
      localizacoes[locIndex].name = name;
      localizacoes[locIndex].role = role;
      this.setState({ localizacoes });
    }
    else if (name && role ) {
      const uid = new Date().getTime().toString();
      const { localizacoes } = this.state;
      localizacoes.push({ uid, name, role })
      this.setState({ localizacoes });
    }
  
    this.refs.name.value = '';
    this.refs.role.value = '';
    this.refs.uid.value = '';
  }
  
  removeData = (localizacao) => {
    const { localizacoes } = this.state;
    const newState = localizacoes.filter(data => {
      return data.uid !== localizacao.uid;
    });
    this.setState({ localizacoes: newState });
  }
  
  updateData = (localizacao) => {
    this.refs.uid.value = localizacao.uid;
    this.refs.name.value = localizacao.name;
    this.refs.role.value = localizacao.role;
  }



}

export default Localizacao;
