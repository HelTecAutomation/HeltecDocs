var P = [
    { text: "LoRa Gateway", value: "gateway"},
    { text: "LoRa Node", value: "node"},
    { text: "Arduino", value: "arduino"},
 ]


var prod_obj = {
    gateway: [
        {text: "HT-M00", value: "ht-m00"},
        {text: "HT-M01", value: "ht-m01"},
        {text: "HT-M01S", value: "ht-m01s"},
        {text: "HT-M01S_V2", value: "ht-m01s_v2"},
        {text: "HT-M02_4G", value: "ht-m02_4g"},
        {text: "HT-M02_POE", value: "ht-m02_poe"},
        {text: "SX1301module", value: "sx1301module"},
        {text: "SX1303module", value: "sx1303module"},
    ],
    node: [
        {text: "CUBECELL", value: "cubecell"},
        {text: "STM32 + LoRa", value: "stm32"},
        {text: "ESP32 + LoRa", value: "esp32"},
    ],
    arduino: [
        {text: "ESP32+ARDUINO", value: "esp32_arduino"},
        {text: "ESP8266+ARDUINO", value: "esp8266_arduino"},
    ],
}

function tt() {
    let e = document.getElementById("product-select");
    let t = $("#type-select").val();
    if (t === '') return
    e.options.length = 1
    e.options[0].selected = true
    for (let r = 0; r < prod_obj[t].length; r++) {
        let m = prod_obj[t][r];
        var o = new Option(m.text,m.value);
        e.add(o)
    }
}

 function ht() {
    var n = $("#product-select").val();
    if (n === 'none') return
    window.location.href = function(e) {
        let t = $("#type-select").val();
        let lang = /\/(en|zh_CN)\//
        if (lang.test(window.location.href))
        {
            let href = window.location.href.split('/')
            let ll = document.documentElement.lang.replace('-', '_')
            let l = href.indexOf(ll) + 1
            href.splice(l, href.length)
            return href.join('/') + '/' + t + '/' + e + '/index.html'
        }
        return window.location.origin + '/' + 'en' + '/' + t + '/' + e + '/index.html'

    }(n)
}

ht_general='https://readthedocs.org/api/v3/embed/?url=https://docs.heltec.org/general/index.html'

$(function () {

let doc= document.getElementById('general-documents')
if (doc) {
  $.get(ht_general, function(data) {
  doc.innerHTML = data['content'];
})
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
})
