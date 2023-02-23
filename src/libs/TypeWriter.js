import { Typewriter } from 'react-simple-typewriter'


const TypeWriter = () => {
  return (
    <Typewriter
        words={['Better..', 'Unmatched..', 'Styled..']}
        loop={0}
        cursor
        cursorStyle='|'
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
    />
  )
}


export default TypeWriter