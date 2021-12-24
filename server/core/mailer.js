import nodemailer from 'nodemailer';

const options = {
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'test_to_tst@mail.ru',
    pass: '123456789tst'
  }
};

const transport = nodemailer.createTransport(options);

export default transport;