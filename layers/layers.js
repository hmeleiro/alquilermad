var format_nacionalidadetiqueta0 = new ol.format.GeoJSON();
var features_nacionalidadetiqueta0 = format_nacionalidadetiqueta0.readFeatures(json_nacionalidadetiqueta0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nacionalidadetiqueta0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_nacionalidadetiqueta0.addFeatures(features_nacionalidadetiqueta0);var lyr_nacionalidadetiqueta0 = new ol.layer.Vector({
                source:jsonSource_nacionalidadetiqueta0, 
                style: style_nacionalidadetiqueta0,
                title: 'nacionalidad etiqueta'
            });var format_Extranjeros1 = new ol.format.GeoJSON();
var features_Extranjeros1 = format_Extranjeros1.readFeatures(json_Extranjeros1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extranjeros1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Extranjeros1.addFeatures(features_Extranjeros1);var lyr_Extranjeros1 = new ol.layer.Vector({
                source:jsonSource_Extranjeros1, 
                style: style_Extranjeros1,
                title: 'Extranjeros<br />\
        <img src="styles/legend/Extranjeros1_0.png" />  3% - 8% <br />\
        <img src="styles/legend/Extranjeros1_1.png" /> 8% - 13% <br />\
        <img src="styles/legend/Extranjeros1_2.png" /> 13% - 18% <br />\
        <img src="styles/legend/Extranjeros1_3.png" /> 18% - 23% <br />\
        <img src="styles/legend/Extranjeros1_4.png" /> 23% - 28% <br />'
            });var format_DISTRITOS2 = new ol.format.GeoJSON();
var features_DISTRITOS2 = format_DISTRITOS2.readFeatures(json_DISTRITOS2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOS2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DISTRITOS2.addFeatures(features_DISTRITOS2);var lyr_DISTRITOS2 = new ol.layer.Vector({
                source:jsonSource_DISTRITOS2, 
                style: style_DISTRITOS2,
                title: '<img src="styles/legend/DISTRITOS2.png" /> DISTRITOS'
            });

lyr_nacionalidadetiqueta0.setVisible(true);lyr_Extranjeros1.setVisible(true);lyr_DISTRITOS2.setVisible(true);
var layersList = [lyr_nacionalidadetiqueta0,lyr_Extranjeros1,lyr_DISTRITOS2];
lyr_nacionalidadetiqueta0.set('fieldAliases', {'qc_id': 'qc_id', 'cartodb_id': 'cartodb_id', 'nomdis': 'nomdis', 'codbar': 'codbar', 'coddistrit': 'coddistrit', 'codbarrio': 'codbarrio', 'nombre': 'nombre', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'created_at': 'created_at', 'updated_at': 'updated_at', 'población extranjera 2_distrito': 'población extranjera 2_distrito', 'población extranjera 2_% de extranjeros': 'población extranjera 2_% de extranjeros', 'población extranjera 2_alemania': 'población extranjera 2_alemania', 'población extranjera 2_argentina': 'población extranjera 2_argentina', 'población extranjera 2_bangladesh': 'población extranjera 2_bangladesh', 'población extranjera 2_bolivia': 'población extranjera 2_bolivia', 'población extranjera 2_brasil': 'población extranjera 2_brasil', 'población extranjera 2_bulgaria': 'población extranjera 2_bulgaria', 'población extranjera 2_chile': 'población extranjera 2_chile', 'población extranjera 2_china': 'población extranjera 2_china', 'población extranjera 2_colombia': 'población extranjera 2_colombia', 'población extranjera 2_cuba': 'población extranjera 2_cuba', 'población extranjera 2_ecuador': 'población extranjera 2_ecuador', 'población extranjera 2_el salvador': 'población extranjera 2_el salvador', 'población extranjera 2_estados unidos': 'población extranjera 2_estados unidos', 'población extranjera 2_filipinas': 'población extranjera 2_filipinas', 'población extranjera 2_francia': 'población extranjera 2_francia', 'población extranjera 2_honduras': 'población extranjera 2_honduras', 'población extranjera 2_india': 'población extranjera 2_india', 'población extranjera 2_italia': 'población extranjera 2_italia', 'población extranjera 2_marruecos': 'población extranjera 2_marruecos', 'población extranjera 2_méjico': 'población extranjera 2_méjico', 'población extranjera 2_nicaragua': 'población extranjera 2_nicaragua', 'población extranjera 2_paraguay': 'población extranjera 2_paraguay', 'población extranjera 2_perú': 'población extranjera 2_perú', 'población extranjera 2_polonia': 'población extranjera 2_polonia', 'población extranjera 2_portugal': 'población extranjera 2_portugal', 'población extranjera 2_reino unido': 'población extranjera 2_reino unido', 'población extranjera 2_república dominicana': 'población extranjera 2_república dominicana', 'población extranjera 2_rumanía': 'población extranjera 2_rumanía', 'población extranjera 2_rusia': 'población extranjera 2_rusia', 'población extranjera 2_senegal': 'población extranjera 2_senegal', 'población extranjera 2_ucrania': 'población extranjera 2_ucrania', 'población extranjera 2_venezuela': 'población extranjera 2_venezuela', 'población extranjera 2_resto de países': 'población extranjera 2_resto de países', 'población extranjera 2_ciudad de madrid': 'población extranjera 2_ciudad de madrid', 'población extranjera 2_españa': 'población extranjera 2_españa', 'población extranjera 2_nacionalidad más numerosa': 'población extranjera 2_nacionalidad más numerosa', });
lyr_Extranjeros1.set('fieldAliases', {'qc_id': 'qc_id', 'cartodb_id': 'cartodb_id', 'nomdis': 'nomdis', 'codbar': 'codbar', 'coddistrit': 'coddistrit', 'codbarrio': 'codbarrio', 'nombre': 'nombre', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'created_at': 'created_at', 'updated_at': 'updated_at', 'población extranjera 2_distrito': 'población extranjera 2_distrito', 'población extranjera 2_% de extranjeros': 'población extranjera 2_% de extranjeros', 'población extranjera 2_alemania': 'población extranjera 2_alemania', 'población extranjera 2_argentina': 'población extranjera 2_argentina', 'población extranjera 2_bangladesh': 'población extranjera 2_bangladesh', 'población extranjera 2_bolivia': 'población extranjera 2_bolivia', 'población extranjera 2_brasil': 'población extranjera 2_brasil', 'población extranjera 2_bulgaria': 'población extranjera 2_bulgaria', 'población extranjera 2_chile': 'población extranjera 2_chile', 'población extranjera 2_china': 'población extranjera 2_china', 'población extranjera 2_colombia': 'población extranjera 2_colombia', 'población extranjera 2_cuba': 'población extranjera 2_cuba', 'población extranjera 2_ecuador': 'población extranjera 2_ecuador', 'población extranjera 2_el salvador': 'población extranjera 2_el salvador', 'población extranjera 2_estados unidos': 'población extranjera 2_estados unidos', 'población extranjera 2_filipinas': 'población extranjera 2_filipinas', 'población extranjera 2_francia': 'población extranjera 2_francia', 'población extranjera 2_honduras': 'población extranjera 2_honduras', 'población extranjera 2_india': 'población extranjera 2_india', 'población extranjera 2_italia': 'población extranjera 2_italia', 'población extranjera 2_marruecos': 'población extranjera 2_marruecos', 'población extranjera 2_méjico': 'población extranjera 2_méjico', 'población extranjera 2_nicaragua': 'población extranjera 2_nicaragua', 'población extranjera 2_paraguay': 'población extranjera 2_paraguay', 'población extranjera 2_perú': 'población extranjera 2_perú', 'población extranjera 2_polonia': 'población extranjera 2_polonia', 'población extranjera 2_portugal': 'población extranjera 2_portugal', 'población extranjera 2_reino unido': 'población extranjera 2_reino unido', 'población extranjera 2_república dominicana': 'población extranjera 2_república dominicana', 'población extranjera 2_rumanía': 'población extranjera 2_rumanía', 'población extranjera 2_rusia': 'población extranjera 2_rusia', 'población extranjera 2_senegal': 'población extranjera 2_senegal', 'población extranjera 2_ucrania': 'población extranjera 2_ucrania', 'población extranjera 2_venezuela': 'población extranjera 2_venezuela', 'población extranjera 2_resto de países': 'población extranjera 2_resto de países', 'población extranjera 2_ciudad de madrid': 'población extranjera 2_ciudad de madrid', 'población extranjera 2_españa': 'población extranjera 2_españa', 'población extranjera 2_nacionalidad más numerosa': 'población extranjera 2_nacionalidad más numerosa', });
lyr_DISTRITOS2.set('fieldAliases', {'qc_id': 'qc_id', 'nombre': 'nombre', 'coddistrit': 'coddistrit', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'var 100': 'var 100', });
lyr_nacionalidadetiqueta0.set('fieldImages', {'qc_id': 'TextEdit', 'cartodb_id': 'TextEdit', 'nomdis': 'TextEdit', 'codbar': 'TextEdit', 'coddistrit': 'TextEdit', 'codbarrio': 'TextEdit', 'nombre': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'población extranjera 2_distrito': 'TextEdit', 'población extranjera 2_% de extranjeros': 'TextEdit', 'población extranjera 2_alemania': 'TextEdit', 'población extranjera 2_argentina': 'TextEdit', 'población extranjera 2_bangladesh': 'TextEdit', 'población extranjera 2_bolivia': 'TextEdit', 'población extranjera 2_brasil': 'TextEdit', 'población extranjera 2_bulgaria': 'TextEdit', 'población extranjera 2_chile': 'TextEdit', 'población extranjera 2_china': 'TextEdit', 'población extranjera 2_colombia': 'TextEdit', 'población extranjera 2_cuba': 'TextEdit', 'población extranjera 2_ecuador': 'TextEdit', 'población extranjera 2_el salvador': 'TextEdit', 'población extranjera 2_estados unidos': 'TextEdit', 'población extranjera 2_filipinas': 'TextEdit', 'población extranjera 2_francia': 'TextEdit', 'población extranjera 2_honduras': 'TextEdit', 'población extranjera 2_india': 'TextEdit', 'población extranjera 2_italia': 'TextEdit', 'población extranjera 2_marruecos': 'TextEdit', 'población extranjera 2_méjico': 'TextEdit', 'población extranjera 2_nicaragua': 'TextEdit', 'población extranjera 2_paraguay': 'TextEdit', 'población extranjera 2_perú': 'TextEdit', 'población extranjera 2_polonia': 'TextEdit', 'población extranjera 2_portugal': 'TextEdit', 'población extranjera 2_reino unido': 'TextEdit', 'población extranjera 2_república dominicana': 'TextEdit', 'población extranjera 2_rumanía': 'TextEdit', 'población extranjera 2_rusia': 'TextEdit', 'población extranjera 2_senegal': 'TextEdit', 'población extranjera 2_ucrania': 'TextEdit', 'población extranjera 2_venezuela': 'TextEdit', 'población extranjera 2_resto de países': 'TextEdit', 'población extranjera 2_ciudad de madrid': 'TextEdit', 'población extranjera 2_españa': 'TextEdit', 'población extranjera 2_nacionalidad más numerosa': 'TextEdit', });
lyr_Extranjeros1.set('fieldImages', {'qc_id': 'TextEdit', 'cartodb_id': 'TextEdit', 'nomdis': 'TextEdit', 'codbar': 'TextEdit', 'coddistrit': 'TextEdit', 'codbarrio': 'TextEdit', 'nombre': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'created_at': 'TextEdit', 'updated_at': 'TextEdit', 'población extranjera 2_distrito': 'TextEdit', 'población extranjera 2_% de extranjeros': 'TextEdit', 'población extranjera 2_alemania': 'TextEdit', 'población extranjera 2_argentina': 'TextEdit', 'población extranjera 2_bangladesh': 'TextEdit', 'población extranjera 2_bolivia': 'TextEdit', 'población extranjera 2_brasil': 'TextEdit', 'población extranjera 2_bulgaria': 'TextEdit', 'población extranjera 2_chile': 'TextEdit', 'población extranjera 2_china': 'TextEdit', 'población extranjera 2_colombia': 'TextEdit', 'población extranjera 2_cuba': 'TextEdit', 'población extranjera 2_ecuador': 'TextEdit', 'población extranjera 2_el salvador': 'TextEdit', 'población extranjera 2_estados unidos': 'TextEdit', 'población extranjera 2_filipinas': 'TextEdit', 'población extranjera 2_francia': 'TextEdit', 'población extranjera 2_honduras': 'TextEdit', 'población extranjera 2_india': 'TextEdit', 'población extranjera 2_italia': 'TextEdit', 'población extranjera 2_marruecos': 'TextEdit', 'población extranjera 2_méjico': 'TextEdit', 'población extranjera 2_nicaragua': 'TextEdit', 'población extranjera 2_paraguay': 'TextEdit', 'población extranjera 2_perú': 'TextEdit', 'población extranjera 2_polonia': 'TextEdit', 'población extranjera 2_portugal': 'TextEdit', 'población extranjera 2_reino unido': 'TextEdit', 'población extranjera 2_república dominicana': 'TextEdit', 'población extranjera 2_rumanía': 'TextEdit', 'población extranjera 2_rusia': 'TextEdit', 'población extranjera 2_senegal': 'TextEdit', 'población extranjera 2_ucrania': 'TextEdit', 'población extranjera 2_venezuela': 'TextEdit', 'población extranjera 2_resto de países': 'TextEdit', 'población extranjera 2_ciudad de madrid': 'TextEdit', 'población extranjera 2_españa': 'TextEdit', 'población extranjera 2_nacionalidad más numerosa': 'TextEdit', });
lyr_DISTRITOS2.set('fieldImages', {'qc_id': 'TextEdit', 'nombre': 'TextEdit', 'coddistrit': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'var 100': 'TextEdit', });
lyr_nacionalidadetiqueta0.set('fieldLabels', {'qc_id': 'no label', 'cartodb_id': 'no label', 'nomdis': 'no label', 'codbar': 'no label', 'coddistrit': 'no label', 'codbarrio': 'no label', 'nombre': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'created_at': 'no label', 'updated_at': 'no label', 'población extranjera 2_distrito': 'no label', 'población extranjera 2_% de extranjeros': 'no label', 'población extranjera 2_alemania': 'no label', 'población extranjera 2_argentina': 'no label', 'población extranjera 2_bangladesh': 'no label', 'población extranjera 2_bolivia': 'no label', 'población extranjera 2_brasil': 'no label', 'población extranjera 2_bulgaria': 'no label', 'población extranjera 2_chile': 'no label', 'población extranjera 2_china': 'no label', 'población extranjera 2_colombia': 'no label', 'población extranjera 2_cuba': 'no label', 'población extranjera 2_ecuador': 'no label', 'población extranjera 2_el salvador': 'no label', 'población extranjera 2_estados unidos': 'no label', 'población extranjera 2_filipinas': 'no label', 'población extranjera 2_francia': 'no label', 'población extranjera 2_honduras': 'no label', 'población extranjera 2_india': 'no label', 'población extranjera 2_italia': 'no label', 'población extranjera 2_marruecos': 'no label', 'población extranjera 2_méjico': 'no label', 'población extranjera 2_nicaragua': 'no label', 'población extranjera 2_paraguay': 'no label', 'población extranjera 2_perú': 'no label', 'población extranjera 2_polonia': 'no label', 'población extranjera 2_portugal': 'no label', 'población extranjera 2_reino unido': 'no label', 'población extranjera 2_república dominicana': 'no label', 'población extranjera 2_rumanía': 'no label', 'población extranjera 2_rusia': 'no label', 'población extranjera 2_senegal': 'no label', 'población extranjera 2_ucrania': 'no label', 'población extranjera 2_venezuela': 'no label', 'población extranjera 2_resto de países': 'no label', 'población extranjera 2_ciudad de madrid': 'no label', 'población extranjera 2_españa': 'no label', 'población extranjera 2_nacionalidad más numerosa': 'no label', });
lyr_Extranjeros1.set('fieldLabels', {'qc_id': 'no label', 'cartodb_id': 'no label', 'nomdis': 'no label', 'codbar': 'no label', 'coddistrit': 'no label', 'codbarrio': 'no label', 'nombre': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'created_at': 'no label', 'updated_at': 'no label', 'población extranjera 2_distrito': 'no label', 'población extranjera 2_% de extranjeros': 'no label', 'población extranjera 2_alemania': 'no label', 'población extranjera 2_argentina': 'no label', 'población extranjera 2_bangladesh': 'no label', 'población extranjera 2_bolivia': 'no label', 'población extranjera 2_brasil': 'no label', 'población extranjera 2_bulgaria': 'no label', 'población extranjera 2_chile': 'no label', 'población extranjera 2_china': 'no label', 'población extranjera 2_colombia': 'no label', 'población extranjera 2_cuba': 'no label', 'población extranjera 2_ecuador': 'no label', 'población extranjera 2_el salvador': 'no label', 'población extranjera 2_estados unidos': 'no label', 'población extranjera 2_filipinas': 'no label', 'población extranjera 2_francia': 'no label', 'población extranjera 2_honduras': 'no label', 'población extranjera 2_india': 'no label', 'población extranjera 2_italia': 'no label', 'población extranjera 2_marruecos': 'no label', 'población extranjera 2_méjico': 'no label', 'población extranjera 2_nicaragua': 'no label', 'población extranjera 2_paraguay': 'no label', 'población extranjera 2_perú': 'no label', 'población extranjera 2_polonia': 'no label', 'población extranjera 2_portugal': 'no label', 'población extranjera 2_reino unido': 'no label', 'población extranjera 2_república dominicana': 'no label', 'población extranjera 2_rumanía': 'no label', 'población extranjera 2_rusia': 'no label', 'población extranjera 2_senegal': 'no label', 'población extranjera 2_ucrania': 'no label', 'población extranjera 2_venezuela': 'no label', 'población extranjera 2_resto de países': 'no label', 'población extranjera 2_ciudad de madrid': 'no label', 'población extranjera 2_españa': 'no label', 'población extranjera 2_nacionalidad más numerosa': 'no label', });
lyr_DISTRITOS2.set('fieldLabels', {'qc_id': 'no label', 'nombre': 'no label', 'coddistrit': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'var 100': 'no label', });
lyr_DISTRITOS2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});