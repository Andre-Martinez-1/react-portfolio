import React from "react";
import CssImg from "../assets/imgs/css.png";
import ExpressImg from "../assets/imgs/express.png";
import GithubImg from "../assets/imgs/github.png";
import HtmlImg from "../assets/imgs/html.png";
import JavaScriptImg from "../assets/imgs/javascript.png";
import JqueryImg from "../assets/imgs/jquery.png";
import MongoImg from "../assets/imgs/mongo.png";
import MysqlImg from "../assets/imgs/my-sql.png";
import NodeImg from "../assets/imgs/node.png";
import ReactImg from "../assets/imgs/react.png";
import HandlebarsImg from "../assets/imgs/handlebars.png";
import BootstrapImg from "../assets/imgs/bootstrap.png";

export default function Horizontal() {
    return (
        <div className="horizontal-container row">
        <img className="col-2 col-md-1 icon" alt="html icon" src={HtmlImg}></img>
        <img className="col-2 col-md-1 icon" alt="css icon" src={CssImg}></img>
        <img className="col-2 col-md-1 icon" alt="javascript icon" src={JavaScriptImg}></img>
        <img className="col-2 col-md-1 icon" alt="jquery icon" src={JqueryImg}></img>

        <img className="col-2 col-md-1 icon" alt="bootstrap icon" src={BootstrapImg}></img>
        <img className="col-2 col-md-1 icon" alt="react icon" src={ReactImg}></img>
        <img className="col-2 col-md-1 icon" alt="node icon" src={NodeImg}></img>
        <img className="col-2 col-md-1 icon" alt="express icon" src={ExpressImg}></img>

        <img className="col-2 col-md-1 icon" alt="mongo icon" src={MongoImg}></img>
        <img className="col-2 col-md-1 icon" alt="mysql icon" src={MysqlImg}></img>
        <img className="col-2 col-md-1 icon" alt="github icon" src={GithubImg}></img>
        <img className="col-2 col-md-1 icon" alt="handlebars icon" src={HandlebarsImg}></img>
      </div>
    );
  }