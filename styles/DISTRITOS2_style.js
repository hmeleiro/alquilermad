var size = 0;

var styleCache_DISTRITOS2={}
var style_DISTRITOS2 = function(feature, resolution){
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
    if (label_DISTRITOS2_eval_expression(context) !== null) {
        labelText = String(label_DISTRITOS2_eval_expression(context));
    } else {
        labelText = ""
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(47,124,207,0.0)'})
    })];
    key = value + "_" + labelText
    if (!styleCache_DISTRITOS2[key]){
        var text = new ol.style.Text({
                font: '16.9px \'Futura\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_DISTRITOS2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_DISTRITOS2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};