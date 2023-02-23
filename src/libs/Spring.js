import {animated, useSpring}  from '@react-spring/web';

function Spring ({n}){
    const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 150,
        config: {mass:1, tension:20, friction: 20},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

export default Spring