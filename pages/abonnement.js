import React from 'react'
import Layout from '../components/Layout'
import eric from '../assets/eric.jpg'
import sarah from '../assets/sarah.PNG'
import ema from '../assets/ema.PNG'

function Abonnement() {
  return (
    <Layout>
      <div>
        <p class="text gras">Abonnement(s)</p>
        <table>
            <tr>
                <td><img src={eric} class="aboImg" alt="PP Eric" /></td>  
                <td>Eric</td>             
            </tr>
            <tr>
                <td><img src={sarah} class="aboImg" alt="PP Sarah" /></td> 
                <td>Sarah</td>       
            </tr>
            <tr>
                <td><img src={ema} class="aboImg" alt="PP Ema" /></td>
                <td>Ema</td> 
            </tr>

        </table>       
      </div>
    </Layout>
  )
}

export default Abonnement