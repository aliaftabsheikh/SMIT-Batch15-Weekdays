function onSwapPic(){
    
    const image = document.getElementById('swap-img')
    image.className = "image"

    // const classBigExist = document.getElementsByClassName('big')


    // if(!classBigExist){
    //    image.className += 'big'
    // }

    const randomCars = [
        "https://cdni.autocarindia.com/Utils/ImageResizerV2.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/BMW-5-Series-080720241503.jpg&w=872&h=578&q=75&c=1",

        "https://www.motortrend.com/files/667b3c1395a0b10008d1e57c/2025bmwm5sedan48.jpg?w=768&width=768&q=75&format=webp",

        "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",

        "https://pakdrive.com.pk/wp-content/uploads/2024/07/modern-empty-room.webp",

        "https://www.gmcarabia.com/content/dam/gmc/middleeast/master/en/index/trucks/01-images/2023-sierra-1500-denali.jpg?imwidth=960",


        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/H2PMQTPKLNMNFJIURBQZ4INY4I.jpg"
    ]


    const car = randomCars[Math.floor(Math.random() * randomCars.length)]

   image.src = car

   image.className += " big"
}
