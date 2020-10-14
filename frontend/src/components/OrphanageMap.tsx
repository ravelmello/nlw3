import React from 'react';
import '../styles/pages/orphanage-page.css';


import icon from '../assets/images/mark.svg';
import {Link} from 'react-router-dom';

import {FiPlus} from 'react-icons/fi';

import {Map , TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import config from '../config.json';

function OrphanageMap() {
    return (
       <div id="page-map">
           <aside>
               <header>
                   <img src={icon} alt="logo" />
                   <h2>Escolha um orfanato no mapa</h2>
                   <p>Muitas crianças estão esperando a sua visita :)</p>
               </header>

               <footer>
                   <strong>João Pessoa</strong>
                   <span> Paraíba </span>
               </footer>
           </aside>

    

            <Map center={[-7.1307588,-34.8790566]}
            zoom={15}
            style={{width:'100%', height:'100%'}} >

                <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${config.token}`}
                 />
            </Map>
            

           <Link to=""  className="create-orphanage">
              <FiPlus size={20} color="#FFF"/>
           </Link>
       </div>
    )
}

export default OrphanageMap;