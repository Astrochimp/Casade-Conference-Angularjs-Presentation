<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="system-index-block">
        <xsl:comment>#protect-top    [    
  <xsl:for-each select="calling-page/system-page/system-data-structure/menuitem">
                 <xsl:text>{"menuitem": [</xsl:text>
                 <xsl:text>{"name": "</xsl:text>
                 <xsl:value-of select="name" />
                 <xsl:text>", "title": "</xsl:text>
                 <xsl:value-of select="title" />
                 <xsl:text>"}</xsl:text>
                 <xsl:text>]}</xsl:text>
                 <xsl:if test="position() != last()">
                     <xsl:text>, </xsl:text>
                 </xsl:if>
                 
             </xsl:for-each>
            
    ]    #protect-top</xsl:comment>
    </xsl:template>
</xsl:stylesheet>
