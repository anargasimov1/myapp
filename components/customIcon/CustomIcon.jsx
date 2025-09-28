import { Image } from 'react-native';

const icons = {
    play: require('../../assets/icons/play.png'),
    prev: require('../../assets/icons/prev.png'),
    next: require('../../assets/icons/next.png'),
    book: require('../../assets/icons/book.png'),
    pause: require('../../assets/icons/pause.png'),
    arrowUndo: require('../../assets/icons/arrow-undo.png'),
    home: require('../../assets/icons/home.png'),
    timer: require('../../assets/icons/timer.png'),
    plus: require('../../assets/icons/add.png'),
    more: require('../../assets/icons/more.png'),
};

export const CustomIcon = ({ name, size }) => {
    return <Image style={{ width: size, height: size }} source={icons[name]} />
};
