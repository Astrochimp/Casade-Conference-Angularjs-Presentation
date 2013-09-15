<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output encoding="UTF-8"/>
    <xsl:template match="system-index-block">
        <xsl:comment>#START-ROOT-CODE
           [ 
            <xsl:for-each select="calling-page/system-page/system-data-structure/menuitem">
                { "menuitem":[
                    {
                    "name": "<xsl:value-of select="name"/>",
                    "price": "<xsl:value-of select="price"/>",
                    "desc": "<xsl:value-of select="normalize-space(desc)"/>",
                    "image": [ {
                        
                        "path": "<xsl:value-of select="image/path"/>",
                        "link": "<xsl:value-of select="image/link"/>",
                        
                       } ]
                } ] }<xsl:if test="position()!=last()">,</xsl:if>
            </xsl:for-each>
         ]
         //#END-ROOT-CODE</xsl:comment>
    </xsl:template>
</xsl:stylesheet>