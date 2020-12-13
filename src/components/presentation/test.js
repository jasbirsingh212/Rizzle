import React, { Component } from 'react';
import {data} from '../../constants/data';
import {PBR,CVS,CHS}  from '../../constants/values';
import Slider from './SlideDrawer';
import Backdrop from './Backdrop';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
                      url: this.props.location.state.url,
                      index : this.props.location.state.index,
                      user:this.props.location.state.user,
                      loaded :false,
                      slidshow :false
                     }
    }



    handleState=(NewIndex) => {
      let NewUser=data[NewIndex].channel != null ? data[NewIndex].channel.user.name : "Guest"; 
      this.setState({
            index:NewIndex,
            url : data[NewIndex].video.originalUrl,
            loaded:false,
            user:NewUser
          })
    }

    PlayPrev=() =>{
      let NewIndex=(this.state.index-1+data.length)%data.length;
      this.handleState(NewIndex);
    }

    PlayNext=() =>{
      let NewIndex=(this.state.index+1)%data.length;
      this.handleState(NewIndex);
    }
    
    handleProgress= (played) => {
        if(played === true)
        {
          this.PlayNext();
        }
    }

    handleScroll = (e) => {

        if(e.movementY >= CVS && this.state.loaded){
           this.PlayNext();  
        }
        else if(e.movementY <= (-1*CVS) && this.state.loaded){
          this.PlayPrev();
       }
       else if(e.movementX < (-1*CHS) && this.state.loaded){
          this.handleSlider();
       }
    }

    handleReady=()=>{
      this.setState({...this.state,loaded : true});
    }

    handleSlider = () => {
      this.setState({...this.state,slidshow: !this.state.slidshow});
  }

    render () {
       let {url,slidshow,user} = this.state;
       let backdrop;
       if(slidshow){
         backdrop = <Backdrop/>;
        }

      return (

        
          <div id='play' onMouseMove={this.handleScroll}>
          <video  key={user}  width="100%" height="663px"
          // autoPlay //===> (Uncomment this if you want video to autoplay)
          playbackrate={PBR}  
           onCanPlay={this.handleReady} 
           onEnded={()=>this.handleProgress(true)}
           controls>
            <source src={url} type="video/mp4" />
          </video>
          < Slider show={slidshow} user={user}>
          {backdrop}
          </Slider>
          </div>
      
      )
    }
  }

  
  export default Test;