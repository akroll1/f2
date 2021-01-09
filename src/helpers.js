import {Auth} from 'aws-amplify'

export const createMarkup = text => ({ __html: text });

export const shortenTitle = (title) => {
    if (title.length > 100){
        title = title.slice(0,100);
        title += '...';
        return title;
    }
    return title;
};

export const shortenBody = (body) => {
    if(body.length > 200){
        body = body.slice(0,200);
        return body;
    }
    return body;
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

export const createBingHeaders = () => {
    const myHeaders = new Headers();
    myHeaders.append(
        'Ocp-Apim-Subscription-Key',
        'a894e8ffde684fb7916fd1152b055e2e'
    );
    myHeaders.append('data', 'jsonp');
    myHeaders.append('Access-Control-Allow-Origin', 'localhost:3000/news');
    return myHeaders;
}