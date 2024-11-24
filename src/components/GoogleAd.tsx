import React, { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    // Ensures that the ad is triggered after the component has mounted
    if (window.adsbygoogle && window.adsbygoogle.push) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="pub-8990270107417757"      // Your AdSense Publisher ID
           data-ad-slot="f08c47fec0942fa0"            // Your Ad Slot ID
           data-ad-format="auto"></ins>                // Automatically adjusts ad size
    </div>
  );
};

export default GoogleAd;
