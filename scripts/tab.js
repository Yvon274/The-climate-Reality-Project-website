$("#joinButton").click(function() {
    $("#joinButton").addClass("active");
    $("#engageButton").removeClass("active");
    $("#actionButton").removeClass("active");
    $("#successButton").removeClass("active");
    $("#joinTab").removeClass("hidden");
    $("#engageTab").addClass("hidden");
    $("#actionTab").addClass("hidden");
    $("#successTab").addClass("hidden");
});

$("#actionButton").click(function() {
    $("#actionButton").addClass("active");
    $("#engageButton").removeClass("active");
    $("#joinButton").removeClass("active");
    $("#successButton").removeClass("active");
    $("#actionTab").removeClass("hidden");
    $("#engageTab").addClass("hidden");
    $("#joinTab").addClass("hidden");
    $("#successTab").addClass("hidden");
});

$("#engageButton").click(function() {
    $("#engageButton").addClass("active");
    $("#actionButton").removeClass("active");
    $("#joinButton").removeClass("active");
    $("#successButton").removeClass("active");
    $("#engageTab").removeClass("hidden");
    $("#actionTab").addClass("hidden");
    $("#joinTab").addClass("hidden");
    $("#successTab").addClass("hidden");
});

$("#successButton").click(function() {
    $("#successButton").addClass("active");
    $("#actionButton").removeClass("active");
    $("#joinButton").removeClass("active");
    $("#engageButton").removeClass("active");
    $("#successTab").removeClass("hidden");
    $("#actionTab").addClass("hidden");
    $("#joinTab").addClass("hidden");
    $("#engageTab").addClass("hidden");
});
