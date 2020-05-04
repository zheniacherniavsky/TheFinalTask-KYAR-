<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>FriendShip</h2>
 <table border="1px">
	 <tr bgcolor="#9acd32">
		 <th style="text-align:center">Имя</th>
		 <th style="text-align:center">Фамилия</th>
		 <th style="text-align:center">Отчество</th>
		 <th style="text-align:center">Проходной балл</th>
		 <th style="text-align:center">Дата рождения</th>
	 </tr>
<xsl:for-each select="LIST/FRIEND">
	<xsl:sort order="ascending" select="BIRTHDAY"/>
		<xsl:choose>
		<xsl:when test = "6>BALL">
		 <tr style="background-color: red">
			 <td><xsl:value-of select="FIRSTNAME"/></td>
			 <td><xsl:value-of select="LASTNAME"/></td>
			 <td><xsl:value-of select="FATHERNAME"/></td>
			 <td><xsl:value-of select="BALL"/></td>
			 <td><xsl:value-of select="BIRTHDAY"/></td>
		 </tr>
		</xsl:when>
		<xsl:when test = "BALL=6">
		 <tr style="background-color: lightgreen">
			 <td><xsl:value-of select="FIRSTNAME"/></td>
			 <td><xsl:value-of select="LASTNAME"/></td>
			 <td><xsl:value-of select="FATHERNAME"/></td>
			 <td><xsl:value-of select="BALL"/></td>
			 <td><xsl:value-of select="BIRTHDAY"/></td>
		 </tr>
		</xsl:when>
		<xsl:otherwise>
		 <tr style="background-color: lightblue">
			 <td><xsl:value-of select="FIRSTNAME"/></td>
			 <td><xsl:value-of select="LASTNAME"/></td>
			 <td><xsl:value-of select="FATHERNAME"/></td>
			 <td><xsl:value-of select="BALL"/></td>
			 <td><xsl:value-of select="BIRTHDAY"/></td>
		 </tr>
		</xsl:otherwise>
		</xsl:choose>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>