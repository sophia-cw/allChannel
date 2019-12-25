// JavaScript Document
//PRELOAD時的畫面設定
    window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#FFF",
            backgroundColor: "#50677c",
            percentage: true,
            barHeight: 2,
            minimumTime: 500,
            fadeOutTime: 500
        });
    });
