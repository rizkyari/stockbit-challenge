import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/action";
import banner from "../../assets/movie-banner.jpeg"; 
import Modal from "../../components/modal/index";
import './home.css';
import { add_title } from "../../redux/type/type";

const Home = (props) => {
    
    const { getData, list, searchData, pageNum, addPage, infiniteScroll, choosenId, imdb, getDetail, addTitle} = props;
    const[title, setTitle] = useState('');
    const[page,setPage] = useState(1);
    const[show, setShow] = useState(false);

    useEffect(() => {
        getData();
      },[]);

    const handleSubmit = () => {
        searchData(title);
        addTitle(title);
    }  

    const openDetail = (i, imdbID) => {
        setShow(true);
        choosenId(imdbID);
        getDetail(imdbID);
    }

    const getMoreData = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight){
            // let newPage = page++;
        //  setPage(newPage);
        addPage(1);
        infiniteScroll();
        // console.log(title, pageNum);
        //  console.log(pageNum);
        //    let newPage = this.state.page;
        //    newPage++;
        //     this.setState({
        //          page: newPage
        //     });
        //    this.fetchData(newPage);
           }
        }

        useEffect(() =>{
            window.addEventListener('scroll', getMoreData);
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
                            <div className="container-card" onClick={()=>openDetail(index, item.imdbID)}>
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
            <Modal onClose={() => setShow(false)} show={show} imdb={imdb}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.datas,
        pageNum: state.page,
        imdb : state.idx,
    };
  };
  
  function mapDispatchToProps(dispatch){
  return{
      getData: () => dispatch(action.getData()),
      searchData: (title) => dispatch(action.searchData(title)),
      addPage:(page) => dispatch(action.addPage(page)),
      infiniteScroll: (title, page) => dispatch(action.infiniteScroll(title,page)),
      choosenId: (id) => dispatch(action.choosenIndex(id)),
      getDetail: (id) => dispatch(action.getDetail(id)),
      addTitle: (title) => dispatch(action.addTitle(title)),
  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);