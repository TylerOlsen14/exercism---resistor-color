// export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]
export const colorCode = (color) => {
    var lowerCaseString = color.toLowerCase();
    var value;
    switch (lowerCaseString) {
    case "black":
        value=0;
        break;
    case "white":
        value=9;
        break;
    case "orange":
        value=3;
        break;

    default:
        value = "error";
}
return value
}
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"]