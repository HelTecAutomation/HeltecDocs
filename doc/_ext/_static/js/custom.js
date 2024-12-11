(function () {
var P = [
    { text: "LoRa Gateway", value: "gateway"},
    { text: "Nodes", value: "node"},
    { text: "Plug & Play", value: "ready_to_use"},
    { text: "Wi-Fi HaLow", value: "wifi_halow"},
 ]


var prod_obj = {
    gateway: [
        {text: "HT-M2802", value: "ht-m2802"},
        {text: "HT-M00S", value: "ht-m00s"},
        {text: "HT-M00", value: "ht-m00"},
        {text: "HT-M01", value: "ht-m01"},
        {text: "HT-M01S_V2", value: "ht-m01s_v2"},
        {text: "HT-M7603", value: "ht-m7603"},
        {text: "HT-M02_V2", value: "ht-m02_v2"},
        {text: "HT-1303", value: "ht-1303"},
        {text: "HT-M01S (Phaseout)", value: "ht-m01s"},
        {text: "HT-M02 (Phaseout)", value: "ht-m02"},
        {text: "SX1301module (Phaseout)", value: "sx1301module"},
    ],
    node: [
        {text: "Cubecell (ASR650x) Series", value: "asr650x"},
        {text: "ESP32 Series", value: "esp32"},
        {text: "NRF Series", value: "nrf"},
        {text: "STM32 Series", value: "stm32"},
        {text: "Sufficient IoT Hub", value: "sufficient_iot_hub"},
        {text: "HT-AT62", value: "ht-at62"},
        {text: "HT-RA62", value: "ht-ra62"},
    ],
    ready_to_use: [
        {text:"HRI-485x", value: "hri-485x"},
        {text:"HRU-3601", value: "hru-3601"},
        {text:"HRU-1000", value: "hru-1000"},
        {text:"HRI-3621", value: "hri-3621"},
        {text:"HRI-3622", value: "hri-3622"},
        {text:"HRI-3631", value: "hri-3631"},
        {text:"HRI-3632", value: "hri-3632"},
        {text:"HRI-3633", value: "hri-3633"},
        {text:"Juction Box", value: "junction_box"},
    ],
    wifi_halow: [
        {text:"HT-H7608", value: "ht-h7608"},
        {text:"HT-HC01", value: "ht-hc01"},
        {text:"HT-HC32", value: "ht-hc32"},
        {text:"HT-HD01", value: "ht-hd01"},
        {text:"HT-HR01", value: "ht-hr01"},
    ],
}

function tt() {
    var e = document.getElementById("product-select");
    var t = document.getElementById("type-select").value;
    var r = 0;
    if (t === 'none') return
    e.options.length = 1
    e.options[0].selected = true
    for (r = 0; r < prod_obj[t].length; r++) {
        var m = prod_obj[t][r];
        var o = new Option(m.text,m.value);
        e.add(o)
    }
}

 function ht() {
    var n = document.getElementById("product-select").value;
    if (n === 'none') return
    window.location.href = (function(e) {
        var t = document.getElementById("type-select").value;
        var lang = /\/(en|zh_CN)\//
        if (lang.test(window.location.href))
        {
            var href = window.location.href.split('/')
            var ll = document.documentElement.lang.replace('-', '_')
            var l = href.indexOf(ll) + 1
            href.splice(l, href.length)
            return href.join('/') + '/' + t + '/' + e + '/index.html'
        }
        return window.location.origin + '/' + 'en' + '/' + t + '/' + e + '/index.html'

    })(n)
}

var ht_general='https://readthedocs.org/api/v3/embed/?url=https://docs.heltec.org/general/index.html';


var doc= document.getElementById('general-documents')
if (doc) {
        fetch(ht_general).then(function(data) {data.json().then(function(d){
            doc.innerHTML = d.content
        })})
}
var t = document.getElementById("type-select");
var e = document.getElementById("product-select");
var th = window.location.href.split('/')[4]
var eh = window.location.href.split('/')[5]
t.hidden = !1;
t.onchange = tt;
e.hidden = !1;
e.onchange = ht;
for (let r = 0; r < P.length; r++) {
    let n = P[r];
    var o = new Option(n.text,n.value);
    if (o.value === th) {
        o.selected = true
    }
    t.add(o)
}
tt()
for (let r = 0; r < e.options.length; r++) {
    if (e.options[r].value === eh) {
        e.options[r].selected = true
    }
}
})()
