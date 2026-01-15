$(document).ready(function () {
    /* =====================
            HEADER Menua
    ===================== */
    // Submenua iskutatu
    $(".submenua").hide();

    // Logika ematen du submenura (hover)
    $(".menua > li").hover(
        function () {
            // Aitaren LI sartzean
            $(this)
                .find(".submenua")
                .stop(true, true)
                .slideDown(200);
        },
        function () {
            // Aitaren LI ateratzean (submenuak)
            $(this)
                .find(".submenua")
                .stop(true, true)
                .slideUp(200);
        }
    );
    /* =====================
        Taldeak XSL
===================== */
    $("#taldeak").on("click", function () {

        document.title = "Taldeak";

        $.ajax({
            type: "GET",
            url: "xml/Taldeak.xml",
            dataType: "xml",
            success: function (xml) {
                $.ajax({
                    type: "GET",
                    url: "xml/Taldeak.xsl",
                    dataType: "xml",
                    success: function (xsl) {
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        var resultDocument = xsltProcessor.transformToDocument(xml);
                        var resultHtml = new XMLSerializer().serializeToString(resultDocument);
                        $("main").html(resultHtml);
                    },
                    error: function () {
                        console.log("Error loading XSL");
                    }
                });
            },
            error: function () {
                console.log("Error loading XML");
            }
        });
    });

    $("#sailkapena").on("click", function () {

        document.title = "Sailkapena";

        $.ajax({
            type: "GET",
            url: "xml/Sailkapena.xml",
            dataType: "xml",
            success: function (xml) {
                $.ajax({
                    type: "GET",
                    url: "xml/Sailkapena.xsl",
                    dataType: "xml",
                    success: function (xsl) {
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        var resultDocument = xsltProcessor.transformToDocument(xml);
                        var resultHtml = new XMLSerializer().serializeToString(resultDocument);
                        $("main").html(resultHtml);
                    },
                    error: function () {
                        console.log("Error loading XSL");
                    }
                });
            },
            error: function () {
                console.log("Error loading XML");
            }
        });
    });

    $("#jaurdunaldiak").on("click", function () {

        document.title = "Jaurdunaldiak";

        $.ajax({
            type: "GET",
            url: "xml/Jaurdunaldiak.xml",
            dataType: "xml",
            success: function (xml) {
                $.ajax({
                    type: "GET",
                    url: "xml/Jaurdunaldiak.xsl",
                    dataType: "xml",
                    success: function (xsl) {
                        var xsltProcessor = new XSLTProcessor();
                        xsltProcessor.importStylesheet(xsl);
                        var resultDocument = xsltProcessor.transformToDocument(xml);
                        var resultHtml = new XMLSerializer().serializeToString(resultDocument);
                        $("main").html(resultHtml);
                    },
                    error: function () {
                        console.log("Error loading XSL");
                    }
                });
            },
            error: function () {
                console.log("Error loading XML");
            }
        });
    });

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showNextSlide, 3000);

    $("#organigrama").on("click", function (e) {
        e.preventDefault(); //Honek orria jauzi egitea saihesten du
        document.title = "Organigrama";
        $("main").load("organigramaReal.html");
    });

    $("#historioa").on("click", function (e) {
        e.preventDefault(); //Honek orria jauzi egitea saihesten du
        document.title = "Historioa";
        $("main").load("BSFrenHistorioa.html");
    });


    $("#kontaktua").on("click", function (e) {
        e.preventDefault(); //Honek orria jauzi egitea saihesten du
        document.title = "Gure Kontaktua";
        $("main").load("Kontaktua.html");
    });

});