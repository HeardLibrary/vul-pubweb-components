import { onDocumentReady, alertBar } from '../../future-vu/js/utils';
import { min } from './utils';

const url = document.querySelector('[src*="pwc' + min + '.js"]').src.split('js')[0] + 'css/pwc' + min + '.css';
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${url}">`);

onDocumentReady(() => {
    alertBar();
});
