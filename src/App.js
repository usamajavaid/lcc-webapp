import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from './Components/Sidebar';
import Routing from './Routing/Routing';
import './Components/sidebar.css';
import * as firebase from 'firebase';
class App extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyBJdLDxpMXlJq4-j4bOm8Etb4w3zOrO8ww",
      authDomain: "lcc-react.firebaseapp.com",
      databaseURL: "https://lcc-react.firebaseio.com",
      projectId: "lcc-react",
      storageBucket: "lcc-react.appspot.com",
      messagingSenderId: "79541500920",
      appId: "1:79541500920:web:d8f98637286da7904ab40d",
      measurementId: "G-FGEZCTFB70"
    };
     // Initialize Firebase
     const fire = firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
                 <div className="sidebar-screen">
              <Sidebar/>
              </div>
        </div>
        {
          this.state.isHovering?
          <div style={{marginLeft:350}}><Routing/></div>
          :
          <div id="main-scren"style={{marginLeft:80}}><Routing/></div>
        }
      </div>
    )
  }
}
export default App;
