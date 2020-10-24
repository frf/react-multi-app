import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import axios from "axios";

function Occurrences() {

    const apiUrl = 'https://api.fabiofarias.com.br/api/v1/occurrences';

    const [occurrences, setOccurrences] = useState([]);

    useEffect(() => {
      axios
        .get(apiUrl)
        .then(response => {
          setOccurrences(response.data.items)
        })
    }, []);

    const renderTableData = () => {
      return occurrences.map((occurrence, index) => {
         const { id, operatorName, clientName, typeOrder} = occurrence //destructuring
         return (
            <tr key={id}>
               <td>{id}</td>
               <td>{clientName}</td>
               <td>{operatorName}</td>
               <td>{typeOrder}</td>
            </tr>
         )
      })
   }

  return (
    <>
      <div
        className={'home__hero-section'}
      >
        <div className='container'>
          <div className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row',
            }} >
            <div className='col'>
              <div>
                <div>Occurrence Itens</div>
                <h1 className={'heading dark'}>
                  List of occurrences 
                </h1>
                <p className={'home__hero-subtitle dark'}>
                  Here you can see a list of events that you can see the data received through a mobile application. 
                </p>
                <p className={'home__hero-subtitle dark'}>
                  This is an example using Api with nodejs, typeorm, nestjs, mysql, messaging and scalability.
                </p>
                <p className={'home__hero-subtitle dark'}>
                I used axios to get the api data <a href="https://api.fabiofarias.com.br/api/v1/occurrences">https://api.fabiofarias.com.br/api/v1/occurrences</a> then I used the useEffect react hook as soon as I open the page to perform an action.
                </p>
                <p className={'home__hero-subtitle dark'}>
                  Using vercel.com with github everything is simpler when deploying. I love <a href='https://vercel.com' target='_blank'>https://vercel.com/</a>                  
                </p>
              </div>
            </div>
            <div className='col' style={{
              maxHeight: '390px',
              height: '390px'
            }}>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Client Name</th>
                    <th>Operator Name</th>
                    <th>Type Service</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableData()}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Occurrences;
