let _l = console.log;

$(document).ready(() => {
    window.history.replaceState('','','http://127.0.0.1:5500/index.html');
    $(window).on('navigate', (event, data) => {
        _l('navigated');
    });
    /* mock navigation */
    $('.1').click(() => {
        $.mobile.navigate( "#w1", { info: "info about the #w1 hash" });
    });
    $('.two').click(() => {
        $.mobile.navigate( "#w2", { info: "info about the #w2 hash" });
    });
});