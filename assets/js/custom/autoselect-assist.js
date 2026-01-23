const recommendedProducts = [
    {
        id: 1, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-31 MK3 8GB RAM 500GB HDD with Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 249.29, url: 'https://www.bobjohnson.com/scratch-dent-toughbook-cf-31-mk3-intel-core-i5-3320m-2-60ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/872/9991/Compressed_MG_9718__60851.1723226495.jpg?c=2',
    },
    {
        id: 2, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-31 MK4 8GB RAM 500GB HDD with Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 329.29, url: 'https://www.bobjohnson.com/toughbook-cf-31-mk4-intel-core-i3-3120m-2.5ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/955/10130/Compressed_MG_6714__84582.1727961631.jpg?c=2',
    },
    {
        id: 3, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-53 MK3 8GB RAM 500GB HDD Non-Touch', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'no', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 329.29, url: 'https://www.bobjohnson.com/scratch-dent-toughbook-cf-53-mk3-intel-core-i5-3340m-2-70ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1288/4873/SCRATCH_AND_DENT_CF-53_MK3_FRONT_SCREEN_DARK_RETAKES-Edit3__10560.1685468534.jpg?c=2',
    },
    {
        id: 4, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-53 MK4 8GB RAM 500GB HDD Non-Touch', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'no', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 429.29, url: 'https://www.bobjohnson.com/toughbook-cf53mk4sd-nontouch/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1543/8911/Compressed_MG_9905__95311.1711380432.jpg?c=2',
    },
    {
        id: 5, brand: 'Panasonic', name: 'Panasonic Toughbook CF-20 MK1 8GB RAM, 256GB SSD, Dual Touch', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['cold', 'dusty / dirty / sandy', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 499.28, url: 'https://www.bobjohnson.com/panasonic-toughbook-cf-20-mk1-dual-touch-intel-core-m5-6y57-1-10ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1587/9618/Compressed_MG_9991__36145.1719927048.jpg?c=2',
    },
    {
        id: 6, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-54 MK1 8GB RAM, 500GB HDD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: ['yes', 'no'], cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 499.28, url: 'https://www.bobjohnson.com/scratch-dent-toughbook-cf-54-mk1-8gb-ram-500gb-hdd-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1492/7918/Compressed_MG_9282__38479__28733__96549.1703791260.jpg?c=2',
    },
    {
        id: 7, brand: 'Panasonic', name: 'Toughbook CF-31 MK4 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 499.28, url: 'https://www.bobjohnson.com/toughbook-cf-31-mk4-16gb-ram-256gb-ssd-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/817/6503/_MG_0171-Edit_copy__82828__81763__33728__56384.1707762378.jpg?c=2',
    },
    {
        id: 8, brand: 'Panasonic', name: 'Scratch & Dent Getac S410 G1 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD'], price: 499.29, url: 'https://www.bobjohnson.com/semi-rugged-getac-s410-sdg1/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1449/5783/Compressed_MG_1669_copy__21450.1688062307.jpg?c=2',
    },
    {
        id: 9, brand: 'Panasonic', name: 'Toughbook CF-33 MK1 Tablet 8GB RAM, 256GB SSD, Contactless Smart Card, Serial Port, Extended Batteries, Touchscreen', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 499.29, url: 'https://www.bobjohnson.com/toughbook-cf33mk1-serialport-extendedbattery/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1642/10212/_Compressed_FrontFacingToughbook33Tablet__22599.1731445460.jpg?c=2',
    },
    {
        id: 10, brand: 'Getac', name: 'Getac S410 G3 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: ['serial', 'hDMI', 'sD'], price: 549.28, url: 'https://www.bobjohnson.com/semi-rugged-getac-s410g3i5/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1545/8977/Compressed_MG_9927__83625.1711485109.jpg?c=2',
    },
    {
        id: 11, brand: 'Panasonic', name: 'Toughbook CF-53 MK4 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 549.28, url: 'https://www.bobjohnson.com/toughbook-cf-53-mk4-intel-core-i5-4310u-2-00ghz-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/879/6699/_MG_0182-Edit_copy__33733__75467__14504.1725386507.jpg?c=2',
    },
    {
        id: 12, brand: 'Panasonic', name: 'Scratch & Dent Toughbook CF-54 MK2 8GB RAM, 500GB HDD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 649.29, url: 'https://www.bobjohnson.com/scratch-dent-toughbook-cf-54-mk2-8gb-ram-500gb-hdd-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1274/10081/Compressed_MG_0026__00274.1726858948.jpg?c=2',
    },
    {
        id: 13, brand: 'Dell', name: 'Dell Latitude 5424 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: ['serial', 'hDMI', 'sD'], price: 699.28, url: 'https://www.bobjohnson.com/dell-latitude-5424-intel-core-i5-8350u-1-70ghz-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1282/5771/DELL_LAT_5424_FRONT_OPEN-Edit2__94383__14091.1688061182.jpg?c=2',
    },
    {
        id: 14, brand: 'Getac', name: 'Getac K120 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 699.28, url: 'https://www.bobjohnson.com/getac-k120-fully-rugged-12-5-2-in-1/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1527/8758/Compressed_MG_9186__90894.1707160867.jpg?c=2',
    },
    {
        id: 15, brand: 'Panasonic', name: 'Panasonic Toughbook CF-20 MK2 8GB RAM, 256GB SSD, Dual Touch', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['cold', 'dusty / dirty / sandy', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 699.28, url: 'https://www.bobjohnson.com/panasonic-toughbook-cf-20-mk2-dual-touch-intel-core-m5-7y57-1-20ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1324/10004/Compressed_MG_9991__22361.1724433951.jpg?c=2',
    },
    {
        id: 16, brand: 'Panasonic', name: 'Toughbook CF-31 MK5 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'pCMCIA', 'hDMI', 'sD'], price: 699.28, url: 'https://www.bobjohnson.com/toughbook-cf-31-mk5-16gb-ram-256gb-ssd-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/933/6328/CF-31_MK5_Front__53353.1693576732.jpg?c=2',
    },
    {
        id: 17, brand: 'Panasonic', name: 'Toughbook CF-54 MK2 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 699.28, url: 'https://www.bobjohnson.com/toughbook-cf-54-mk2-intel-core-i5-6300u-2-40ghz-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1560/9284/Compressed_MG_9853__47462.1715694113.jpg?c=2',
    },
    {
        id: 18, brand: 'Panasonic', name: 'Toughbook CF-19 MK7 16GB RAM, 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'pCMCIA', 'sD'], price: 699.29, url: 'https://www.bobjohnson.com/toughbook-cf-19-mk7-intel-core-i5-3340m-2-70ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/967/10108/Compressed_MG_0066__17956.1727289716.jpg?c=2',
    },
    {
        id: 19, brand: 'Getac', name: 'Scratch and Dent Getac X500 G2 16GB RAM, 256GB SSD, Non-Touch', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: 'no', touchscreen: 'no', cellular: 'no', gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA'], price: 729.29, url: 'https://www.bobjohnson.com/refurbished-getac-x500g2/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1611/10221/Compressed_ScratchDentX500Front__63830.1733429619.jpg?c=2',
    },
    {
        id: 20, brand: 'Panasonic', name: 'Toughbook CF-54 MK3 16GB RAM, 256GB SSD, Non-Touch', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'no', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 799.28, url: 'https://www.bobjohnson.com/gradea-refurbished-panasonic-toughbook-cf-54-mk3/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1285/8481/Compressed_MG_9533__08798.1704822874.jpg?c=2',
    },
    {
        id: 21, brand: 'Panasonic', name: 'Toughbook CF-53 MK4 EXTREME 16GB RAM, 1TB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 849.28, url: 'https://www.bobjohnson.com/toughbook-cf-53-mk4-extreme/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1594/9771/Compressed_MG_8948_copy__08626.1721236146.jpg?c=2',
    },
    {
        id: 22, brand: 'Panasonic', name: 'Toughbook CF-33 MK1 Laptop 16GB RAM, 512GB SSD, Contactless Smart Card, Touchscreen', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 899.28, url: 'https://www.bobjohnson.com/toughbook-cf-33-intel-core-i5-7300u-barcode-reader-fingerprint-reader/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1462/6170/Compressed_MG_8922_copy__90888.1691510809.jpg?c=2',
    },
    {
        id: 23, brand: 'Panasonic', name: 'Toughbook CF-54 MK3 16GB RAM. 256GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 899.28, url: 'https://www.bobjohnson.com/toughbook-cf-54-mk3-intel-core-i5-7300u-2-60ghz-with-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1450/6319/Compressed_MG_9080_copy__45584.1693254744.jpg?c=2',
    },
    {
        id: 24, brand: 'Panasonic', name: 'Toughbook CF-19 MK8 Intel Core 16GB RAM, 256GB SSD, GPS, Touchscreen', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'pCMCIA', 'sD'], price: 899.29, url: 'https://www.bobjohnson.com/toughbook-cf-19-mk8-intel-core-i5-3610me-2-70ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1595/10099/Compressed_MG_0057__85013.1727279921.jpg?c=2',
    },
    {
        id: 25, brand: 'Panasonic', name: 'Toughbook CF-31 MK5 EXTREME 16GB RAM, 1TB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 949.28, url: 'https://www.bobjohnson.com/toughbook-cf-31-mk5-extreme/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1562/9873/Compressed_MG_9966__34728.1721928699.jpg?c=2',
    },
    {
        id: 26, brand: 'Panasonic', name: 'Toughbook CF-31 MK6 16GB RAM, 512GB SSD, GPS, 4G LTE, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA', 'sD'], price: 1299.28, url: 'https://www.bobjohnson.com/upgraded-toughbook-cf31mk6/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1599/9931/Toughbook_CF-31_MK6_Intel_Core_i5_7300U_2.60_copy__33838__24938__82292__64267.1722867118.jpg?c=2',
    },
    {
        id: 27, brand: 'Panasonic', name: 'Toughbook FZ-55 MK1 i5 16GB RAM, 512GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['hDMI', 'microSD'], price: 1299.28, url: 'https://www.bobjohnson.com/semi-rugged-toughbook-fz55mk1/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1483/10058/Compressed_MG_9999__60945.1726841221.jpg?c=2',
    },
    {
        id: 28, brand: 'Panasonic', name: 'Toughbook CF-33 MK1 Laptop 16GB RAM, 512GB SSD, Contactless Smart Card, Extended Batteries, Touchscreen', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['serial', 'hDMI', 'sD', 'microSD'], price: 1399.28, url: 'https://www.bobjohnson.com/extended-battery-cf33i7-toughbook/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1553/9155/Compressed_MG_0007__40283.1714661516.jpg?c=2',
    },
    {
        id: 29, brand: 'Panasonic', name: 'Toughbook FZ-55 MK1 i7 16GB RAM, 512GB SSD, Touchscreen', condition: 'refurbished', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: ['yes', 'no'], features: ['hDMI', 'microSD'], price: 1499.28, url: 'https://www.bobjohnson.com/panasonic-toughbook-fz-55-mk1i7-touchscreen/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1566/9421/Compressed_MG_9946__18727.1717099963.jpg?c=2',
    },
    {
        id: 30, brand: 'Durabook', name: 'Durabook S14 (G2) Standard', condition: 'new', formFactor: 'laptop', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: ['yes', 'no'], cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 1586.29, url: 'https://www.bobjohnson.com/durabook-s14-g2-standard/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1276/5820/Durabook-S14I-front__74671__14585.1732034351.jpg?c=2',
    },
    {
        id: 31, brand: 'Durabook', name: 'Durabook S15 Standard', condition: 'new', formFactor: 'laptop', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'no', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'microSD'], price: 1647.29, url: 'https://www.bobjohnson.com/durabook-s15-standard/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1552/9105/Compressed_front__22822.1713367848.jpg?c=2',
    },
    {
        id: 32, brand: 'Panasonic', name: 'Toughbook CF-33 MK2 Laptop 16GB RAM, 512GB SSD, Touchscreen', condition: 'refurbished', formFactor: ['laptop', 'tablet'], environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'no', gps: 'no', opticalDrive: 'no', features: ['serial', 'hDMI', 'microSD'], price: 1699.28, url: 'https://www.bobjohnson.com/toughbook-cf-33mk2i5-laptop/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1558/9241/Compressed_MG_0021__40237.1715273913.jpg?c=2',
    },
    {
        id: 33, brand: 'Durabook', name: 'Durabook S14 (G2) Field', condition: 'new', formFactor: 'laptop', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'no', gps: 'no', opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'sD'], price: 2299.29, url: 'https://www.bobjohnson.com/durabook-s14-g2-field/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1277/5896/Durabook_S14_G2_Field_Front__92831.1691072751.jpg?c=2',
    },
    {
        id: 34, brand: 'Durabook', name: 'Durabook Z14I (G2) Standard', condition: 'new', formFactor: 'laptop', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: ['yes', 'no'], features: ['serial', 'hDMI', 'pCMCIA'], price: 3167.29, url: 'https://www.bobjohnson.com/durabook-z14i-g2-standard/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1221/5815/Durabook-Z14I-Front__97236__22504.1689020373.jpg?c=2',
    },
    {
        id: 35, brand: 'Panasonic', name: 'Panasonic Toughbook CF-H2 MK2 4GB RAM, 120GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['dusty / dirty / sandy', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'serial', price: 199.28, url: 'https://www.bobjohnson.com/panasonic-toughbook-cf-h2-mk2-intel-core-i5-3427u-1-80ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/984/6732/h2_mk_front__65881__20411.1696274921.jpg?c=2',
    },
    {
        id: 36, brand: 'Panasonic', name: 'Panasonic Toughpad FZ-G1 MK2 8GB RAM, 128GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 199.28, url: 'https://www.bobjohnson.com/panasonic-toughpad-fz-g1-mk2-intel-core-i5-4310u-2-00ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/971/8407/Compressed_MG_8942_copy__95371__28475__74822__32822.1705440527.jpg?c=2',
    },
    {
        id: 37, brand: 'Panasonic', name: 'Panasonic Toughpad FZ-G1 MK3 8GB RAM, 256GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 299.28, url: 'https://www.bobjohnson.com/panasonic-toughpad-fz-g1-mk3-intel-core-i5-5300u-2-30ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1132/10133/Compressed_MG_6730__68617.1727973213.jpg?c=2',
    },
    {
        id: 38, brand: 'Zebra', name: 'Motion Zebra R12 8GB RAM, 256GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['dusty / dirty / sandy', 'hot', 'humid', 'oily'], drops: 'no', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'no', gps: 'no', opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 329.29, url: 'https://www.bobjohnson.com/motion-zebra-r12-rugged-tablet/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1441/5434/_MG_0231_copy__93438.1682430392.jpg?c=2',
    },
    {
        id: 39, brand: 'Getac', name: 'Scratch & Dent Getac F110 G2 8GB RAM, 128GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 429.29, url: 'https://www.bobjohnson.com/refurbished-fully-rugged-getac-f110g2sd-tablet/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1512/8495/Compressed_MG_9524__17373.1704833505.jpg?c=2',
    },
    {
        id: 40, brand: 'Panasonic', name: 'Panasonic Toughpad FZ-G1 MK4 8GB RAM, 256GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 429.29, url: 'https://www.bobjohnson.com/panasonic-toughpad-fz-g1-mk4-intel-core-i5-6300u-2-40ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1252/6757/PANASONIC_FZG1_FRONT__92628__51256__50209.1707836615.jpg?c=2',
    },
    {
        id: 41, brand: 'Panasonic', name: 'Panasonic Toughpad FZ-G1 MK4 8GB RAM, 256GB SSD, Mobile Data', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 599.28, url: 'https://www.bobjohnson.com/panasonic-toughpad-fzg1-mk4-mobile-data/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1521/8689/Compressed__MG_9589__80456.1706285968.jpg?c=2',
    },
    {
        id: 42, brand: 'Panasonic', name: 'Panasonic Toughpad FZ-G1 MK5 8GB RAM, 256GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 799.28, url: 'https://www.bobjohnson.com/panasonic-toughpad-fz-g1-mk5-intel-i5-7300u-2-60ghz/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1443/9959/Compressed_MG_9984__95760.1723045148.jpg?c=2',
    },
    {
        id: 43, brand: 'Getac', name: 'Getac F110 G3 16GB RAM, 256GB SSD', condition: 'refurbished', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: 'no', opticalDrive: 'no', features: 'hDMI', price: 999.28, url: 'https://www.bobjohnson.com/getac-f110-g3-intel-core-i5-6200u-2-30ghz-tablet/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1356/9977/Compressed_MG_0006__88649.1723141956.jpg?c=2',
    },
    {
        id: 44, brand: 'Durabook', name: 'Durabook R11 Standard (Open Box)', condition: 'new', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'no', gps: 'no', opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 1529.29, url: 'https://www.bobjohnson.com/durabook-r11-standard-open-box/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1444/5488/r11_front__97270.1686066187.jpg?c=2',
    },
    {
        id: 45, brand: 'Durabook', name: 'Durabook R11 Standard', condition: 'new', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 1647.29, url: 'https://www.bobjohnson.com/fully-rugged-durabook-r11-standard/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1550/9081/Compressed_A-01__85693.1713367807.jpg?c=2',
    },
    {
        id: 46, brand: 'Durabook', name: 'Durabook R8 Standard', condition: 'new', formFactor: 'tablet', environment: ['cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: 'microSD', price: 1655.29, url: 'https://www.bobjohnson.com/durabook-r8-standard/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1440/5863/R8-FRONT-Hero-W11-01-768x518.png__19761__66100.1689025891.jpg?c=2',
    },
    {
        id: 47, brand: 'Durabook', name: 'Durabook R11 Field', condition: 'new', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'no', gps: 'no', opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 2129.29, url: 'https://www.bobjohnson.com/durabook-r11-field/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1551/9090/Compressed_A-01__01489.1713367825.jpg?c=2',
    },
    {
        id: 48, brand: 'Durabook', name: 'Durabook U11-G3 Standard Tablet', condition: 'new', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: ['yes', 'no'], gps: ['yes', 'no'], opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 2182.29, url: 'https://www.bobjohnson.com/durabook-u11-g3-standard-tablet/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1225/6728/durabook-U11-front-Win10__20676__21725.1699973104.jpg?c=2',
    },
    {
        id: 49, brand: 'Durabook', name: 'Durabook U11-G3 Field', condition: 'new', formFactor: 'tablet', environment: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'], drops: 'yes', vehicle: ['yes', 'no'], touchscreen: 'yes', cellular: 'yes', gps: 'yes', opticalDrive: 'no', features: ['hDMI', 'microSD'], price: 2530.29, url: 'https://www.bobjohnson.com/durabook-u11-g3-field/', img: 'https://cdn11.bigcommerce.com/s-8lxh1/images/stencil/640w/products/1226/5751/durabook-U11-front-Win10__81675__23883.1688061701.jpg?c=2',
    },
];

