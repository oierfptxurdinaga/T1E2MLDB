<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" indent="yes" />
<xsl:template match="/">

    <h1 class="orri-izenburua">Lehiaketako Jaurdunaldiak</h1>
    <br/>
    <hr/>

    <xsl:for-each select="jaurdunaldiak/jaurdunaldia">
        <h2 class="Jaurdunaldiak-izenburua"><xsl:value-of select="@izena"/></h2>
        <hr/>

        <article>
            <div class="divjaurdunaldia">
                <xsl:for-each select="partidua">
                    <div class="partiduak">

                        <!-- Equipo local -->
                        <div class="taldea">
                            <img src="{etxekoa/logoa}" class="imgjaurdunaldiak"/>
                            <p class="taldearen-izena"><xsl:value-of select="etxekoa/izena"/></p>
                            <p class="puntuak"><xsl:value-of select="etxekoa/puntuak"/></p>
                        </div>

                        <!-- Info partido -->
                        <div class="info-partidua">
                            <span class="vspartidua">VS</span>
                            <span class="orduapartidua"><xsl:value-of select="@ordua"/></span>
                        </div>

                        <!-- Equipo visitante -->
                        <div class="taldea">
                            <img src="{kanpokoa/logoa}" class="imgjaurdunaldiak"/>
                            <p class="taldearen-izena"><xsl:value-of select="kanpokoa/izena"/></p>
                            <p class="puntuak"><xsl:value-of select="kanpokoa/puntuak"/></p>
                        </div>

                    </div>
                </xsl:for-each>
            </div>
        </article>
        <hr/>
    </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
