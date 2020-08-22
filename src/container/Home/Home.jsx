import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//-> pages
import Product from "../pages/Product/Product";
import LifeCycleComponent from "../pages/LifeCylcleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import MainYoutubeComp from "../pages/YoutubeComp/MainYoutubeComp";

//-> components
import NavTop from "../../component/Navigations/Nav-top";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/Context";

class Home extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavTop
            blog="/"
            product="/products"
            lifeCycle="/lifecycle"
            youtubeComp="/yt-comp"
          />

          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/products" component={Product} />
          <Route path="/yt-comp" component={MainYoutubeComp} />
          <Route path="/lifecycle" component={LifeCycleComponent} />
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
