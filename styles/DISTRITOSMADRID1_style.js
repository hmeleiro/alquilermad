var size = 0;

var styleCache_DISTRITOSMADRID1={}
var style_DISTRITOSMADRID1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(136,79,188,0.0)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_DISTRITOSMADRID1[key]){
        var text = new ol.style.Text({
                font: '16.9px \'.SF NS Text\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_DISTRITOSMADRID1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DISTRITOSMADRID1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};