$(document).ready(function() {
  
    //I want to Edit my biography
    $('.addbio .edit').click(function() {
        var currenttext = $('.addbio p').text();
        $('.addbio textarea').val(currenttext).removeClass('hidden').focus();
        
        $(this).addClass('hidden');
        $('.addbio .save').removeClass('hidden');
        $('.addbio .cancel').removeClass('hidden');
        
});
    
    //I want to Save my written biography 
    $('.addbio .save').click(function() {
        var savedtext = $('textarea').val();
        $('.addbio p').text(savedtext);
        $('.addbio textarea').addClass('hidden');
        $(this).addClass('hidden');
        $('.addbio .cancel').addClass('hidden');
        $('.addbio .edit').removeClass('hidden');    
});
    
    //I want to Cancel editing my biography   
    $('.addbio .cancel').click(function() {
        $('textarea').addClass('hidden');
          $(this).addClass('hidden');
        $('.addbio .save').addClass('hidden');
        $('.addbio .edit').removeClass('hidden');
        
});
    
    // Progress wheel
    
var el = document.getElementById('uplprogress'); // get canvas
    
    
var options = {
    percent:  el.getAttribute('data-percent') || 25,
    size: el.getAttribute('data-size') || 300,
    lineWidth: el.getAttribute('data-line') || 25,
    rotate: el.getAttribute('data-rotate') || 0
}

var canvas = document.createElement('canvas');
var span = document.createElement('span');
span.textContent = options.percent + '%';
    
if (typeof(G_vmlCanvasManager) !== 'undefined') {
    G_vmlCanvasManager.initElement(canvas);
}

var ctx = canvas.getContext('2d');
canvas.width = canvas.height = options.size;
   
el.appendChild(span);
el.appendChild(canvas);

ctx.translate(options.size / 2, options.size / 2); // change center
ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

//imd = ctx.getImageData(0, 0, 240, 240);
var radius = (options.size - options.lineWidth) / 2;

var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(0, percent || 1), 1);
		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
		ctx.strokeStyle = color;
        ctx.lineCap = 'butt'; // butt, round or square
		ctx.lineWidth = lineWidth
		ctx.stroke();
};

drawCircle('#efefef', options.lineWidth, 100 / 100);
drawCircle('#3bb36c', options.lineWidth, options.percent / 100);

// End Progress wheel
   
    //Begin Track progress Slider
    
      $(function() {
    $('.trackprogress').slider();
  });

    // End Track progress Slider
});




