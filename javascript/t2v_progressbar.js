function submit_txt2vid(){
    // rememberGallerySelection('txt2img_gallery')
    showSubmitButtons('text2vid', false)

    var id = randomId()
    // Using progressbar without the gallery
    requestProgress(id, gradioApp().getElementById('text2vid_results_panel'), null, function(){
        showSubmitButtons('text2vid', true)
    })

    var res = create_submit_args(arguments)

    res[0] = id

    return res
}

function setSubmitButtonsVisibility(tabname, showInterrupt, showSkip, showInterrupting) {
    gradioApp().getElementById(tabname + '_interrupt').style.display = showInterrupt ? "block" : "none";
    gradioApp().getElementById(tabname + '_skip').style.display = showSkip ? "block" : "none";
}
