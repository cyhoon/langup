const imageDataUrl = [
    "https://cdn-images-1.medium.com/max/800/1*mr7WXw8tgpMhqugKP2WhrA.gif",
    "https://cdn-images-1.medium.com/max/2000/1*O5L2mAUDU8OXdr0zU3q8tA.jpeg",
    "https://cdn-images-1.medium.com/max/2000/0*iamCeRJYu1aLs-PT",
    "https://cdn-images-1.medium.com/max/1000/1*Uj8oL8KnqfeNwcRI76zYBg.png",
    "https://cdn-images-1.medium.com/max/800/1*7z3W_ZK9kMi_vqebWqX_ww.png"
];

const imageDataUrlLength = imageDataUrl.length;

// realize random code.

exports.selectRandomImage = () => {
    const randomNumber = Math.floor((Math.random() * imageDataUrlLength));
    // console.log('math random: ', Math.random());
    // console.log('image data url length: ', imageDataUrlLength);
    // console.log('radnom image: ', randomNumber);
    return imageDataUrl[randomNumber];
};