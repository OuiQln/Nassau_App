const db = require ('../index.js');

const newData = [ {
    _id: 1, 
    name: 'MILANO RIBBED RELAXED CREW NECK SWEATER',
    sku: '416619',
    stars: 4,
    reviews: 3,
    price: '29.90',
    colorNames: ['08 RED', '64 BLUE'],
    colors: ['f0ede1', '025c5e'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], 
    details: ['Sweater with a relaxed cut in elegant milano knit.','Part of a collection of progressive essentials created in our Paris atelier by artistic director Christophe Lemaire and a team of international designers.', 'Roomy, relaxed fit.', 'Elegant fine-gauge milano knit.', '100% high twist cotton for a dry handfeel.'], 
    material: '88% Cotton, 12% Nylon', 
    care: 'Hand wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_03.jpeg','https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_08.jpeg','https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_09.jpeg','https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_36.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_57.jpeg']
  }, 
  { 
    _id: 2,
    name: 'MEN SUPER NON-IRON SLIM-FIT LONG-SLEEVE SHIRT',
    sku: '411829',
    stars: 5,
    reviews: 6,
    price: '29.90',
    colors: ['f0f0f2','f8d9e5','ccd7ed'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], 
    details:['Our 100% cotton no-iron shirt! Comfortable, easy-care, and stylish.', 'Made with 80-count thread.', 'Now with no-iron processing so you can wear it right out of the dryer.', 'Special finishing and sewing produce the ultimate business shirt that minimizes time needed for care.', 'Armholes with curved angles to ensure freedom of movement.'], 
    material: '96% Cotton, 4% Spandex', 
    care: 'Machine wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_08.jpeg','https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409173_69.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_01.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_09.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_12.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_2.jpeg']
  },
  { 
    _id: 3,
    name: 'MEN ULTRA LIGHT DOWN JACKET',
    sku: '400504',
    stars: 4.25,
    Reviews: 142, 
    price: '69.90',
    colors: ['aeafa9', '5f696a', '343436', 'cc2a37', '265b63', '363d47'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: ['Our sleek ultra-light down jacket is thin, light, and super warm!', 'Premium down provides superb insulation and warmth.', 'Designed with a lightly shorter hem for a neat look and a sturdy stand collar.', 'Piping and zippers in an updated low-key, stylish matte finish.', 'Durable water-repellent coating sheds rain effectively.', 'Compact size and included carrying pouch for easy transport.'], 
    material: '[Shell] 100% Nylon [Filling] Body: Down (Minimum 90% Down) [Shoulder] Inner Layer: Down (Minimum 90% Down)/ Outer Layer: 100% Polyester/ Lining: 100% Nylon', 
    care: 'Hand wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_28.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_31.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_51.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_58.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_6.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_62.jpeg']
  }, 
  { 
    _id: 4,
    name: 'WOMEN U DRAWSTRING LONG-SLEEVE DRESS',
    sku: '415814',
    stars: 0,
    reviews: 0,
    price: '39.90',
    colors: ['f8f7f2', '27282c', '818b9d'],
    sizes: ['S', 'M', 'L', 'XL'], 
    details: ['Special mélange color. Elastic waist for extra comfort.', 'Part of a collection of progressive essentials created in our Paris atelier by artistic director Christophe Lemaire and a team of international designers.', 'Knee-length dress in a drop-shoulder design.', 'Made with 100% cotton jersey material.', 'Mock neck adds a touch of elegance to the casual look.', 'Elastic waistband and drawstring for easy size adjustment.', 'Side pockets.', 'Oversized Cut', 'Mélange effect made of 3 different color yarns.', 'Try sizing down for a snugger fit.'], 
    material: 'Body: 100% Cotton/ Rib: 95% Cotton, 5% Spandex', 
    care: 'Machine wash cold, gentle cycle', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_409211_62.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_03.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_08.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_43.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_56.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_64.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_69.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413065_7.jpeg']
  },
  { 
    _id: 5,
    name: 'MEN STRETCH SELVEDGE SLIM-FIT JEANS',
    sku: '413154',
    stars: 4.5,
    reviews: 5,
    price: '49.90',
    colors: ['e9e8e6', '211f20', '5a555e'],
    sizes: ['27inch', '28inch', '29inch', '30inch', '31inch', '32inch', '33inch', '34inch', '35inch', '36inch', '38inch', '40inch', '42inch', '44inch', '46inch', '48inch'], 
    details: ['Our stretch selvedge slim-fit jeans are cut straight below the knee for a flattering look.', 'Updated with a straight cut below the knee.', 'Authentic selvedge denim produced using old-fashioned looms, with stretch thread used in the weft for comfort.', 'The stiffer blue wash goes well with simple outfits, and you can break them in to your own taste.', 'Excess seam allowance was reduced to make the seams lay flat against the skin.'], 
    material: '[69 Navy] 98% Cotton, 2% Spandex [Other Color] 99% Cotton, 1% Spandex', 
    care: 'Machine wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_09.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_12.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_13.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_14.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_64.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_66.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_68.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413157_7.jpeg']
  },
  { 
    _id: 6,
    name: 'WOMEN PREMIUM LINEN LONG-SLEEVE SHIRT',
    sku: '414169',
    stars: 0,
    reviews: 0,
    price: '29.90',
    colors: ['ebebe9', 'f4d7d9', 'db609c', 'dad0cc', 'd2b395', 'f6e890', '78706c', 'cfd1e5', '27293a', 'cdbdd6'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'], 
    details: ['The ultimate shirt in 100% premium French linen with a new, simplified design.', 'Made with 100% French linen, an exceptionally high-quality fabric.', 'Updated for a new season with a shorter back yoke.', 'We’ve lowered the side slits, adjusted the collar and hem curvature, and modified the shoulder angle.', 'More versatile than ever.'], 
    material: '100% Linen', 
    care: 'Machine wash cold, gentle cycle', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_02.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_09.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_12.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_13.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_14.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_31.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_56.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_59.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_67.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413158_7.jpeg']
  },
  { 
    _id: 7,
    name: 'WOMEN EXTRA FINE COTTON STAND COLLAR LONG-SLEEVE SHIRT',
    sku: 414163,
    stars: 0,
    reviews: 0,
    price: '29.90',
    colors: ['e8e9ea', 'ccb49c', '2e3041'],
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'], 
    details: ['Wrinkle-resistant hybrid material. Relaxed tunic-length design.', 'The sturdy material is light and comfortable with a premium feel.', 'Roomy, loose silhouette.', 'On-trend skipper collar.', 'Slightly dropped shoulders and a gently curved back hem.', 'Long tunic-length cut.', 'Looks great worn untucked over slim pants.', 'Also pairs well with shorts or a skirt', 'Newly updated with polyester-cotton hybrid yarn, providing all the comfort of cotton with the added convenience of easy care.'], 
    material: '87% Cotton, 13% Polyester', 
    care: 'Machine wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_08.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_09.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_12.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_13.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_14.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_15.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_32.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413437_68.jpeg']
  },
  { 
    _id: 8,
    name: 'MEN U CREW NECK SHORT-SLEEVE T-SHIRT',
    sku: '409642',
    stars: 5,
    reviews: 19,
    price: '14.90',
    colors: ['d0315e', 'bd8641', '524532', '1f3241', '764b45'],
    sizes: ['XS', 'S', 'M', 'L',], 
    details: ['Made from 100% heavyweight cotton, this is the ultimate crew-neck T-shirt.', 'Relaxed fit.', 'Short sleeves', 'From our UNIQLO U collection, created by Christopher Lemaire and a team of international designers in our Paris Atelier.'], 
    material: '100% Cotton', 
    care: 'Machine wash cold', 
    pictures: ['https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_03.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_09.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_1.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_10.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_11.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_12.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_2.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_3.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_4.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_42.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_5.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_53.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_69.jpeg', 'https://s3-us-west-1.amazonaws.com/ouiqlndetailsimage/goods_413682_7.jpeg' ]
  },
]

let insertData = () => {
    db.insertMany(
        newData
    );
};
insertData();