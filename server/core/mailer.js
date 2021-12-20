import nodemailer from 'nodemailer';

const options = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'test_to_tst@mail.ru',
    pass: '123456789tst'
  }
};

const transport = nodemailer.createTransport(options);

export default transport;