const questions = [
    {
        key: 'condition', question: 'Do you want to know about new computers or refurbished?', options: ['new', 'refurbished', 'either'],
    },
    {
        key: 'formFactor', question: 'What type of computer are you looking for?', options: ['laptop', 'tablet', 'either'],
    },
    {
        key: 'environment', question: 'Which of the following words would best describe your environment?', options: ['bright / sunny', 'cold', 'dusty / dirty / sandy', 'hot', 'humid', 'oily', 'rough', 'wet'],
    },
    {
        key: 'drops', question: 'Will this computer be subject to drops, shocks, or vibration?', options: ['yes', 'no'],
    },
    {
        lkey: 'vehicle', question: 'Will you be operating this computer in a moving vehicle?', options: ['yes', 'no'],
    },
    {
        key: 'touchscreen', question: 'Will you require a touch screen? (If you are looking for a tablet, answer \'yes\')', options: ['yes', 'no', "it isn't essential"],
    },
    {
        key: 'cellular', question: 'Will you require mobile data connectivity?', options: ['yes', 'no', "it isn't essential"],
    },
    {
        key: 'gps', question: 'Will you require a GPS receiver?', options: ['yes', 'no', "it isn't essential"],
    },
    {
        key: 'opticalDrive', question: 'Will you require an optical drive? (If you are looking for a tablet, answer \'no\')', options: ['yes', 'no', "it isn't essential"],
    },
    {
        key: 'features', question: 'Do you require any special ports or expansion slots', options: ['serial', 'hDMI', 'pCMCIA', 'sD', 'microSD', 'no'],
    },
	{
        key: 'price', question: 'What is your maximum budget?', type: 'number',
    },
];

