import React from 'react';
import {connect} from 'frontity';
import Switch from "@frontity/components/switch";

import List from './Component/List'
import Post from './Component/Post'
import Page from './Component/Page'
import Header from './Component/Header';
const Root = ({state,libraries}) => {
  const data = state.source.get(state.router.link)

  return (
    <>
  
   
        <meta name="description" content={state.frontity.description} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <html lang="en" />
     

        <Header></Header>
      
        <Switch>
        
          <List when={data.isArchive}/>
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>

    </>
    );
};

export default connect(Root);
