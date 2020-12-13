import React ,{Component} from 'react';
import logo from "../../static/images/lpimg.jpeg";
import {data1} from './../../constants/data';


class Lp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleClick= () =>{
    this.props.history.push('/getting-started');
  }


  render() { 
    return ( <div className=" container lp-page ">          
          
            <img src={logo}   className="lp-resume center" alt="logo"  />
            <div className="intro">
              <video controls>
              <source src={data1.link1} type="video/mp4"/>
              </video>
              <video  controls>
              <source src={data1.link2} type="video/mp4"/>
              </video>
              <div className="lpt">
              <h1>Let's Get started to share Your</h1>
              <h1>"Story"</h1>
              <button type='button' className=" btn " onClick={this.handleClick}>Get Started for Free</button>
              </div>
              <video  controls>
              <source src={data1.link3} type="video/mp4"/>
              </video>
              <video  controls>
              <source src={data1.link4} type="video/mp4"/>
              </video>
              {/* <ReactPlayer width='200px' height='350px' controls  url="https://d1104ewo8apaup.cloudfront.net/video/0ba5a9c4067bb2c9638b628b4f6c1785d5oxtqi7.mp4"></ReactPlayer> */}
            </div>        
     </div> );
  }
}
 
export default Lp;



// const Lp = () => {
//     return (    
    
//         <div className="container  lp-page center">          
//         <div className="section">
//          <h1>Create a resume that stands out</h1>
//            <p >Create a Resume that perfectally describes your skils and match job profile.</p>
//             <br></br>
//            <div >
//                 <NavLink to="/getting-started"  className="btn hvr-float-shadow"><span>Get Started for Free</span>
//                 </NavLink>
                
//                 </div>
//                 <img src={logo}   className="lp-resume" alt="logo" />
//          </div>        
//          </div>
    
//         );
// }
 
// export default Lp;