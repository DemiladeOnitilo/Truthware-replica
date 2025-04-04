import React from 'react';
import { privacyPolicyData } from '../components/PrivacyPolicyData';

const PrivacyPolicy = () => {
  if (!privacyPolicyData || !Array.isArray(privacyPolicyData)) {
    return <div className="text-white">No privacy policy data available.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white mt-50">
      <div className="relative w-[50%]">
        <img
          src="https://static.wixstatic.com/media/11062b_743dee5647ca47abb5de668812a2b972~mv2.jpg/v1/crop/x_0,y_1585,w_4505,h_1617/fill/w_784,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Safe.jpg"
          alt=""
          className="w-full"
        />
        <div className="bg-black absolute top-30 left-20 p-5 w-[40%] h-20 flex justify-center items-center">
          <h1 className="text-5xl">Privacy Policy</h1>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 w-[40%] h-auto p-10">
        <h2 className="text-3xl">Our Privacy Policy</h2>
        <div className="flex flex-col gap-4 text-sm text-[#8a8a8a]">
          {privacyPolicyData.map((section, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-bold">{section.title}</h3>
              {section.paragraphs &&
                section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              {section.list && (
                <ol className="list-decimal ml-5">
                  {section.list.map((item, lIndex) => (
                    <li key={lIndex}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;