import React from 'react'
import Layout from '../components/Layout'

const ProfilUser = () => {
  return (
    <Layout>
      <div>      
        <i class="fa-solid fa-circle-user"></i>
        <table class="profil">
          <th>AbonnÃ©e(s)</th>
          <th>Abonnement(s)</th>
          <tr>
            <td>0</td>
            <td>3</td>
          </tr>
        </table>
        <p class="text">Mail : nicolas.test@epsi.fr</p>
    </div>
    </Layout>
  )
}

export default ProfilUser