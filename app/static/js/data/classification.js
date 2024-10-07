const classificationIcons = {
  'Dépression tropicale': '/static/images/icons/b_TropicalDepression.png',
  'Tempête tropicale': '/static/images/icons/c_TropicalStorm.png',
  'Ouragan de catégorie 1': '/static/icons/icons/1.png',
  'Ouragan de catégorie 2': '/static/images/icons/2.png',
  'Ouragan de catégorie 3': '/static/images/icons/3.png',
  'Ouragan de catégorie 4': '/static/images/icons/4.png',
  'Ouragan de catégorie 5': '/static/images/icons/5.png',
  'Cyclone tropical de catégorie 1': '/static/images/icons/1.png',
  'Cyclone tropical de catégorie 2': '/static/images/icons/2.png',
  'Cyclone tropical de catégorie 3': '/static/images/icons/3.png',
  'Cyclone tropical de catégorie 4': '/static/images/icons/4.png',
  'Cyclone tropical de catégorie 5': '/static/images/icons/5.png',
  'Typhon': '/static/images/icons/typhoon.png',
  'Super Typhon': '/static/images/icons/typhoon.png',
  'Perturbation tropicale/dépression/dépression': '/static/images/icons/wind.png',
  'Zone de basse pression': '/static/images/icons/wind.png',
  'Dépression': '/static/images/icons/wind.png',
  'Dépression profonde': '/static/images/icons/wind.png',
  'Tempête cyclonique': '/static/images/icons/c_TropicalStorm.png',
  'Tempête cyclonique violente': '/static/images/icons/1.png',
  'Tempête cyclonique très violente': '/static/images/icons/2.png',
  'Tempête cyclonique extrêmement violente': '/static/images/icons/3.png',
  'Tempête super cyclonique': '/static/images/icons/4.png',
  'Zone de temps perturbé': '/static/images/icons/wind.png',
  'Perturbation tropicale': '/static/images/icons/wind.png',
  'Tempête tropicale modérée': '/static/images/icons/c_TropicalStorm.png',
  'Tempête tropicale sévère': '/static/images/icons/1.png',
  'Cyclone tropical': '/static/images/icons/2.png',
  'Cyclone tropical intense': '/static/images/icons/3.png',
  'Cyclone tropical très intense': '/static/images/icons/4.png',
};

export default function getIconUrl(classification) {
  return classificationIcons[classification] || '/static/images/hurricane.png';
}
