import React, { Component } from "react";
import New from "./new";
import PageHeader from "./pageheader";

class News extends Component {
  state = {
    news: [
      { id: 1, title: "title 1", article: "article 1", date: "1/2/21" },
      { id: 2, title: "title 2", article: "article 2", date: "14/1/21" },
      { id: 3, title: "title 3", article: "article 3", date: "21/1/21" },
      { id: 4, title: "title 4", article: "article 4", date: "17/1/21" },
      { id: 5, title: "title 5", article: "article 5", date: "8/1/21" },
    ],
  };
  render() {
    const { news } = this.state;
    return (
      <div className="container mt-3">
        <PageHeader>News Page</PageHeader>
        <div className="row">
          {news.map((item) => (
            <New item={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default News;
