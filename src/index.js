module.exports = function toReadable (number) {
    const toReadable = (number) => {
        const lastChar = number[number.length - 1];
        if (lastChar === '1') {
          return 'one';
        }
          if (lastChar === '2') {
          return 'two';
        }
           if (lastChar === '3') {
          return 'three';
        }
           if (lastChar === '4') {
          return 'four';
        }
          if (lastChar === '5') {
          return 'five';
        }
          if (lastChar === '6') {
          return 'six';
        }
          if (lastChar === '7') {
          return 'seven';
        }
          if (lastChar === '8') {
          return 'eight';
        }
          if (lastChar === '9') {
          return 'nine';
        }
      
        return '';
      };
}
