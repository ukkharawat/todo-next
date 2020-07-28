const style = {
  borderRadius: '4px',
  padding: '8px',
  border: 'None',
  boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',

}

const TextButton = ({ text, onClick }) => {
  return (
    <button style={style} onClick={onClick}>
      { text }
    </button>
  )
}

export default TextButton;