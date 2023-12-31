// Import uniqid & Character Images
import uniqid from 'uniqid';
import mickey from '../assets/img/characters/mickey.webp';
import minnie from '../assets/img/characters/minnie.webp';
import catnip from '../assets/img/characters/catnip.webp';
import skeleton from '../assets/img/characters/skeleton.webp';
import walrus from '../assets/img/characters/walrus.webp';
import willie from '../assets/img/characters/willie.webp';
import horse from '../assets/img/characters/horse.webp';
import pig from '../assets/img/characters/pig.webp';
import cow from '../assets/img/characters/cow.webp';
import parrot from '../assets/img/characters/parrot.webp';

// Characters array that represents id, name, src and clicked
const characters = [
    {
        id: uniqid(),
        name: 'Mickey Mouse',
        src: mickey,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Minnie Mouse',
        src: minnie,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Catnip',
        src: catnip,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Haunted Skeleton',
        src: skeleton,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Walrus',
        src: walrus,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Steam Boat Willie',
        src: willie,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Horace Horsecollar',
        src: horse,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Patricia Pigg',
        src: pig,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Caroline Cow',
        src: cow,
        clicked: false,
    },
    {
        id: uniqid(),
        name: 'Parrot',
        src: parrot,
        clicked: false,
    },
];

export default characters;
