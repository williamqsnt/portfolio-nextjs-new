import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import desktop from '../public/assets/desktop.png'
import logo from '../public/assets/logo.png'
import styled from '@emotion/styled'
import Cart from './composants/Cart';
import axians from '../public/assets/icons/axians.png'
import Menu from './Menu';


export default function experiences() {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | William Quesnot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <section className={styles.center} style={{height : '100vh', width :'100%'}}>
        <div style={{display : 'flex', alignItems : 'center', flexDirection : 'column', height : '100%'}}>
        <h2 style={{color : 'rgb(73, 242, 202)'}}>MES EXPÉRIENCES</h2>
          <Cart bgCart={axians} title="Axians Audiovisuel Lyon" description="Site web de simulateur tarifaire pour l'entreprise Axians sous la technologie NextJS, avec Tailwand et Emotion.sh pour la stylisation. Ainsi que l'intégration du CMS Contentful permettant à l'entreprise de modifier les produits du site. Ainsi que l'utilisation de Email.js pour l'envoi de mail automatique lors d'achat." />
            
          
        </div>
      </section>

    </div>
  )
}