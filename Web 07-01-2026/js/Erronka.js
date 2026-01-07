$(document).ready(function () {
    /* =====================
            HEADER Menua
    ===================== */
    // Submenua iskutatu
    $(".submenua").hide(); 

    // Lógica para el submenú (hover)
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

        document.title="Taldeak - BSF";
        
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
    
});