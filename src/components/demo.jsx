import React, { Component } from 'react';


class Demo extends Component {
    state = { 
   articles:[
       {id:3, title:'Article 1', text:'Demo text 1'},
       {id:9, title:'Article 2', text:'Demo text 2'},
       {id:15, title:'Article 3', text:'Demo text 3'},
   ]
     }

    render() { 
    const {articles}=this.state;
        return (
 <div>
{articles.map(article=>
<div key={article.id}>
<h3>{article.title}</h3>
    <p>{article.text}</p>  
</div>
    )}
 </div>
          );
    }
}
 
export default Demo;