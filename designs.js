var height,width,color,cell;
const sub = $('#Submit').submit();
const canvas = $('#pixelCanvas');

sub.click(function(){
  						height = $('#inputHeight').val();
					 	width = $('#inputWidth').val()
						makeGrid(height,width)
  						event.preventDefault();
					});

function makeGrid(height,width) {
  canvas.children().remove();
  for(let i=0;i<height;i++){
      canvas.append('<tr></tr>')
    }
  let rows =$('#pixelCanvas tr');
    for(let j=0;j<width;j++){
  	  rows.append('<td></td>')
  }
 cell = canvas.find('td');
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!");
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
}

