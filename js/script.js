'use strict';

const words = 'meow meow meow';

const ANIMATION_DURATION = 4000; // ms

// separate each character into it's own div
const characters = words.split('').forEach((char, i) => {
  const createElement = (offset) => {
    const div = document.createElement('div');
    div.insertAdjacentText('afterbegin', char);
    div.classList.add('character');
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

    return div;
  };

  document.querySelector('#spiral').append(createElement(0));
  document.querySelector('#spiral2')
      .append(createElement(-1 * (ANIMATION_DURATION / 2)));
});
