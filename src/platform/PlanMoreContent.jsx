import React, { useEffect, useRef } from 'react';
import PlanIsiDataContent from './PlanIsiDataContent';
import "./Plan2.css";
import imagePlan1 from '../asset/3427752.jpg';
import NavbarHome2 from './NavbarHome2';

const PlanMoreContent = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    // Ensure cardsRef.current is an array before attempting to iterate
    if (Array.isArray(cardsRef.current)) {
      cardsRef.current.forEach((card) => {
        observer.observe(card);
      });
    }

    return () => {
      if (Array.isArray(cardsRef.current)) {
        cardsRef.current.forEach((card) => {
          observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <div className="PlanNew">
      <div className='plan2-card' ref={(el) => { if (el) cardsRef.current.push(el); }}>
        <NavbarHome2 />
        <PlanIsiDataContent
          heading="EDUCATION SAVING MONEY"
          text="Edukasi Saving Money adalah proses penting yang membekali individu dengan pengetahuan dan keterampilan untuk mengelola keuangan dengan bijak. 
          Dalam konteks ini, belajar tentang cara menyimpan uang dengan cerdas dan efisien menjadi kunci utama.
          Melalui pendekatan ini, orang dapat merencanakan masa depan finansial mereka dengan lebih baik, mengatasi krisis keuangan, dan mencapai tujuan-tujuan jangka panjang seperti pendidikan, kepemilikan rumah, atau pensiun dengan lebih yakin. 
          Edukasi Saving Money tidak hanya tentang memotong pengeluaran, tetapi juga tentang investasi yang cerdas, pembentukan kebiasaan menabung, dan pemahaman mendalam mengenai manfaat keuangan jangka panjang."
          img2={imagePlan1}
        />
      </div>
    </div>
  );
}

export default PlanMoreContent;
