<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="system-index-block">
        <!--
			Must be NO WHITESPACE between <xsl:comment> and #START-ROOT-CODE,
			same for #END-ROOT-CODE and </xsl:comment>
		-->
        <xsl:comment>#START-ROOT-CODE
			<xsl:text>({</xsl:text>
			<xsl:text>"menuitems": [</xsl:text>
     		
            <xsl:for-each select="calling-page/system-page/system-data-structure/menuitem">
                 <xsl:text>{"menuitem": [</xsl:text>
                 <xsl:text>{"name": "</xsl:text>
                 <xsl:value-of select="name" />
                 <xsl:text>", "price": "</xsl:text>
                 <xsl:value-of select="price" />
                 <xsl:text>"}</xsl:text>
                 <xsl:text>]}</xsl:text>
                 <xsl:if test="position() != last()">
                     <xsl:text>, </xsl:text>
                 </xsl:if>
                 
             </xsl:for-each>
            
			<xsl:text>]</xsl:text>
			<xsl:text>, "bogus": "</xsl:text>
		#END-ROOT-CODE</xsl:comment>
        "
    </xsl:template>
    
    <!--
		Simple example to output {"name": "system-name", "title": "Title
		Metadata"}
	-->
    <xsl:template match="system-page">
        <xsl:text>{"name": "</xsl:text>
        <xsl:value-of select="name" />
        <xsl:text>", "title": "</xsl:text>
        <xsl:value-of select="title" />
        <xsl:text>"}</xsl:text>
        <xsl:if test="position() != last()">
            <xsl:text>, </xsl:text>
        </xsl:if>
    </xsl:template>
    
    
    <xsl:template match="calling-page/system-page/system-data-structure">
        <xsl:for-each select="menuitem">
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
    </xsl:template>
</xsl:stylesheet>