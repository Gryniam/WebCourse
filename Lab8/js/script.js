(function () {
    var names = ["Vlad", "Max", "Mike", "Alex", "Yaroslav", "Valya", "Zelenskyi", "Artem", "Jakob", "Jarmolenko", "Shevchenko", "Natalia"];

    var bye = speakBye();
    var hello = speakHello();

    console.log("Селекціонування імен за першою літерою.(Якщо перша літера J or j)");
    names.forEach(item => {
        if (item.charAt(0) === "J" || item.toLowerCase().charAt(0) === "j") {
            bye(item);
        } else {
            hello(item);
        }
    });


    console.log("-----------------------------------------------------");
    console.log("Якщо сума літер імен більша за 4.");
    names.forEach(item => {
        var splitNames = item.split("");
        if(splitNames.length > 4) {
            bye(item);
        } else {
            hello(item);
        }
    });
}());
