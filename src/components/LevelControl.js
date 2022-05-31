import React, { useState } from 'react';

const LevelControl = ({ fetchCrossWords }) => {
  const [level, setLevel] = useState('');

  const onClick = (val) => {
    if (level === val) return;
    setLevel(val);
    fetchCrossWords(val);
  };

  return (
    <div>
      {[
        'start',
        'out-of-bounds',
        'rectangle',
        'overlap',
        'large'
      ].map(e =>
        <button key={e} onClick={() => onClick(e)}>
          {e}
        </button>
      )}
    </div>
  );
};

export default LevelControl;
