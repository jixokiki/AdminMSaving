import React from 'react';
// import Plan2 from "./Plan2";
import PlanData from "./PlanData";
import "./Plan.css";
import imagePlan1 from '../asset/3427752.jpg';
import imagePlan2 from '../asset/5157459.jpg';
import imagePlan3 from '../asset/Wavy_Bus-21_Single-04.jpg';

const Plan = () => {
  return (
    <div className="Plan">
      <h1>PLAN</h1>
      <p>M-SAVING</p>
        <div className='plan1-card'>
            <PlanData
            className="first-description"
            heading="11 Cara Mengatur Keuangan Pribadi dengan Baik"
            text="Mengatur keuangan memang membutuhkan usaha. Akan tetapi, akan timbul lebih banyak masalah jika Anda tidak melakukannya, baik bagi diri Anda sendiri maupun orang-orang di sekitar. Agar itu tidak terjadi, terapkan cara-cara mengatur keuangan pribadi dengan gaji kecil berikut."
            img1={imagePlan1}
            />

            <PlanData
            className="first-description-reverse"
            heading="Apa Itu Tabungan Berjangka?"
            text="Tabungan berjangka adalah jenis tabungan di mana nasabah menyetorkan sejumlah uang ke dalam rekening bank dan menentukan jangka waktu simpanan. Biasanya, dana yang disetorkan dalam jumlah yang tetap selama jangka waktu antara satu bulan hingga beberapa tahun.
            Selama jangka waktu tersebut, nasabah tidak dapat melakukan penarikan dana atau pengambilan uang dari rekening tabungan berjangka tersebut. Produk ini juga dikenal sebagai tabungan rencana."
            img1={imagePlan2}
            />

            <PlanData
            className="first-description-reverse"
            heading="6 keuntungan menabung"
            text="Jika saat ini kamu belum mempunyai motivasi menabung, maka jadikan beberapa manfaat menabung berikut ini sebagai pemicu untuk kamu melakukan aktivitas tersebut."
            img1={imagePlan3}
            />

        </div>
    </div>
  );
}

export default Plan;
