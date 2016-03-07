// This tells file-loader to copy index.html to the dist folder next to the javascript bundle
require('file?name=[name].[ext]!./index.html');

import ReactDOM from 'react-dom';
import WinterParkCamera from './winterPark/winterParkComponent'

ReactDOM.render(
    <WinterParkCamera/>
    ,
    document.getElementById('app')
);