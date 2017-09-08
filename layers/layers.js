var format_ALQUILER0 = new ol.format.GeoJSON();
var features_ALQUILER0 = format_ALQUILER0.readFeatures(json_ALQUILER0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALQUILER0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ALQUILER0.addFeatures(features_ALQUILER0);var lyr_ALQUILER0 = new ol.layer.Vector({
                source:jsonSource_ALQUILER0, 
                style: style_ALQUILER0,
                title: 'ALQUILER<br />\
        <img src="styles/legend/ALQUILER0_0.png" />  0.0 - 10.0 <br />\
        <img src="styles/legend/ALQUILER0_1.png" />  10.0 - 20.0 <br />\
        <img src="styles/legend/ALQUILER0_2.png" />  20.0 - 30.0 <br />\
        <img src="styles/legend/ALQUILER0_3.png" />  30.0 - 40.0 <br />\
        <img src="styles/legend/ALQUILER0_4.png" />  40.0 - 50.0 <br />\
        <img src="styles/legend/ALQUILER0_5.png" />  50.0 - 60.0 <br />\
        <img src="styles/legend/ALQUILER0_6.png" />  60.0 - 70.0 <br />\
        <img src="styles/legend/ALQUILER0_7.png" />  70.0 - 80.0 <br />\
        <img src="styles/legend/ALQUILER0_8.png" />  80.0 - 90.0 <br />\
        <img src="styles/legend/ALQUILER0_9.png" />  90.0 - 100.0 <br />'
            });var format_DISTRITOSMADRID1 = new ol.format.GeoJSON();
var features_DISTRITOSMADRID1 = format_DISTRITOSMADRID1.readFeatures(json_DISTRITOSMADRID1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DISTRITOSMADRID1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DISTRITOSMADRID1.addFeatures(features_DISTRITOSMADRID1);var lyr_DISTRITOSMADRID1 = new ol.layer.Vector({
                source:jsonSource_DISTRITOSMADRID1, 
                style: style_DISTRITOSMADRID1,
                title: '<img src="styles/legend/DISTRITOSMADRID1.png" /> DISTRITOS MADRID'
            });var format_MUNICIPIOS2 = new ol.format.GeoJSON();
var features_MUNICIPIOS2 = format_MUNICIPIOS2.readFeatures(json_MUNICIPIOS2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MUNICIPIOS2.addFeatures(features_MUNICIPIOS2);var lyr_MUNICIPIOS2 = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOS2, 
                style: style_MUNICIPIOS2,
                title: '<img src="styles/legend/MUNICIPIOS2.png" /> MUNICIPIOS'
            });

lyr_ALQUILER0.setVisible(true);lyr_DISTRITOSMADRID1.setVisible(true);lyr_MUNICIPIOS2.setVisible(true);
var layersList = [lyr_ALQUILER0,lyr_DISTRITOSMADRID1,lyr_MUNICIPIOS2];
lyr_ALQUILER0.set('fieldAliases', {'CODBDT': 'CODBDT', 'GEOCODIGO': 'GEOCODIGO', 'DESBDT': 'DESBDT', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Cociente_regimen_tenencia': 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Cociente_regimen_tenencia', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Vivendas_propiedad': 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Vivendas_propiedad', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad': 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad2': 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad2', });
lyr_DISTRITOSMADRID1.set('fieldAliases', {'CODBDT': 'CODBDT', 'GEOCODIGO': 'GEOCODIGO', 'DESBDT': 'Distrito', 'Datos distritos Hoja1 None_Viviendas_totales': 'Viviendas totales', 'Datos distritos Hoja1 None_Viviendas_propiedad': 'Datos distritos Hoja1 None_Viviendas_propiedad', 'Datos distritos Hoja1 None_Viviendas_alquiler': 'Datos distritos Hoja1 None_Viviendas_alquiler', 'Datos distritos Hoja1 None_Viviendas_principales': 'Datos distritos Hoja1 None_Viviendas_principales', 'Datos distritos Hoja1 None_%_alquiler': 'Vivienda en alquiler (%)', 'Datos distritos Hoja1 None_%_propiedad': 'Datos distritos Hoja1 None_%_propiedad', });
lyr_MUNICIPIOS2.set('fieldAliases', {'CODBDT': 'CODBDT', 'GEOCODIGO': 'GEOCODIGO', 'DESBDT': 'DESBDT', '%_alq': 'Vivienda en alquiler (%)', 'U_MUNICIPIO': 'Municipio', 'U_VIVIENDAS TOTALES': 'Viviendas totales', 'U_VIVIENDAS PRINCIPALES': 'U_VIVIENDAS PRINCIPALES', 'U_ALQUILER_%': 'U_ALQUILER_%', 'U_PROPIEDAD_%': 'U_PROPIEDAD_%', });
lyr_ALQUILER0.set('fieldImages', {'CODBDT': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'DESBDT': 'TextEdit', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Cociente_regimen_tenencia': 'TextEdit', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Vivendas_propiedad': 'TextEdit', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad': 'TextEdit', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad2': 'TextEdit', });
lyr_DISTRITOSMADRID1.set('fieldImages', {'CODBDT': 'Hidden', 'GEOCODIGO': 'Hidden', 'DESBDT': 'TextEdit', 'Datos distritos Hoja1 None_Viviendas_totales': 'TextEdit', 'Datos distritos Hoja1 None_Viviendas_propiedad': 'Hidden', 'Datos distritos Hoja1 None_Viviendas_alquiler': 'Hidden', 'Datos distritos Hoja1 None_Viviendas_principales': 'Hidden', 'Datos distritos Hoja1 None_%_alquiler': 'TextEdit', 'Datos distritos Hoja1 None_%_propiedad': 'Hidden', });
lyr_MUNICIPIOS2.set('fieldImages', {'CODBDT': 'Hidden', 'GEOCODIGO': 'Hidden', 'DESBDT': 'Hidden', '%_alq': 'TextEdit', 'U_MUNICIPIO': 'TextEdit', 'U_VIVIENDAS TOTALES': 'TextEdit', 'U_VIVIENDAS PRINCIPALES': 'Hidden', 'U_ALQUILER_%': 'Hidden', 'U_PROPIEDAD_%': 'Hidden', });
lyr_ALQUILER0.set('fieldLabels', {'CODBDT': 'no label', 'GEOCODIGO': 'no label', 'DESBDT': 'no label', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Cociente_regimen_tenencia': 'no label', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_Vivendas_propiedad': 'no label', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad': 'no label', 'C2011_Indicadores_regimen_vivienda_SECCIONES 13 None_%_viviendas_propiedad2': 'no label', });
lyr_DISTRITOSMADRID1.set('fieldLabels', {'DESBDT': 'inline label', 'Datos distritos Hoja1 None_Viviendas_totales': 'inline label', 'Datos distritos Hoja1 None_%_alquiler': 'inline label', });
lyr_MUNICIPIOS2.set('fieldLabels', {'%_alq': 'inline label', 'U_MUNICIPIO': 'inline label', 'U_VIVIENDAS TOTALES': 'inline label', });
lyr_MUNICIPIOS2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});