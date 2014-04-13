// $("._li").bind("DOMSubtreeModified", HandleDOM_Change);

$(".comment_link").each(
    function(i, obj) {
        console.log(obj);
        obj.firstChild.value = "Comment as Dave Fontenot";
    }
);

$("._li").bind("DOMSubtreeModified", HandleDOM_ChangeWithDelay);

var zGbl_DOM_ChangeTimer = null;
function HandleDOM_ChangeWithDelay (zEvent) {
    if (typeof zGbl_DOM_ChangeTimer == "number") {
        clearTimeout(zGbl_DOM_ChangeTimer);
        zGbl_DOM_ChangeTimer = '';
    }
    zGbl_DOM_ChangeTimer = setTimeout(HandleDOM_Change, 5);
}

function AddDF(obj) {
    // this is the definition of janky
    var maybe = obj.parentNode.parentNode.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild.lastChild.firstChild.firstChild.nextSibling;
    if (maybe) {
        // console.log(maybe.firstChild.lastChild.firstChild);
        var textin = maybe.firstChild.lastChild.firstChild;
        // console.log("here");
        textin.style.color = "black" ;
        textin.value = "#HellYeah";
        textin.innerHTML = "#HellYeah";
    }
}

function HandleDOM_Change() {
    // must be used with delay, otherwise recursive DOM change loop
    $(".comment_link").each(
        function(i, obj) {
            console.log(obj);
            obj.firstChild.value = "Comment as Dave Fontenot";
            obj.firstChild.onclick = function () { AddDF(obj); };
        }
    );
}