import Atropos from 'atropos';

import 'atropos/css';

const myAtropos = Atropos({
    el: '.my-atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
  });
  
  setTimeout(() => {
    // destroy it when needed
    myAtropos.destroy();
  }, 10000)