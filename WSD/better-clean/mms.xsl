<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
			<head>
				<title>Maintenance Management</title>
			</head>
			<body>
				<h2 style="text-align:center;">Maintenance Management System</h2>
				<h3 style="text-align:center;">Customer</h3>
				<table border="2" align="center">
					<tr>
						<th>cust_id</th>
						<th>cust_name</th>
						<th>cust_type</th>
					</tr>
					<xsl:for-each select="MMS/Cust">
						<tr>
							<td>
								<xsl:value-of select="cust_id"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="cust_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="cust_type"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				<h3 style="text-align:center;">Staff</h3>
				<table border="2" align="center">
					<tr>
						<th>staff_id</th>
						<th>staff_name</th>
						<th>staff_contact</th>
						<th>staff_status</th>
					</tr>
					<xsl:for-each select="MMS/Staff">
						<tr>
							<td>
								<xsl:value-of select="staff_id"></xsl:value-of>
							</td>
							
							<td>
								<xsl:value-of select="staff_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="staff_contact"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="staff_status"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				
				<h3 style="text-align:center;">Request</h3>
				<table border="2" align="center">
					<tr>
						<th>Request_id</th>
						<th>Request_name</th>
						<th>Request_status</th>
						<th>Issue_date</th>
						<th>Request_Category</th>
					</tr>
					<xsl:for-each select="MMS/Request">
					<xsl:sort select="registration_date" order="ascending"></xsl:sort>
						<tr>

						<xsl:choose>
							<xsl:when test="Request_id &gt;100000">
								<td bgcolor="red">
									<xsl:value-of select="Request_id"></xsl:value-of>
								</td>
							
							</xsl:when>
						
						</xsl:choose>
							<td>
								<xsl:value-of select="Request_id"></xsl:value-of>
							</td>
						
							<td>
								<xsl:value-of select="Cust_name"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="Request_status"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="issue_date"></xsl:value-of>
							</td>
							<td>
								<xsl:value-of select="Request_Category"></xsl:value-of>
							</td>
						</tr>
					</xsl:for-each>
				</table>
				
				
				
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>


