import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';


const SmoothScrollContainer = () => {
  // const scrollRef = useRef(null);
  var overscrolloptions={
    enable:true,
    effect:'bounce',
    damping:0.15,
    maxOverscroll:150
  }

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, {
      damping: 0.03,
      // alwaysShowTracks: true,
      overscroll:{...overscrolloptions}
    });

    return () => {
      Scrollbar.destroy(document.body);
    };
  }, []);
  return null
};

export default SmoothScrollContainer;
