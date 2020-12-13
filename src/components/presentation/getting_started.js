import React, { Component } from 'react';
import {data} from '../../constants/data';
import Play from './../../static/images/play.png'


class GettingStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick=(d,index) =>{
        //console.log("on thumbnail click");
        this.props.history.push({
            pathname:'/finalize',
            state: {
                url:d.video.originalUrl,
                index:index,
                user:d.channel !=null ? d.channel.user.name : "Guest"
              }  
          })
    }

    render() { 
        return (
            <div className="container GettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a story to get started</h1>
                    <p className=" center">
                    You’ll be able to share and edit your story later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        data.map((d,index) => { 

                             return( <div key={d.id} className = "template-card zoom">
                                <div className="container1">
                                <img  className="" src={d.video.coverImageUrl} alt='cover'/>
                                <div className="overlay">
                                    <div className="text">{d.channel !=null ? d.channel.user.name : "Guest"}</div>
                                </div>
                                </div>
                                {/* <ReactPlayer light={true} url={d.video.originalUrl}></ReactPlayer> */}
                                
        
                                <img type="button" src={Play} alt='play' onClick={()=>this.handleClick(d,index)} className='btn-select-theme playbtn'></img>
                            </div>);
                            
                        })
                    }
                    </div>
                
                </div>
                 
            </div>
          );
    }
}
 
export default GettingStarted;