let currentQuestionIndex = 0;
let filteredProducts = [...recommendedProducts];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const resultContainer = document.getElementById('result-container');

function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

function displayResults() {
    questionContainer.textContent = 'Your recommended product(s):';
    optionsContainer.innerHTML = '';
	
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(result => {
            const productElement = document.createElement('li');
            productElement.classList.add('product');
            productElement.innerHTML += `
                <article class="card" data-event-type="list" data-name="${result.name} data-product-category="" data-product-brand="${result.brand} data-product-price="${result.price}>
                    <figure class="card-figure">
                        <a href="${result.url}" class="card-figure__link" target="_blank" aria-label="${result.name}, ${result.price}" data-event-type="product-click">
                            <div class="card-img-container">
                                <img src="${result.img}" class="card-image lazyautosizes ls-is-cached lazyloaded" alt="${result.name}" title="${result.name}" data-sizes="auto" sizes="285px">
                            </div>
                        </a>
                       <figcaption class="card-figcaption">
                            <div class="card-figcaption-body">
                                <a href="${result.url}" data-event-type="product-click" class="button button--small card-figcaption-button">Choose Options</a>
                            </div>
                        </figcaption>
                    </figure>
                    <div class="card-body">
                        <p class="card-text" data-test-info-type="brandName">${result.brand}</p>
                        <h3 class="card-title">
                            <a href="${result.url}" target="_blank">${result.name}</a>
                        </h3>
                    <div class="card-text" data-test-info-type="price">
                        <div class="price-section price-section--withoutTax">
                            <span class="price-label"></span>
                            <span class="price-now-label" style="display: none;"></span>
                            <span data-product-price-without-tax class="price price--withoutTax">$${result.price}</span>
                        </div>
                    </div>
                </article>
            `;
	        optionsContainer.appendChild(productElement);
        });
    } else {
        const noProductMatch = document.createElement("li");
        noProductMatch.textContent = "No products match your criteria. Please try a different set of options or increase your budget and try again! Alternatively, fill out our Selection Assistance form for a free quote!";
        optionsContainer.appendChild(noProductMatch);
	}

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.addEventListener("click", restartQuiz);
    restartButton.classList.add("restart", "button", "button--primary");
    resultContainer.appendChild(restartButton);
}

