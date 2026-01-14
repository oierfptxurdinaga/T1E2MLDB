<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:output method="html" indent="yes" />
<xsl:template match="/">
<h1 class="orri-izenburua">Lehiaketako Sailkapena</h1>

<section class="sailkapena">
    <table class="taula-sailkapena">
        <thead>
        <tr>
            <th>Pos</th>
            <th>Logoa</th>
            <th>Taldea</th>
            <th>Puntuak</th>
            <th>JP</th>
            <th>I</th>
            <th>G</th>
            <th>AP</th>
            <th>KP</th>
        </tr>
        </thead>
        <tbody>
        <xsl:for-each select="sailkapena/taldea">
            <tr>
                <td><xsl:value-of select="@pos"/></td>
                <td>
                    <img class="logo-taula">
                        <xsl:attribute name="src">
                            <xsl:value-of select="logoa"/>
                        </xsl:attribute>
                    </img>
                </td>
                <td><xsl:value-of select="izena"/></td>
                <td><xsl:value-of select="puntuak"/></td>
                <td><xsl:value-of select="jp"/></td>
                <td><xsl:value-of select="irabaziak"/></td>
                <td><xsl:value-of select="galerak"/></td>
                <td><xsl:value-of select="ap"/></td>
                <td><xsl:value-of select="kp"/></td>
            </tr>
        </xsl:for-each>
</tbody>
    </table>
</section>
</xsl:template>

</xsl:stylesheet>
