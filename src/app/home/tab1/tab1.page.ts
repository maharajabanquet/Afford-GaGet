import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { brandConstant, BRANDIMAGE } from 'src/app/brand-constant/label';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constant = brandConstant;
  brandImage = BRANDIMAGE;
  constructor( private router: Router, private menu: MenuController) {}

  categories = {
    "categories": [
      "Womens",
      "Mobiles",
      "Beauty",
      "Kids",
      "Skin care",
      "Home",
      "Fashion"
    ]
  }; 


  mobiles = [
    {
        "product_id":1,
        "productImage":"../../../assets/products/iphone-12-pro-blue-150x150.png",
        "productName":"Apple iPhone 12 32GB",
        "brand":"Apple",
        "shortName":"iPhone 12 32GB",
        "off":45,
        "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
        "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
        "regularPrice":69000,
        "salesPrice":69900
    },
    {
        "product_id":2,
        "productImage":"../../../assets/products/iphone-12-mini-hero-150x150.jpeg",
        "productName":"Apple iPhone 12 Pro  64GB",
        "brand":"Apple",
        "off":45,
        "shortName":"iPhone 12 Pro 64GB",
        "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
        "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
        "regularPrice":199000,
        "salesPrice":119000
    },
    {
        "product_id":3,
        "productImage":"../../../assets/products/iPhone-SE-2020-Red.jpg?resize=150%2C150&ssl=1",
        "productName":"Apple iPhone SE 32GB",
        "brand":"Apple",
        "off":53,
        "shortName":"iPhone SE 32GB",
        "productLongDescription":"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.",
        "productShortDescription":"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. ",
        "regularPrice":39000,
        "salesPrice":39000
    },
    {
        "product_id":4,
        "productImage":"../../../assets/products/APPLE-IPHONE-11-PRO-MAX-Midnight-Green-CellucityPhoneHub-150x150.png",
        "productName":"Apple iPhone 11 32GB",
        "brand":"Apple",
        "off":25,
        "shortName":"iPhone 11 32GB",
        "productLongDescription":"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.",
        "productShortDescription":"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods.",
        "regularPrice":54000,
        "salesPrice":50490
    },
    {
        "product_id":5,
        "productImage":"../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",
        "productName":"iMac Intel Xeon 8GB 4K Retina",
        "brand":"Apple",
        "off":45,
        "shortName":"Apple iMac",
        "productLongDescription":"The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully designed, incredibly intuitive and packed with powerful tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever.",
        "productShortDescription":"The all-in-one for all. If you can dream it, you can do it on iMac.",
        "regularPrice": 99000,
        "salesPrice": 99900
    },
    {
        "product_id":6,
        "productImage":"../../../assets/products/Apple-MacBook-Air-150x150.png",
        "productName":"Apple MacBook Air 128GB SSD",
        "brand":"Apple",
        "off":15,
        "shortName":"MacBook Air",
        "productLongDescription":"The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100% recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.",
        "productShortDescription":"The incredibly thin and light MacBook Air is now more powerful than ever.",
        "regularPrice":99090,
        "salesPrice":92900
    },
    {
        "product_id":7,
        "productImage":"../../../assets/products/apple-macbook-pro-silver-7-150x150.jpg",
        "productName":"Apple MacBook Pro 512GB SSD",
        "brand":"Apple",
        "off":22,
        "shortName":"MacBook Pro",
        "productLongDescription":"MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage and more — all in a compact 1.4-kilogram package.",
        "productShortDescription":"MacBook Pro elevates the notebook to a whole new level of performance and portability.",
        "regularPrice":199000,
        "salesPrice":199000
    }
];



