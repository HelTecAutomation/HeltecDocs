(function () {
var P = [
    { text: "LoRa Gateway", value: "gateway"},
    { text: "LoRa Node", value: "node"},
    { text: "Development Kits", value: "dev_kits"},
    { text: "Ready To Use", value: "ready2use"},
 ]


var prod_obj = {
    gateway: [
        {text: "HT-M00", value: "ht-m00"},
        {text: "HT-M01", value: "ht-m01"},
        {text: "HT-M01S (Phaseout)", value: "ht-m01s"},
        {text: "HT-M01S_V2", value: "ht-m01s_v2"},
        {text: "HT-M7603", value: "ht-m7603"},
        {text: "HT-M02 (Phaseout)", value: "ht-m02"},
        {text: "HT-M02_V2", value: "ht-m02_v2"},
        {text: "HT-1303", value: "ht-1303"},
        {text: "SX1301module (Phaseout)", value: "sx1301module"},
    ],
    node: [
        {text: "CUBECELL", value: "cubecell"},
        {text: "ESP32 + LoRa", value: "esp32"},
        {text: "MCU + LoRa", value: "stm32"},
    ],
    dev_kits: [
        {text: "ESP32+ARDUINO", value: "esp32_arduino"},
        {text: "ESP8266+ARDUINO", value: "esp8266_arduino"},
        {text: "Sufficient IoT Hub", value: "sufficient_iot_hub"},
    ],
    ready2use: [
        {text:"HRI-485x", value: "hri-485x"},
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