function restartQuiz() {
    filteredProducts = [...recommendedProducts];
    currentQuestionIndex = 0;
    resultContainer.innerHTML = "";
    displayQuestion();
}

function displayQuestion() {
    updateProgressBar();
    if (currentQuestionIndex >= questions.length /* || filteredProducts.length === 1*/) {
        displayResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    if (currentQuestion.type === 'number') {
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.placeholder = 'Enter your budget';
        inputField.id = 'budget-input';
        inputField.classList.add('form-input')

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.classList.add('submit', 'button', 'button--primary');
        submitButton.addEventListener('click', () => {
            const budgetInput = document.getElementById('budget-input').value.trim();
            const sanitizedBudget = parseFloat(budgetInput);
            if (Number.isNaN(sanitizedBudget) || sanitizedBudget < 0) {
                alert('Please enter a non-negative number.');
                return;
            }
            handleBudgetAnswer(sanitizedBudget);
        });
	
        optionsContainer.appendChild(inputField);
        optionsContainer.appendChild(submitButton);
    } else {
        currentQuestion.options.forEach(option => {
            const optionElement = document.createElement('li');
            optionElement.textContent = option;
            optionElement.classList.add('option', 'button', 'button--primary');
            optionElement.addEventListener('click', () => handleAnswer(currentQuestion.key, option));
            optionsContainer.appendChild(optionElement);
        });
    }
}

function handleAnswer(key, value) {
    if (value !== "it isn't essential" && value !== 'either' && value !== 'no') {
        filteredProducts = filteredProducts.filter(result =>
            Array.isArray(result[key]) ? result[key].includes(value) : result[key] === value
        );
    }
    currentQuestionIndex++;
    displayQuestion();
}

function handleBudgetAnswer(budget) {
    filteredProducts = filteredProducts.filter(result => result.price <= budget);
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();