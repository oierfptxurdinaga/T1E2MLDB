<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" />

    <xsl:template match="/">

        <h1 class="orri-izenburua">Lehikaketako Taldeak</h1>


        <section class="sectiontaldeak">

            <xsl:for-each select="/Taldeak/taldea">

                <h2>
                    <xsl:value-of select="izena" />
                </h2>

                <article class="articletaldeak">

                    <img src="{irudia}" alt="Logo de {izena}" class="taldeaklogo">
                        <xsl:attribute name="alt">Logo <xsl:value-of select="izena" /></xsl:attribute>
                    </img>

                    <div class="info">

                        <h2>
                            <xsl:value-of select="izena" />
                        </h2>

                        <p> 📍<xsl:value-of select="helbidea" />
                        </p>

                        <a href="{web}">Web del equipo</a>

                    </div>
                </article>

            </xsl:for-each>

        </section>


    </xsl:template>

</xsl:stylesheet>