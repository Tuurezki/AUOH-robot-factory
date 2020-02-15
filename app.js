function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Alustetaan yhteys robotin http sivulle
// const express = require('express');
const axios = require('axios');

// let app = express();

axios.get('https://fanuc-robot-http-server.herokuapp.com/')
    .then((res) => {
        console.log(res);


        const regexp = '-?\d*\.([0-9])\d+';
        let joints = [];
        let matches = res.data.matchAll(regexp);
        let count = 0;
        for (const match of matches) {
            count++;
            if (count > 6) break;
            const value = parseFloat(match[1]);
            joints.push(value);
        }
});

// -?\d*\.([0-9])\d+
// Regexr antoi yläpuolella olevalla arvolla lukemat --> testataan
// const regexp = '-?\d*\.([0-9])\d+';
//     let joints = [];
//     let matches = res.data.matchAll(regexp);
//     let count = 0;
//     for (const match of matches) {
//         count++;
//         if (count > 6) break;
//         const value = parseFloat(match[1]);
//         joints.push(value);
//     }



// // Main loop, jossa ohjelma pyörii ja kyselee akseleiden arvoja.
// const main_loop = () => {
//     setTimeout(() => {

    
//         const time_stamp = new Date();
//         const delta = time_stamp - start_time_stamp;
//         main_loop();
//     }, 10);
// }

// main_loop();


