import {Auth} from 'aws-amplify'

export const slicedGame = (str) => {
    let index = str.indexOf('-');
    if(index > -1){
        return str.slice(0,index);
    } else {
        return str;
    }
};

export const getGameType = (path) => {
    if(path.includes('poll')) return 'poll';
    if(path.includes('quiz')) return 'quiz';
    if(path.includes('predictive')) return 'predictive';
};

export const createMarkup = text => ({ __html: text });

export const shortenText = (body, length) => {
    if(!body) return
    if(body.length > length){
        body = body.slice(0,length);
        body += '...';
        return body;
    }
    return body += '...';
};

export const signOut = async () => (
    Auth.signOut()
        .then(
            sessionStorage.setItem('isLoggedIn', false),
            this.setState(() => {
                return {
                    logOut: true
                }
            })
        )
        .catch(err => console.error(err))
);

export const makeComparator = (key, order='asc') => {
    return (a, b) => {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

        const aVal = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const bVal = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (aVal > bVal) comparison = 1;
        if (aVal < bVal) comparison = -1;

        return order === 'desc' ? (comparison * -1) : comparison
    };
};

export const getSelectedBoxer = async (index,boxers) => {
    let boxer, rand;
    boxer = index === null ? rand : index;
    rand = Math.floor(Math.random() * boxer.length);
    this.setState({ selectedBoxer: boxers[boxer] });
};

export const makeLabelsArr = (boxers) => {
    let arr = [];
    boxers.map(boxer => {
    arr.push(
        boxer.firstName + ' "' + boxer.ringName + '" ' + boxer.lastName
    )});
    return arr;
};

export const makeImagesArr = (boxer) => {
    let arr = [];
    let url = boxer.profileImg;
    arr.push(url);
    return arr;
};

export const makeUrl = (title) => {
    let regex = / /gi;
    let makeUrl = title.replace(regex,'-');
    let url = '/article/' + makeUrl;
    return url;
};
