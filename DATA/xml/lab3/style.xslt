<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Список специальностей факультета ИТ</h2>
 <table border="1px">
	 <tr bgcolor="#9acd32">
		 <th style="text-align:center">Специальность</th>
		 <th style="text-align:center">Проходной балл</th>
		 <th style="text-align:center">План набора</th>
		 <th style="text-align:center">Город</th>
	 </tr>
<xsl:for-each select="FACULTY/SPECIALITY">
	 <tr>
		 <td><xsl:value-of select="UNIVER"/></td>
		 <td><xsl:value-of select="BALL"/></td>
		 <td><xsl:value-of select="PEOPLE"/></td>
		 <td><xsl:value-of select="CITY"/></td>
	 </tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>