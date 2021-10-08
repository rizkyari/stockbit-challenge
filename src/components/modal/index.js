import React,{useEffect,useState} from 'react';
import './index.css';
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";

const Modal = props => {
    
    const[editTitle,setEditTitle] = useState('');
    const[editDesc,setEditDesc] = useState('');
    const {detail} = props;

    useEffect(() => {
        console.log(props.imdb);;
      },[]);

    if(!props.show){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                   {detail.Title}
                </div>
                <div className="modal-body">
                    <div className="text-wrapper">
                        <div>Actors : </div>
                        <div>{detail.Actors}</div>
                    </div>
                    <div>
                        <div>Plot : </div>
                        <div>{detail.Plot}</div>
                    </div>
                    <div className="text-wrapper">
                        <div >Release Year :</div>
                        <div>{detail.Released}</div>
                    </div>
                    
                </div>
                <div className="modal-footer">
                    <div>
                        <div>Rated :</div>
                        <div>{detail.Rated}</div>
                    </div>
                    <div>
                        <div>imdbRating :</div>
                        <div>{detail.imdbRating}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        detail : state.detail,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
    
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Modal);