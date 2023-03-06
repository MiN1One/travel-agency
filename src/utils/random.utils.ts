export const generatedCaptchaImage = () => {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var captcha = '';
  for (var i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  var canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 100;
  var ctx = canvas.getContext('2d')!;
  ctx.font = '48px serif';
  ctx.fillText(captcha, 50, 50, 150);
  ctx.setTransform(1, 0.2, -0.2, 1, 0, 0);
  ctx.drawImage(canvas, 0, 0);
  return {
    image: canvas.toDataURL(),
    password: captcha,
  };
};