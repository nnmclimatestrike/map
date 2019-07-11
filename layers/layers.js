var wms_layers = [];
var format_tl_2015_35_cousub_0 = new ol.format.GeoJSON();
var features_tl_2015_35_cousub_0 = format_tl_2015_35_cousub_0.readFeatures(json_tl_2015_35_cousub_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2015_35_cousub_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_tl_2015_35_cousub_0.addFeatures(features_tl_2015_35_cousub_0);var lyr_tl_2015_35_cousub_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tl_2015_35_cousub_0, 
                style: style_tl_2015_35_cousub_0,
                title: '<img src="styles/legend/tl_2015_35_cousub_0.png" /> tl_2015_35_cousub'
            });var format_tl_2015_35049_roads_1 = new ol.format.GeoJSON();
var features_tl_2015_35049_roads_1 = format_tl_2015_35049_roads_1.readFeatures(json_tl_2015_35049_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2015_35049_roads_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_tl_2015_35049_roads_1.addFeatures(features_tl_2015_35049_roads_1);var lyr_tl_2015_35049_roads_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tl_2015_35049_roads_1, 
                style: style_tl_2015_35049_roads_1,
                title: '<img src="styles/legend/tl_2015_35049_roads_1.png" /> tl_2015_35049_roads'
            });var format_strikebusiness_2 = new ol.format.GeoJSON();
var features_strikebusiness_2 = format_strikebusiness_2.readFeatures(json_strikebusiness_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strikebusiness_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_strikebusiness_2.addFeatures(features_strikebusiness_2);var lyr_strikebusiness_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_strikebusiness_2, 
                style: style_strikebusiness_2,
                title: '<img src="styles/legend/strikebusiness_2.png" /> strike business'
            });

lyr_tl_2015_35_cousub_0.setVisible(true);lyr_tl_2015_35049_roads_1.setVisible(true);lyr_strikebusiness_2.setVisible(true);
var layersList = [lyr_tl_2015_35_cousub_0,lyr_tl_2015_35049_roads_1,lyr_strikebusiness_2];
lyr_tl_2015_35_cousub_0.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUSUBFP': 'COUSUBFP', 'COUSUBNS': 'COUSUBNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CNECTAFP': 'CNECTAFP', 'NECTAFP': 'NECTAFP', 'NCTADVFP': 'NCTADVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_tl_2015_35049_roads_1.set('fieldAliases', {'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_strikebusiness_2.set('fieldAliases', {'Organization': 'Business', 'Type': 'Type', 'Lat': 'Lat', 'Long': 'Long', });
lyr_tl_2015_35_cousub_0.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'COUSUBFP': 'Hidden', 'COUSUBNS': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'MTFCC': 'Hidden', 'CNECTAFP': 'Hidden', 'NECTAFP': 'Hidden', 'NCTADVFP': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', });
lyr_tl_2015_35049_roads_1.set('fieldImages', {'LINEARID': 'Hidden', 'FULLNAME': 'TextEdit', 'RTTYP': 'Hidden', 'MTFCC': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_strikebusiness_2.set('fieldImages', {'Organization': 'TextEdit', 'Type': 'TextEdit', 'Lat': 'Hidden', 'Long': 'Hidden', });
lyr_tl_2015_35_cousub_0.set('fieldLabels', {});
lyr_tl_2015_35049_roads_1.set('fieldLabels', {'FULLNAME': 'no label', });
lyr_strikebusiness_2.set('fieldLabels', {'Organization': 'header label', 'Type': 'no label', });
lyr_strikebusiness_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});