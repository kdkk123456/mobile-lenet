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