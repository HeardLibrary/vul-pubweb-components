import { onDocumentReady, alertBar } from './future-vu/js/utils';

let url = document.querySelector('script[src*="pwc.js"]').src.split('js')[0] + 'css/pwc.css';
document.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${url}">`);

onDocumentReady(() => {
    alertBar();
});
