function callbackFunction() {
    pcsid = pushcrew.subscriberId, 0 != pcsid && -1 != pcsid && (cf_uvid = readCookie("cf_uvid"), cf_uvid != undefined && readCookie("pushcrewsub") == undefined && (user_id = $("#user-id").val(), app_domain = "https://" + $('meta[property="cf:app_domain"]').attr("content"), trackPath = "/v1/track_pushcrew", trackUrl = app_domain + trackPath, data = {
        user_id: user_id,
        cf_uvid: cf_uvid,
        pcsid: pcsid
    }, $.ajax({
        url: trackUrl,
        data: data,
        success: function() {
            console.log("success"), createCookie("pushcrewsub", !0, 1)
        },
        dataType: "html"
    })))
}
window._pcq = window._pcq || [], _pcq.push(["APIReady", callbackFunction]), _pcq.push(["subscriptionSuccessCallback", callbackFunction]);