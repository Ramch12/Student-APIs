# Student-APIs
1.create a folder named config and create a .env file in it.Write port no and privatekey in .env file.
for creating a route use (/api/student) to create a student and send the following fields in the body of request.
{
name,
email,
phone,
password,
favTeacher
}

2.Use (/api/auth/) endpoint to authenticate a user a send email and password in body  of the request.
3.Use (/api/update )endpoint to update a favteacher(send the jwt in header(key of header is 'x-auth-token'))
4.Use (/api/getstudents) to see all the student present in database.



