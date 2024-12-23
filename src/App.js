import './index.css';
import React, { useEffect, useState } from 'react'
import { Route, useNavigate, Routes,useLocation } from "react-router-dom";

import Home from './page/Home';
import Event from './page/Event';
import Team from './page/Team';
import Teamone from './page/Teamonee';
import Contact from './page/Contact';
import Missing from './Missing';


import Header from './components/Header';
import Footer from './components/Footer';



import algo from './assets/bgimages/algo.png'
import c from './assets/bgimages/c.png'
import codeche from './assets/bgimages/codecheff.png'
import codeforc from './assets/bgimages/codeforce.png'
import comp from './assets/bgimages/comp.png'
import cpp from './assets/bgimages/cpp.png'
import java from './assets/bgimages/java.png'
import leetcode from './assets/bgimages/leetcode.png'
import python from './assets/bgimages/python.png'
import leadbord from './assets/bgimages/leadbord.png'
import queue from './assets/bgimages/queue.png'
import stack from './assets/bgimages/stack.png'
import graph from './assets/bgimages/graph.png'
import binary from './assets/bgimages/binary.png'
import timer from './assets/bgimages/timer.png'

import git from "./assets/github.png";
import linkdn from "./assets/linkdn.png";
import one from "./assets/Team/1.png";
import onee from "./assets/Team/one.png";
import three from './assets/Team/two.png'
import four from './assets/Team/four.png'





function App() {

  const location = useLocation();

  const [images,setImages]= useState(
    [ { img: algo, class: 'algo' },
    { img: c, class: 'c' },
    { img: codeche, class: 'codeche' },
    { img: codeforc, class: 'codeforc' },
    { img: comp, class: 'comp' },
    { img: cpp, class: 'cpp' },
    { img: java, class: 'java' },
    { img: leetcode, class: 'leetcode' },
    { img: python, class: 'python' },
    { img: leadbord, class: 'leadbord' },
    { img: queue, class: 'queue' },
    { img: stack, class: 'stack' },
    { img: graph, class: 'graph' },
    { img: binary, class: 'binary' },
    { img: timer, class: 'timer' }
  ])

  const googlers = [
    {
      name: "Jenil Shah",
      position: "Vice Chairperson",
      image: three,
      color1:'#F78F8F',
      color2:'#F5F4EB',
      socials: {
        github: git,
        linkedin: linkdn
      }
    },
    {
      name: 'Dhvani Thakkar',
      position: "Vice Chairperson",
      image: one,
      color1:'#FFEEA3',
      color2:'#F5F4EB',
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Akash Ram',
      position: "Technical Head",
      image: one,
      color1:'#BAE0BD',
      color2:'#F5F4EB',
      socials: { github: git, linkedin: linkdn }
    }, 
    {
      name: 'Shubham Jaiswar',
      position: "Technical Head",
      image: one,
      color1:'#8BB7F0',
      color2:'#F5F4EB',
      socials: { github: git, linkedin: linkdn }
    }
  ];

  const chairperson = {
        name: 'Dnyanesh Swant',
        position: "Chairperson",
        image: onee,
        color1: '#8BB7F0',
        color2: '#e6e5dc',
        isgoogle: false,
        socials: { github: git, linkedin: linkdn }
      }

  const viceChairpersons = [
    {
      name: 'Dhvani Thakkar',
      position: "Vice Chairperson",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: true,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Jenil Shah',
      position: "Vice Chairperson",
      image: three,
      color1: '#71CAB3',
      color2: '#e6e5dc',
      isgoogle: true,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Veen Chhead',
      position: "Vice Chairperson",
      image: four,
      color1: '#BA8ED5',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];
  
  const technicals = [
    {
      name: 'Atharva Narwekar',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Deep Pandharkar',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Akash Ram',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: true,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Gargeya Parab',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Bhavesh Lalwani',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Amod Joshi',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Hardik Rana',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Shubham Jaiswar',
      position: "Technical Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: true,
      socials: { github: git, linkedin: linkdn }
    }
  ];

  const events = [
    {
      name: 'Srayam Mehta',
      position: "Events Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];

    const creatives = [
    {
      name: 'Tanvi Upadhyay',
      position: "Creatives Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Priyanshu Singh',
      position: "Creatives Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Harshil Koladi',
      position: "Creatives Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];
  
  const marketings = [
    {
      name: 'Hakshit Adimulam',
      position: "Marketing Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Jugal Pandar',
      position: "Marketing Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Jainam Shah',
      position: "Marketing Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];
  
  const publicitys = [
    {
      name: 'Aditya Dubey',
      position: "Publicity Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Riya Sadrani',
      position: "Publicity Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];
  

  
  const editorials = [
    {
      name: 'Rishi Ghodwat',
      position: "Editorial Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    },
    {
      name: 'Rajdeepsinh Jadeja',
      position: "Editorial Head",
      image: one,
      color1: '#8BB7F0',
      color2: '#e6e5dc',
      isgoogle: false,
      socials: { github: git, linkedin: linkdn }
    }
  ];

  const topScroll = () => {
    window.scrollTo(0, 0);    
  }

  return (
    <div className="App">
      <Header location={location} topScroll={topScroll}/>
      <Routes>
        <Route path="/" element={<Home images={images} googlers={googlers}/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<Team
        chairperson={chairperson}
        viceChairpersons={viceChairpersons}
        technicals={technicals}
        events={events}
        creatives={creatives}
        marketings={marketings}
        publicitys={publicitys}
        editorials={editorials}
        />} />
        <Route path="/team1" element={
          <Teamone 
          chairperson={chairperson}
          viceChairpersons={viceChairpersons}
          technicals={technicals}
          events={events}
          creatives={creatives}
          marketings={marketings}
          publicitys={publicitys}
          editorials={editorials}
          />
          } 
          />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer topScroll={topScroll} />
    </div>
  );
}

export default App;
