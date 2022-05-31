const Letter = ({letter = null, isInside = true, isCandidate = false}) => {
  if (!letter) return null;

  return (
    <div
      style={{
        boxSizing: 'border-box',
        fontSize: '8vw',
        width: '100%',
        height: '100%',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        borderRadius: '12px',
        border: isInside ? '0' : '4px dotted orange',
        backgroundColor: isCandidate ? '#C0D0E0' : '#5196C5',
      }}
    >
      {letter}
    </div>
  );
};

export default Letter;
