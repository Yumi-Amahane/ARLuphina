window.onload = function() {
  var size = 512
  var canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  canvas.style.border = 'solid black 1px';

  document.body.appendChild(canvas);

  var mmd = new MMD(canvas, canvas.width, canvas.height);
  mmd.initShaders();
  mmd.initParameters();
  mmd.registerKeyListener(document);
  mmd.registerMouseListener(document);

  var miku = new MMD.Model('model', 'LuphinaSB69.pmx');




  miku.load(function() {
    mmd.addModel(miku);
    mmd.initBuffers();
    mmd.start();

    var dance = new MMD.Motion('motion/nekomimi_kuro.vmd');
    dance.load(function() {
      mmd.addModelMotion(miku, dance, true);

      mmd.play()

      setInterval(function() {
        console.log('fps = ' + mmd.realFps);
      }, 1000);
    });
  });
};
