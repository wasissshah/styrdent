import nodemailer from 'nodemailer';

export async function POST(req) {
  const body = await req.json();
  const { name, email, mobile, message } = body;

  if (!name || !email || !mobile || !message) {
    return Response.json({ message: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'aboy1892@gmail.com', // replace with your admin email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