newArrivals = [
  {
      "product_id":1,
      "productImage":"../../../assets/products/39ed8e8d-01b0-4d86-8cb0-305b4869bb48.__CR288,248,496,496_PT0_SX300_V1___.jpg",
      "productName":"Women Fashion Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse",
      "brand":"Bagger IN",
      "shortName":"Women Fashion Handbag",
      "off":15,
      "productLongDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "productShortDescription":"A14 Bionic, the fastest chip in a smartphone. An edge-to-edge OLED display.",
      "regularPrice":980,
      "salesPrice":850
  },
  {
      "product_id":2,
      "productImage":"../../../assets/products/b5b4e08c1b97e8ed0c403bebda20d789.jpg",
      "productName":"Halife Women's Long Sleeve Boat Neck Off Shoulder Blouse Tops",
      "brand":"Halife US",
      "off":45,
      "shortName":"Women's Long Sleeve",
      "productLongDescription":"A14 Bionic rockets past every other smartphone chip. The Pro camera system takes low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max. And Ceramic Shield delivers four times better drop performance. Let’s see what this thing can do.",
      "productShortDescription":"A14 Bionic rockets past every other smartphone chip.",
      "regularPrice":1200,
      "salesPrice":999
  },
  {
      "product_id":3,
      "productImage":"../../../assets/products/502e._jollify-blue-ble-slim-fit-mens-jeans.jpg",
      "productName":"Derby Fashion Mens Denim Jean",
      "brand":"Derby IN",
      "off":53,
      "shortName":"Derby Mens Denim Jean",
      "productLongDescription":"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.",
      "productShortDescription":"iPhone SE packs a remarkably powerful chip into our most popular size at our most affordable price. ",
      "regularPrice":2500,
      "salesPrice":1500
  },
  {
      "product_id":4,
      "productImage":"../../../assets/products/41Ngmp4DwSL._SY300_QL70_ML2_.jpg",
      "productName":"Woodlands Means Leather Wallet",
      "brand":"Woodlands",
      "off":12,
      "shortName":"Woodlands Mens Wallet",
      "productLongDescription":"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning cable that supports fast charging and is compatible with USB‑C power adapters and computer ports.",
      "productShortDescription":"As part of our efforts to reach our environmental goals, iPhone 11 does not include a power adapter or EarPods.",
      "regularPrice":650,
      "salesPrice":499
  },
  {
      "product_id":5,
      "productImage":"../../../assets/products/Sony_Xperia_1_Price_in_2019_-_Full_phone_specifications.jpg",
      "productName":"Sony Xperia 1 II Black",
      "brand":"Sony",
      "off":45,
      "shortName":"Sony Xperia 1 II ",
      "productLongDescription":"The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully designed, incredibly intuitive and packed with powerful tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in every way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever.",
      "productShortDescription":"The all-in-one for all. If you can dream it, you can do it on iMac.",
      "regularPrice": 99000,
      "salesPrice": 99900
  },
  {
      "product_id":6,
      "productImage":"../../../assets/products/4d52b131-5885-48ff-bdfe-d051a48b3877._CR51,51,508,508_PT0_SX300__.jpg",
      "productName":"Apple Wired Earpods 3.5MM Jack",
      "brand":"Apple",
      "off":15,
      "shortName":"Apple Earpods",
      "productLongDescription":"The incredibly thin and light MacBook Air is now more powerful than ever. It features a brilliant Retina display, new Magic Keyboard, Touch ID, processors with up to twice the performance,1 faster graphics and double the storage capacity. The sleek wedge-shaped design is created from 100% recycled aluminium, making it the greenest Mac ever.2 And with all-day battery life, our most popular Mac is your perfectly portable, do-it-all notebook.",
      "productShortDescription":"The incredibly thin and light MacBook Air is now more powerful than ever.",
      "regularPrice":2688,
      "salesPrice":1200
  },
  {
      "product_id":7,
      "productImage":"../../../assets/products/410wL1a4LML._SY300_QL70_ML2_.jpg",
      "productName":"Titan Mens Watch TM-7867",
      "brand":"Titan",
      "off":88,
      "shortName":"Titan Mens Watch",
      "productLongDescription":"MacBook Pro elevates the notebook to a whole new level of performance and portability. Wherever your ideas take you, you’ll get there faster than ever with high‑performance processors and memory, advanced graphics, blazing‑fast storage and more — all in a compact 1.4-kilogram package.",
      "productShortDescription":"MacBook Pro elevates the notebook to a whole new level of performance and portability.",
      "regularPrice":9866,
      "salesPrice":983
  }
];


doSearch(){
this.router.navigateByUrl("/search");
}

openMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
}


}
