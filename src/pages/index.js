import Head from "next/head";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import React, { useState, useEffect } from "react";
import {  Layout  } from "antd";
import {useRouter} from "next/router";
import PokemonApi from "../pages/api/pokemonapi";
import axios from "axios";
import Header from "../components/header";
import Shelf from "../components/shelf";

const { Content, Footer } = Layout;

export default function Home() {

  const [apiNumber, setApiNumber] = useState(0);
  const [ready, setReady] = useState(false);
  const [results, setResults] = useState([]);

  const router = useRouter();


  useEffect(()=>{
    (async ()=>{
      const {data} = await axios
      .get(`https://rickandmortyapi.com/api/character`);
      const responsePokemon = await PokemonApi();

      const arrayOfObj1 = Object.keys(data).map(key =>{ return data[key];} );
      const arrayOfObj2 = Object.keys(responsePokemon).map(key =>{ return responsePokemon[key]})

        setResults(arrayOfObj1[1]);
        setReady(true);
        console.log(arrayOfObj2);
    })();
}, []);

const dataApi = (api) => {
  console.log(api);
  if(api === 0 && (responseRick)){
    setReady(true);
    console.log(responseRick.results);
    return responseRick.results;
  }
};

console.log(ready);
  return (
    <Layout className="layout">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Header />
    <Content style={{ padding: '0 50px' }}>

      <div className="site-layout-content">
        <div className={styles.grid}>
          {ready ? (results.map((item) => {
            return(
            <Shelf {...item} />
            )
          })) : (<h3>Loading...</h3>)}
        </div>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Yuri ©2020 All Rights Reserved</Footer>
      </Layout>
  );
}
