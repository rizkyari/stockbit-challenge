import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import banner from "../../assets/movie-banner.jpeg"
import './home.css';

const Home = (props) => {
    
    const { getData, list, searchData } = props;
    const[title, setTitle] = useState('');
    useEffect(() => {
        getData();
      },[]);

    const handleSubmit = () => {
        searchData(title);
    }  

    const infiniteScroll = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight){
         console.log('bottom already');
        //    let newPage = this.state.page;
        //    newPage++;
        //     this.setState({
        //          page: newPage
        //     });
        //    this.fetchData(newPage);
           }
        }

        useEffect(() =>{
            window.addEventListener('scroll', infiniteScroll);
        },[])
    return(
        <div>
            <div className="image-wrapper">
                <div className="imgbox">
                    <img src={banner} alt="banner-logo" className="banner-img"/>
                </div>
                <div className="card-input">
                    <div>
                        <div>
                            Find Your Desired Movies Here
                        </div>
                        <div>
                            <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
                            <button onClick={handleSubmit}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                {
                     list.length >= 1 ? list.map((item,index)=>(
                        <div key={index}>
                            <div className="container-card">
                                <div className="flap">
                                    <div>{item.Title}</div>
                                </div>
                                <div className="content-card">
                                    <img src={item.Poster} alt={item.Title} className="image-card"/>
                                </div>
                            </div>
                        </div>
                    )) : null
                }
                {list.Title}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.datas,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getData: () => dispatch(action.getData()),
      searchData: (title) => dispatch(action.searchData(title)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);