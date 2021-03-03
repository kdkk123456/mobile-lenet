Webcam.set({
    crop_width: 280,
    height: 300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
})


Webcam.attach("camera")
Webcam.flip()

function capture() {
    Webcam.snap(
        function (snap) {
            document.getElementById("snapshot").innerHTML=`<img src=${snap} id="image">`      
        }
    )
}
console.log(ml5.version)
classifier=ml5.imageClassifier("MobileNet",modelloaded)
function modelloaded() {
    console.log("modelloaded")   
}
function identify() {
    img=document.getElementById("image")
    classifier.classify(img,gotresults)
}
function gotresults(error,results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        console.log(results[0].label)
        document.getElementById("output").innerHTML=results[0].label
    }
}
