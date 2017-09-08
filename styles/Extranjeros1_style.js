var size = 0;
var ranges_Extranjeros1 = [[0.030000, 0.080000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(247,251,255,0.8)'})
    })]],
[0.080000, 0.130000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(200,221,240,0.8)'})
    })]],
[0.130000, 0.180000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(115,179,216,0.8)'})
    })]],
[0.180000, 0.230000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(40,121,185,0.8)'})
    })]],
[0.230000, 0.280000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(8,48,107,0.8)'})
    })]]];
var styleCache_Extranjeros1={}
var style_Extranjeros1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Población extranjera 2_% DE EXTRANJEROS");
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
    var style = ranges_Extranjeros1[0][2];
    for (i = 0; i < ranges_Extranjeros1.length; i++){
        var range = ranges_Extranjeros1[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_Extranjeros1[key]){
        var text = new ol.style.Text({
                font: '13.0px \'Futura\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Extranjeros1[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Extranjeros1[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};