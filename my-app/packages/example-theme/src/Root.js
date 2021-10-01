import React from 'react';
import {connect} from 'frontity';
import Header from './Component/Header';

const Root = ({state,libraries}) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const date = new Date(post.date);
  console.log(data.id)
  console.log(data.link);
  console.log(author);
  console.log(date);
  const Html2React = libraries.html2react.Component;

    return (

      <>
         <Header>
        </Header>
         {author && <p>{author.name}</p>}
         <b>{date.toDateString()}</b>
         <Html2React html={post.content.rendered} />
     </>
      /*<>
        <Header>
        </Header>
        <h1>Product Designer</h1>
        <hr/>
    
        {
          data.isHome && <p>Estamos en la home</p>
        }
        
        {
          data.isCursos && <p>Estamos en cursos</p>
        }
        
      </>*/
    );
};

export default connect(Root);
